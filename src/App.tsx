import React, { useState, useMemo, useRef } from 'react';
import { EXPOSITORES, Expositor } from './data/expositores';
import { STAND_ZONES, StandZone, getZoneByExpositor } from './data/standsLayout';
import { 
  Search, 
  MapPin, 
  Filter, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  HelpCircle, 
  Eye, 
  Map, 
  List, 
  Building, 
  TrendingUp, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Relative path to the generated image
import mapImage from './assets/images/constructecnia_plano_1779313391287.png';

export default function App() {
  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPabellon, setSelectedPabellon] = useState('Todos');
  const [selectedExpositor, setSelectedExpositor] = useState<Expositor | null>(null);
  
  // Interface View Mode (helps on mobile/tablet)
  const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');

  // Interactive Zoom / Pan State for the Map
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Robust image loading with local and fallback sources, ensuring it always loads!
  const GOOGLE_DRIVE_ID = "1hTfK4paxx0bvFYB2sttsMR9KxxPO5P7t";
  const IMAGE_SOURCES = useMemo(() => {
    return [
      "https://framerusercontent.com/images/xkwulyGlb97P4hnU3jddgaBoVXk.png?scale-down-to=4096&width=6000&height=4246",
      `https://lh3.googleusercontent.com/d/${GOOGLE_DRIVE_ID}`,
      `https://docs.google.com/uc?export=view&id=${GOOGLE_DRIVE_ID}`,
      `https://drive.google.com/uc?export=view&id=${GOOGLE_DRIVE_ID}`,
      mapImage,
      "/src/assets/images/constructecnia_plano_1779313391287.png",
      "src/assets/images/constructecnia_plano_1779313391287.png"
    ].filter((src): src is string => typeof src === 'string' && !!src);
  }, []);

  const [imgSrc, setImgSrc] = useState(IMAGE_SOURCES[0]);
  const [sourceIndex, setSourceIndex] = useState(0);

  React.useEffect(() => {
    setImgSrc(IMAGE_SOURCES[0]);
    setSourceIndex(0);
  }, [IMAGE_SOURCES]);

  const handleImageError = () => {
    const nextIndex = sourceIndex + 1;
    if (nextIndex < IMAGE_SOURCES.length) {
      setSourceIndex(nextIndex);
      setImgSrc(IMAGE_SOURCES[nextIndex]);
    }
  };

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapImageRef = useRef<HTMLImageElement>(null);

  // Quick categories
  const categories = useMemo(() => {
    const list = new Set(EXPOSITORES.map(e => e.pabellon).filter(Boolean));
    return ['Todos', ...Array.from(list)];
  }, []);

  // Quick search trending company suggestions
  const trendingSearches = [
    'JAMES', 'NGO', 'CYPE', 'CHACOMER', 'KINGSPAN', 'LUME'
  ];

  // Filtering Expositores
  const filteredExpositores = useMemo(() => {
    return EXPOSITORES.filter(expo => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        expo.empresa.toLowerCase().includes(query) ||
        expo.standText.toLowerCase().includes(query) ||
        expo.area.toLowerCase().includes(query) ||
        expo.stands.some(s => s.toString() === query);

      const matchesPabellon = 
        selectedPabellon === 'Todos' || 
        expo.pabellon === selectedPabellon;

      return matchesSearch && matchesPabellon;
    });
  }, [searchQuery, selectedPabellon]);

  // Find neighboring expositors when one is selected
  const neighbors = useMemo(() => {
    if (!selectedExpositor) return [];
    const currentZone = getZoneByExpositor(selectedExpositor);
    if (!currentZone) return [];

    return EXPOSITORES.filter(expo => {
      if (expo.id === selectedExpositor.id) return false;
      const zone = getZoneByExpositor(expo);
      return zone && zone.standsRange === currentZone.standsRange;
    }).slice(0, 4);
  }, [selectedExpositor]);

  // Select an expositor and automatically trigger map focus
  const handleSelectExpositor = (expo: Expositor) => {
    setSelectedExpositor(expo);
    setActiveTab('map'); // switch to map view on mobile

    const zone = getZoneByExpositor(expo);
    if (zone) {
      const zoom = 4.2; // Bring user closer to the selected stand (Increased from 2.2 to 4.2 for maximum zoom details)
      setZoomLevel(zoom);
      
      const cx = zone.x + zone.w / 2;
      const cy = zone.y + zone.h / 2;
      
      if (mapContainerRef.current) {
        const width = mapContainerRef.current.clientWidth;
        const height = mapContainerRef.current.clientHeight;
        const targetX = ((50 - cx) / 100) * width * zoom;
        const targetY = ((50 - cy) / 100) * height * zoom;
        setPanOffset({ x: targetX, y: targetY });
      } else {
        const targetX = (50 - cx) * 6.5 * (zoom / 1.8);
        const targetY = (50 - cy) * 4.5 * (zoom / 1.8);
        setPanOffset({ x: targetX, y: targetY });
      }
    } else {
      setZoomLevel(1.1);
      setPanOffset({ x: 0, y: 0 });
    }
  };

  // Reset zoom & pan
  const handleResetMap = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setSelectedExpositor(null);
  };

  // Zoom controls (increased limit to 8.0 and steps to 0.6)
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.6, 8.0));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.6, 0.6));

  // Wheel zoom controls for mouse hovering
  const handleWheel = (e: React.WheelEvent) => {
    const zoomFactor = 1.12;
    if (e.deltaY < 0) {
      setZoomLevel(prev => Math.min(prev * zoomFactor, 8.0));
    } else {
      setZoomLevel(prev => Math.max(prev / zoomFactor, 0.6));
    }
  };

  // Map dragging handlers (Pan)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Touch controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ 
        x: e.touches[0].clientX - panOffset.x, 
        y: e.touches[0].clientY - panOffset.y 
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPanOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  // Calculate coordinates for highlighting overlay box
  const activeZone = useMemo(() => {
    if (!selectedExpositor) return null;
    return getZoneByExpositor(selectedExpositor);
  }, [selectedExpositor]);

  // Derived list of all matched zones matching current search
  const isSearching = searchQuery.trim().length > 0;
  const matchedZones = useMemo(() => {
    if (!isSearching) return [];
    const zones: StandZone[] = [];
    const seenRanges = new Set<string>();
    
    filteredExpositores.forEach(expo => {
      const zone = getZoneByExpositor(expo);
      if (zone && !seenRanges.has(zone.standsRange)) {
        seenRanges.add(zone.standsRange);
        zones.push(zone);
      }
    });
    return zones;
  }, [filteredExpositores, isSearching]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand selection:text-white pb-6">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Body content */}
      <main className="max-w-7xl mx-auto px-3 py-4 sm:px-6 lg:px-8 sm:py-8">
        
        {/* Only Search Engine with explanation (Page Header and Bento Stats deleted) */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-6 mb-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-sans">
              Buscador de Stands
            </h2>
            <p className="text-xs text-slate-500 font-sans mt-1">
              Ubicá expositores comerciales de Constructecnia 2026 al instante. El plano es totalmente interactivo, podés hacer zoom y arrastrar para desplazarte.
            </p>
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-brand/70" />
              </div>
              <input
                type="text"
                placeholder="Ej. NGO, James, Cype, Chacomer, Stand 18..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-brand focus:ring-1 focus:ring-brand/40 rounded-xl text-slate-850 placeholder-slate-400 text-xs font-semibold transition outline-none shadow-sm"
                id="search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <circle />
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="sm:col-span-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Filter className="w-3.5 h-3.5 text-brand/70" />
              </div>
              <select
                value={selectedPabellon}
                onChange={e => setSelectedPabellon(e.target.value)}
                className="w-full pl-8 pr-8 py-2.5 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-brand rounded-xl text-slate-700 text-xs font-semibold transition cursor-pointer outline-none appearance-none shadow-sm"
                id="pabellon-filter"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat === 'Todos' ? 'Todos los Sectores' : cat}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* Sugeridos horizontally scrollable on mobile to block less vertical height */}
          <div className="flex items-center gap-2 mt-3.5 overflow-x-auto scrollbar-none pb-0.5">
            <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1 uppercase tracking-wider shrink-0 select-none">
              <TrendingUp className="w-3 h-3 text-brand" />
              <span>Sugeridos:</span>
            </span>
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
              {trendingSearches.map((term, i) => (
                <button
                  key={i}
                  onClick={() => setSearchQuery(term)}
                  className="text-[11px] font-semibold bg-slate-100 text-slate-600 hover:bg-brand-light hover:text-brand border border-slate-200/60 px-2.5 py-1 rounded-lg transition shrink-0 cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </section>        {/* View switcher for responsive design */}
        <div className="flex md:hidden border border-slate-200 mb-4 bg-white p-1 rounded-lg shadow-sm">
          <button
            onClick={() => setActiveTab('map')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-bold transition ${
              activeTab === 'map' ? 'bg-brand text-white shadow' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Ver plano</span>
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-bold transition ${
              activeTab === 'list' ? 'bg-brand text-white shadow' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Lista ({filteredExpositores.length})</span>
          </button>
        </div>

        {/* Columns Grid Layout - order altered so map displays on top for medium/small screens */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* Directory Panel Side List */}
          <section className={`md:col-span-5 flex flex-col gap-4 order-2 md:order-1 ${activeTab === 'list' ? 'block' : 'hidden md:flex'}`}>
            <div className="bg-white border border-slate-200 rounded-2xl flex flex-col h-[520px] md:h-[580px] overflow-hidden shadow-sm">
              
              {/* Header section */}
              <div className="p-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-800 text-base flex items-center gap-2.5">
                    <Building className="w-5 h-5 text-brand" />
                    <span>Directorio Expositores</span>
                  </h3>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mt-0.5">
                    Filtrando {filteredExpositores.length} marcas oficiales
                  </span>
                </div>
                
                {(searchQuery || selectedPabellon !== 'Todos') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedPabellon('Todos');
                    }}
                    className="text-[10px] font-bold text-brand hover:text-[#df721d] transition uppercase tracking-[0.1em] cursor-pointer"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Scroll list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredExpositores.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-400">
                    <HelpCircle className="w-12 h-12 text-slate-305 mb-3" />
                    <h4 className="font-bold text-sm text-slate-500 font-sans">Sin coincidencias</h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed">
                      Revisá el término ingresado o seleccioná la opción "Todos los Sectores".
                    </p>
                  </div>
                ) : (
                  filteredExpositores.map((expo) => {
                    const isSelected = selectedExpositor?.id === expo.id;
                    const zone = getZoneByExpositor(expo);
                    return (
                      <motion.div
                        layout="position"
                        key={expo.id}
                        onClick={() => handleSelectExpositor(expo)}
                        className={`p-4 rounded-xl border transition-all text-left cursor-pointer relative group overflow-hidden ${
                          isSelected 
                            ? 'bg-brand-light/40 border-brand/40 shadow-sm' 
                            : 'bg-white border-slate-205 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                        whileHover={{ scale: isSelected ? 1 : 1.006 }}
                        transition={{ duration: 0.15 }}
                      >
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
                        )}

                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-slate-800 group-hover:text-brand transition truncate pr-1 font-sans">
                              {expo.empresa}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                              <span className="text-[9px] uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-100 font-mono">
                                {expo.pabellon.replace('Salón Principal (Interior)', 'Hall Principal')}
                              </span>
                              {expo.area && (
                                <span className="text-[9px] uppercase tracking-wide px-2 py-0.5 rounded bg-brand-light text-brand border border-brand/20 font-mono">
                                  {expo.area}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Stand designator right side */}
                          <div className="flex flex-col items-end shrink-0 select-none">
                            <span className="text-[9px] text-slate-400 font-mono font-bold tracking-widest uppercase">
                              STAND
                            </span>
                            <span className="text-xs font-bold text-brand font-mono bg-brand-light px-2.5 py-0.5 rounded border border-brand/20 mt-0.5">
                              {expo.standText.replace('Stand ', '').replace('Stands ', '') || 'A-00'}
                            </span>
                          </div>
                        </div>

                        {isSelected && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="mt-4 pt-3.5 border-t border-slate-100 text-xs text-slate-500 flex flex-col gap-2.5"
                          >
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-400">Ubicación asignada:</span>
                              <span className="font-bold text-slate-700">
                                {zone ? zone.name : "Sectores Auxiliares"}
                              </span>
                            </div>
                            <button
                              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-brand hover:bg-[#df721d] text-white font-bold rounded-lg transition duration-200 cursor-pointer"
                            >
                              <MapPin className="w-3.5 h-3.5" />
                              <span>Focalizar en Plano</span>
                            </button>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>
          </section>

          {/* Exhibition Map */}
          <section className={`md:col-span-7 flex flex-col gap-4 order-1 md:order-2 ${activeTab === 'map' ? 'block' : 'hidden md:flex'}`}>
            <div className="bg-white border border-slate-200 rounded-2xl flex flex-col w-full overflow-hidden relative shadow-sm">
              
              {/* Sector Legend Header */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold text-slate-600 justify-center sm:justify-start items-center border-b border-slate-100 p-4 sm:px-5 sm:py-3.5 z-10 shrink-0 select-none bg-slate-50/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-red-400 border border-slate-200 shrink-0 inline-block" />
                  <span>Hall Principal (Interior)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-pink-400 border border-slate-200 shrink-0 inline-block" />
                  <span>Pabellón Argentina</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-blue-400 border border-slate-200 shrink-0 inline-block" />
                  <span>Pabellón CECOEL</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-orange-400 border border-slate-200 shrink-0 inline-block" />
                  <span>Área Exterior</span>
                </span>
              </div>

              {/* Selected Expositor Bottom Status Ticket (Rendered directly ABOVE the map grid so it's perfectly screenshotable at the very top!) */}
              <AnimatePresence>
                {selectedExpositor && (
                  <div className="px-4 sm:px-5 pt-3.5 select-none">
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                      animate={{ height: "auto", opacity: 1, marginBottom: 12 }}
                      exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                      className="bg-brand-light border border-brand/20 rounded-xl p-3 shadow-sm select-none"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-left">
                          <span className="text-[9px] bg-brand text-white font-mono font-extrabold uppercase px-2 py-0.5 rounded">
                            Sector: {selectedExpositor.pabellon.replace('Salón Principal (Interior)', 'Hall Principal')}
                          </span>
                          <h4 className="font-extrabold text-sm text-slate-900 mt-2 pr-1 font-sans">
                            {selectedExpositor.empresa}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Ubicado en el <span className="text-brand font-mono font-extrabold">{selectedExpositor.standText}</span>
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => handleSelectExpositor(selectedExpositor)}
                            className="bg-white hover:bg-brand/5 active:bg-brand/10 text-brand text-[10px] font-bold px-2 py-1 rounded-lg border border-brand/20 transition cursor-pointer"
                          >
                            Recentrar
                          </button>
                          <button
                            onClick={() => setSelectedExpositor(null)}
                            className="bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-600 p-1 rounded-lg border border-slate-200 transition cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Neighboring stands shown right here inside the clean info box */}
                      {neighbors.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-brand/10 text-left">
                          <div className="text-[9px] text-slate-405 uppercase font-mono tracking-wider mb-1.5 flex items-center gap-1">
                            <Eye className="w-3 h-3 text-brand" />
                            <span>Marcas adyacentes en el mismo bloque:</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {neighbors.map(n => (
                              <button
                                key={n.id}
                                onClick={() => handleSelectExpositor(n)}
                                className="text-[9px] bg-white hover:bg-slate-50 border border-slate-150 text-slate-600 px-2.5 py-0.5 rounded transition max-w-[130px] truncate cursor-pointer font-medium"
                                title={n.empresa}
                              >
                                {n.empresa}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Floating notification bar placeholder */}
              {false && selectedExpositor && activeZone && (
                <div className="absolute top-18 left-6 right-6 z-10 mx-auto max-w-sm">
                  <motion.div 
                     initial={{ y: -8, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     className="bg-white/95 backdrop-blur-md border border-brand/30 rounded-xl p-3.5 shadow-lg flex items-center justify-between gap-3 text-left"
                  >
                    <div>
                      <span className="text-[8px] font-bold text-brand uppercase tracking-widest font-mono block">
                        Foco en plano comercial
                      </span>
                      <h4 className="font-bold text-slate-800 text-xs mt-0.5 line-clamp-1">
                        {selectedExpositor.empresa}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] text-slate-400">Stand:</span>
                        <span className="text-[10px] text-brand font-mono font-bold">
                          {selectedExpositor.standText}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSelectExpositor(selectedExpositor)}
                      className="bg-brand-light hover:bg-brand/10 text-brand text-[10px] font-bold px-2.5 py-1.5 rounded border border-brand/20 transition shrink-0 uppercase tracking-wide cursor-pointer"
                    >
                      Recentrar
                    </button>
                  </motion.div>
                </div>
              )}

              {/* Interactive Plan Viewer */}
              <div 
                ref={mapContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUpOrLeave}
                onWheel={handleWheel}
                className="w-full aspect-[1.413] relative bg-slate-100 rounded-b-2xl border-t border-slate-200/80 overflow-hidden cursor-grab active:cursor-grabbing select-none"
              >
                
                {/* Map Scaler Grid */}
                <div 
                  className="absolute inset-0 w-full h-full origin-center select-none"
                  style={{
                    transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.1, 0.8, 0.25, 1)',
                  }}
                >
                  <img
                    ref={mapImageRef}
                    src={imgSrc}
                    onError={handleImageError}
                    alt="Plano Constructecnia 2026"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-fill pointer-events-none select-none max-w-none filter brightness-95 sharp-map-image"
                    style={{ minWidth: '100%', minHeight: '100%' }}
                  />

                  {/* SVG Overlay representing interactive glowing red indicators */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Selected Active Stand Anchor Indicator (RED as requested) */}
                    {activeZone && (
                      <g className="glowing-target-zone">
                        <rect
                          x={activeZone.x}
                          y={activeZone.y}
                          width={activeZone.w}
                          height={activeZone.h}
                          fill="transparent"
                          stroke="#ef4444"
                          strokeWidth="0.8"
                          rx="0.5"
                          className="animate-pulse"
                          strokeDasharray="1, 0.5"
                          style={{ filter: `drop-shadow(0px 0px 8px #ef4444)` }}
                        />
                        <circle
                          cx={activeZone.x + activeZone.w / 2}
                          cy={activeZone.y + activeZone.h / 2}
                          r="1.8"
                          fill="#ef4444"
                          fillOpacity="0.4"
                          className="animate-pulse-slow"
                        />
                        <circle
                          cx={activeZone.x + activeZone.w / 2}
                          cy={activeZone.y + activeZone.h / 2}
                          r="0.8"
                          fill="#ef4444"
                          stroke="#FFFFFF"
                          strokeWidth="0.3"
                        />
                      </g>
                    )}

                    {/* RED MATCHED INDICATORS ON SEARCH MATCH */}
                    {matchedZones
                      .filter(mz => mz.standsRange !== activeZone?.standsRange)
                      .map((zone, idx) => {
                        const centerX = zone.x + zone.w / 2;
                        const centerY = zone.y + zone.h / 2;
                        return (
                          <g key={`match-${idx}`}>
                            <circle
                              cx={centerX}
                              cy={centerY}
                              r="1.8"
                              fill="#ef4444"
                              fillOpacity="0.3"
                              className="animate-pulse"
                            />
                            <rect
                              x={zone.x}
                              y={zone.y}
                              width={zone.w}
                              height={zone.h}
                              fill="transparent"
                              stroke="#ef4444"
                              strokeWidth="0.5"
                              rx="0.3"
                              strokeDasharray="1, 0.5"
                            />
                            <circle
                              cx={centerX}
                              cy={centerY}
                              r="0.6"
                              fill="#ef4444"
                              stroke="#FFFFFF"
                              strokeWidth="0.2"
                            />
                          </g>
                        );
                      })
                    }

                    {/* Semi-transparent zone bounds markers shown on hover mapping blocks */}
                    {STAND_ZONES.map((zone, i) => {
                      const isHighlighted = activeZone?.standsRange === zone.standsRange;
                      return (
                        <rect
                          key={i}
                          x={zone.x}
                          y={zone.y}
                          width={zone.w}
                          height={zone.h}
                          fill={isHighlighted ? "#ef4444" : "transparent"}
                          fillOpacity={isHighlighted ? 0.1 : 0}
                          stroke={isHighlighted ? "#ef4444" : "transparent"}
                          strokeWidth="0.1"
                          rx="0.3"
                          style={{ transition: 'all 0.2s' }}
                        />
                      );
                    })}
                  </svg>
                </div>

                {/* Floating Actions Panel inside the Map Canvas */}
                <div className="absolute bottom-4 right-4 z-20 flex flex-col p-1 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-md">
                  <button
                    onClick={handleZoomIn}
                    title="Acercar plano"
                    className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-brand hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-5 h-5 shrink-0" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    title="Alejar plano"
                    className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-brand hover:bg-slate-100 rounded-lg transition-colors border-t border-b border-slate-100 my-0.5 cursor-pointer"
                  >
                    <ZoomOut className="w-5 h-5 shrink-0" />
                  </button>
                  <button
                    onClick={handleResetMap}
                    title="Reiniciar vista"
                    className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-brand hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>

      </main>
    </div>
  );
}
