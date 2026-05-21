export interface StandZone {
  name: string; // descriptive name of the block
  standsRange: string; // e.g., "1-13", "A-01 to A-06"
  x: number; // percentage from left
  y: number; // percentage from top
  w: number; // percentage width
  h: number; // percentage height
  color: string; // highlight overlay color index
}

export const STAND_ZONES: StandZone[] = [
  {
    name: "Bloque 1 al 13",
    standsRange: "1-13",
    x: 52,
    y: 30,
    w: 9,
    h: 5,
    color: "#EF4444" // red
  },
  {
    name: "Bloque A-01 al A-06 (Exterior Lateral)",
    standsRange: "A-01 to A-06",
    x: 52,
    y: 36,
    w: 9,
    h: 5,
    color: "#F59E0B" // amber
  },
  {
    name: "Bloque 14 al 26",
    standsRange: "14-26",
    x: 42,
    y: 30,
    w: 9,
    h: 5,
    color: "#10B981" // green
  },
  {
    name: "Bloque 27 al 37",
    standsRange: "27-37",
    x: 32,
    y: 30,
    w: 9,
    h: 5,
    color: "#3B82F6" // blue
  },
  {
    name: "Bloque 38 al 43",
    standsRange: "38-43",
    x: 27,
    y: 30,
    w: 5,
    h: 6,
    color: "#8B5CF6" // purple
  },
  {
    name: "Bloque 44 al 51 (Cerca Acceso 2 / Cavialpa / MUVH)",
    standsRange: "44-51",
    x: 22,
    y: 29,
    w: 5,
    h: 11,
    color: "#EC4899" // pink
  },
  {
    name: "Bloque 52 al 59",
    standsRange: "52-59",
    x: 12,
    y: 30,
    w: 9,
    h: 5,
    color: "#6366F1" // indigo
  },
  {
    name: "Bloque 60 al 66",
    standsRange: "60-66",
    x: 12,
    y: 35,
    w: 9,
    h: 5,
    color: "#14B8A6" // teal
  },
  {
    name: "Bloque 67 al 76 (Hormetal / Consolidada)",
    standsRange: "67-76",
    x: 12,
    y: 53,
    w: 14,
    h: 6,
    color: "#F59E0B" // amber
  },
  {
    name: "Bloque 77 al 80 (Kingspan)",
    standsRange: "77-80",
    x: 27,
    y: 52,
    w: 4,
    h: 6,
    color: "#EF4444" // red
  },
  {
    name: "Bloque 81 al 90 (NGO / Modernia)",
    standsRange: "81-90",
    x: 32,
    y: 52,
    w: 9,
    h: 6,
    color: "#10B981" // green
  },
  {
    name: "Bloque 91 al 98 (Metalúrgica Vera / Ferrex)",
    standsRange: "91-98",
    x: 42,
    y: 52,
    w: 9,
    h: 6,
    color: "#3B82F6" // blue
  },
  {
    name: "Bloque 99 al 106 (Tecnomas / Grossl / Menegotti)",
    standsRange: "99-106",
    x: 42,
    y: 58,
    w: 9,
    h: 6,
    color: "#8B5CF6" // purple
  },
  {
    name: "Bloque 107 al 116 (Stands James)",
    standsRange: "107-116",
    x: 32,
    y: 58,
    w: 9,
    h: 6,
    color: "#EC4899" // pink
  },
  {
    name: "Bloque 117 al 127 (Dyck / SIT / Celucom)",
    standsRange: "117-127",
    x: 16,
    y: 58,
    w: 15,
    h: 6,
    color: "#6366F1" // indigo
  },
  {
    name: "Bloque 128 al 130 (Lincoln / Isopanel)",
    standsRange: "128-130",
    x: 12,
    y: 58,
    w: 4,
    h: 6,
    color: "#14B8A6" // teal
  },
  {
    name: "Bloque 131 al 134 (Schussmüller / Tingazu)",
    standsRange: "131-134",
    x: 15,
    y: 65,
    w: 6,
    h: 6,
    color: "#F59E0B" // amber
  },
  {
    name: "Bloque 135 al 144 (Comagro / Lazzu / Britam)",
    standsRange: "135-144",
    x: 21,
    y: 65,
    w: 10,
    h: 6,
    color: "#EF4444" // red
  },
  {
    name: "Bloque 145 al 154 (JLM / Luminotecnia / Aquapool)",
    standsRange: "145-154",
    x: 31,
    y: 65,
    w: 10,
    h: 6,
    color: "#10B981" // green
  },
  {
    name: "Bloque 155 al 162 (Pabellón CECOEL)",
    standsRange: "155-162",
    x: 41,
    y: 65,
    w: 10,
    h: 6,
    color: "#3B82F6" // blue
  },
  {
    name: "Bloque 163 al 175 (Olam / Coop / UNIDA / Syopar / Tajy)",
    standsRange: "163-175",
    x: 15,
    y: 72,
    w: 15,
    h: 5,
    color: "#8B5CF6" // purple
  },
  {
    name: "Bloque 176 al 179 (Luna Clor / Micropy / Tu Casa)",
    standsRange: "176-179",
    x: 12,
    y: 70,
    w: 3,
    h: 8,
    color: "#EC4899" // pink
  },
  {
    name: "Bloque 180 al 182 (ZR / Casa de las Piscinas)",
    standsRange: "180-182",
    x: 12,
    y: 49,
    w: 3,
    h: 8,
    color: "#6366F1" // indigo
  },
  {
    name: "Bloque 183 al 195 (Unysof / GreenWay / Impacto / Polar / Alphaleds / GCI / Amanecer)",
    standsRange: "183-195",
    x: 12,
    y: 43,
    w: 29,
    h: 6,
    color: "#14B8A6" // teal
  },
  // AREA EXTERIOR
  {
    name: "Stand Exterior E-11 (Grúas Magno)",
    standsRange: "E-11",
    x: 71,
    y: 22,
    w: 4,
    h: 7,
    color: "#EF4444" // red
  },
  {
    name: "Stands Exteriores E-13 y E-14 (Chacomer / Lume)",
    standsRange: "E-13, E-14",
    x: 71,
    y: 50,
    w: 4,
    h: 8,
    color: "#F59E0B" // amber
  },
  {
    name: "Stands Exteriores E-06, E-07, E-08 (Tehmco / Impacta)",
    standsRange: "E-06, E-07, E-08",
    x: 78,
    y: 35,
    w: 6,
    h: 16,
    color: "#10B981" // green
  },
  {
    name: "Stands Exteriores E-15, E-17 - E-22 / Multitainer",
    standsRange: "MULTITAINER",
    x: 74,
    y: 59,
    w: 10,
    h: 13,
    color: "#3B82F6" // blue
  },
  {
    name: "Área Exterior - Stand A-21 (Distribuidora Jasy)",
    standsRange: "A-21",
    x: 23,
    y: 8,
    w: 6,
    h: 6,
    color: "#8B5CF6" // purple
  }
];

// Helper to find the best matching zone for a specific set of stand numbers or pabellon labels
export function getZoneByExpositor(expositor: { stands: number[]; standText: string; area: string; empresa: string; pabellon: string }): StandZone | null {
  const standTextUpper = expositor.standText.toUpperCase();
  const areaUpper = expositor.area.toUpperCase();
  const empresaUpper = expositor.empresa.toUpperCase();

  // Match Area Exterior specific zones
  if (standTextUpper.includes("E-11") || areaUpper.includes("E-11")) {
    return STAND_ZONES.find(z => z.standsRange === "E-11") || null;
  }
  if (standTextUpper.includes("E-13") || standTextUpper.includes("E-14") || areaUpper.includes("E-13") || areaUpper.includes("E-14")) {
    return STAND_ZONES.find(z => z.standsRange === "E-13, E-14") || null;
  }
  if (standTextUpper.includes("E-08") || standTextUpper.includes("E-07") || standTextUpper.includes("E-06") || areaUpper.includes("E-08") || areaUpper.includes("E-07") || areaUpper.includes("E-06")) {
    return STAND_ZONES.find(z => z.standsRange === "E-06, E-07, E-08") || null;
  }
  if (empresaUpper.includes("MULTITAINER") || standTextUpper.includes("E-17") || areaUpper.includes("E-17") || standTextUpper.includes("MULTITAINER")) {
    return STAND_ZONES.find(z => z.standsRange === "MULTITAINER") || null;
  }
  if (standTextUpper.includes("A-21") || areaUpper.includes("A-21")) {
    return STAND_ZONES.find(z => z.standsRange === "A-21") || null;
  }

  // Handle pavilions or list-bases
  if (expositor.pabellon.includes("Argentina")) {
    // Pabellon Argentina stands (44-48) is located in Bloque 44 al 51
    return STAND_ZONES.find(z => z.standsRange === "44-51") || null;
  }
  if (expositor.pabellon.includes("CECOEL")) {
    // Pabellon CECOEL is stands 155-162
    return STAND_ZONES.find(z => z.standsRange === "155-162") || null;
  }

  // If there are specific numeric stands, find which zone range they belong to
  if (expositor.stands && expositor.stands.length > 0) {
    const mainStand = expositor.stands[0];
    
    // Look up stand ranges
    if (mainStand >= 1 && mainStand <= 13) return STAND_ZONES.find(z => z.standsRange === "1-13") || null;
    if (standTextUpper.includes("A-01") || standTextUpper.includes("A-02") || standTextUpper.includes("A-03") || standTextUpper.includes("A-04") || standTextUpper.includes("A-05") || standTextUpper.includes("A-06")) {
      return STAND_ZONES.find(z => z.standsRange === "A-01 to A-06") || null;
    }
    if (mainStand >= 14 && mainStand <= 26) return STAND_ZONES.find(z => z.standsRange === "14-26") || null;
    if (mainStand >= 27 && mainStand <= 37) return STAND_ZONES.find(z => z.standsRange === "27-37") || null;
    if (mainStand >= 38 && mainStand <= 43) return STAND_ZONES.find(z => z.standsRange === "38-43") || null;
    if (mainStand >= 44 && mainStand <= 51) return STAND_ZONES.find(z => z.standsRange === "44-51") || null;
    if (mainStand >= 52 && mainStand <= 59) return STAND_ZONES.find(z => z.standsRange === "52-59") || null;
    if (mainStand >= 60 && mainStand <= 66) return STAND_ZONES.find(z => z.standsRange === "60-66") || null;
    if (mainStand >= 67 && mainStand <= 76) return STAND_ZONES.find(z => z.standsRange === "67-76") || null;
    if (mainStand >= 77 && mainStand <= 80) return STAND_ZONES.find(z => z.standsRange === "77-80") || null;
    if (mainStand >= 81 && mainStand <= 90) return STAND_ZONES.find(z => z.standsRange === "81-90") || null;
    if (mainStand >= 91 && mainStand <= 98) return STAND_ZONES.find(z => z.standsRange === "91-98") || null;
    if (mainStand >= 99 && mainStand <= 106) return STAND_ZONES.find(z => z.standsRange === "99-106") || null;
    if (mainStand >= 107 && mainStand <= 116) return STAND_ZONES.find(z => z.standsRange === "107-116") || null;
    if (mainStand >= 117 && mainStand <= 127) return STAND_ZONES.find(z => z.standsRange === "117-127") || null;
    if (mainStand >= 128 && mainStand <= 130) return STAND_ZONES.find(z => z.standsRange === "128-130") || null;
    if (mainStand >= 131 && mainStand <= 134) return STAND_ZONES.find(z => z.standsRange === "131-134") || null;
    if (mainStand >= 135 && mainStand <= 144) return STAND_ZONES.find(z => z.standsRange === "135-144") || null;
    if (mainStand >= 145 && mainStand <= 154) return STAND_ZONES.find(z => z.standsRange === "145-154") || null;
    if (mainStand >= 155 && mainStand <= 162) return STAND_ZONES.find(z => z.standsRange === "155-162") || null;
    if (mainStand >= 163 && mainStand <= 175) return STAND_ZONES.find(z => z.standsRange === "163-175") || null;
    if (mainStand >= 176 && mainStand <= 179) return STAND_ZONES.find(z => z.standsRange === "176-179") || null;
    if (mainStand >= 180 && mainStand <= 182) return STAND_ZONES.find(z => z.standsRange === "180-182") || null;
    if (mainStand >= 183 && mainStand <= 195) return STAND_ZONES.find(z => z.standsRange === "183-195") || null;
  }

  return null;
}
