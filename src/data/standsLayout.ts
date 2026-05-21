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

// Supporting function to calculate pinpoint coordinates for individual stands
function getPreciseCoordsForStand(
  mainStand: number,
  standText: string,
  empresa: string,
  pabellon: string
): { x: number; y: number; w: number; h: number } | null {
  const text = standText.toUpperCase();
  const emp = empresa.toUpperCase();
  
  // 1. Check Exterior / Maquinarias / Specific Labels first
  if (text.includes("E-11") || emp.includes("MAGNO")) {
    return { x: 71.9, y: 24.3, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-13") || emp.includes("LUME")) {
    return { x: 71.9, y: 39.0, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-14") || emp.includes("CHACOMER")) {
    return { x: 71.9, y: 53.0, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-08") || emp.includes("IMPACTA")) {
    return { x: 79.2, y: 39.0, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-07")) {
    return { x: 79.2, y: 48.0, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-06") || emp.includes("TEHMCO")) {
    return { x: 79.2, y: 57.0, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-16")) {
    return { x: 71.9, y: 71.0, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-15")) {
    return { x: 71.9, y: 59.5, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-05")) {
    return { x: 79.2, y: 59.5, w: 2.8, h: 5.5 };
  }
  if (text.includes("E-04")) {
    return { x: 79.2, y: 71.0, w: 2.8, h: 5.5 };
  }
  if (emp.includes("MULTITAINER") || text.includes("MULTITAINER")) {
    return { x: 71.5, y: 59.5, w: 10.5, h: 17.0 };
  }
  if (text.includes("A-21") || emp.includes("JASY")) {
    return { x: 23.5, y: 9.5, w: 5.5, h: 5.5 };
  }

  // 2. Pabellon specific overrides
  if (pabellon.includes("Argentina")) {
    // Sits in block 44-51 on the left side of front row
    return { x: 24.5, y: 32.5, w: 5.0, h: 6.5 };
  }
  if (pabellon.includes("CECOEL")) {
    return { x: 41.1, y: 68.8, w: 10.0, h: 6.0 };
  }

  // 3. Main numeric stands precision locator
  if (!mainStand) return null;

  // Row 1-13 (Right vertical block)
  if (mainStand >= 1 && mainStand <= 3) {
    return { x: 54.4, y: 62.5, w: 4.8, h: 3.5 };
  }
  if (mainStand === 4) {
    return { x: 59.2, y: 62.5, w: 1.8, h: 3.5 };
  }
  if (mainStand === 5) {
    return { x: 54.4, y: 59.5, w: 1.8, h: 3.0 };
  }
  if (mainStand >= 6 && mainStand <= 7) {
    return { x: 54.4, y: 55.0, w: 6.2, h: 4.0 };
  }
  if (mainStand >= 8 && mainStand <= 11) {
    return { x: 54.4, y: 47.8, w: 6.2, h: 6.5 };
  }
  if (mainStand >= 12 && mainStand <= 13) {
    return { x: 54.4, y: 43.1, w: 6.2, h: 4.5 };
  }

  // Horizontal top block: Stands 14 to 27 (from right 14 to left 27)
  if (mainStand >= 14 && mainStand <= 27) {
    const minX = 32.2;
    const maxX = 60.6;
    // ratio: 0 at 14, 1 at 27
    const ratio = (27 - mainStand) / (27 - 14);
    const targetX = minX + ratio * (maxX - minX);
    return { x: targetX - 1.0, y: 31.0, w: 2.0, h: 4.0 };
  }

  // Stands A-01 to A-06 (below top row, right half)
  if (
    text.includes("A-01") ||
    text.includes("A-02") ||
    text.includes("A-03") ||
    text.includes("A-04") ||
    text.includes("A-05") ||
    text.includes("A-06")
  ) {
    let num = 1;
    if (text.includes("A-02")) num = 2;
    if (text.includes("A-03")) num = 3;
    if (text.includes("A-04")) num = 4;
    if (text.includes("A-05")) num = 5;
    if (text.includes("A-06")) num = 6;
    const minX = 42.8;
    const maxX = 60.6;
    const ratio = (num - 1) / 5;
    const targetX = maxX - ratio * (maxX - minX) - 1.5;
    return { x: targetX, y: 35.8, w: 3.0, h: 5.5 };
  }

  // Stands 28 to 37 (below top-left row)
  if (mainStand >= 28 && mainStand <= 37) {
    if (mainStand === 31 || mainStand === 32 || mainStand === 36 || mainStand === 37) {
      return { x: 32.2, y: 35.8, w: 3.4, h: 5.5 };
    }
    if (mainStand === 29 || mainStand === 30 || mainStand === 34 || mainStand === 35) {
      return { x: 35.8, y: 35.8, w: 3.4, h: 5.5 };
    }
    if (mainStand === 28 || mainStand === 33) {
      return { x: 39.4, y: 35.8, w: 3.0, h: 5.5 };
    }
  }

  // Stands 38 to 43 (Vertical block to the right of Cavialpa)
  if (mainStand >= 38 && mainStand <= 43) {
    return { x: 27.2, y: 29.0, w: 4.8, h: 12.0 };
  }

  // Stands 44 to 51 (Cavialpa / Inpa / Argentina block)
  if (mainStand >= 44 && mainStand <= 51) {
    return { x: 22.4, y: 29.0, w: 4.5, h: 12.0 };
  }

  // Left top block: Stands 52 to 66 (near ACCESO 2)
  if (mainStand >= 52 && mainStand <= 59) {
    const ratio = (mainStand - 52) / 7;
    const targetX = 9.4 + ratio * (22.0 - 9.4 - 1.8);
    return { x: targetX, y: 30.0, w: 1.8, h: 4.5 };
  }
  if (mainStand >= 60 && mainStand <= 66) {
    const ratio = (mainStand - 60) / 6;
    const targetX = 9.4 + ratio * (22.0 - 9.4 - 1.8);
    return { x: targetX, y: 35.0, w: 1.8, h: 4.5 };
  }

  // Middle left-most: Stands 180 to 182 (ZR / Casa de las Piscinas)
  if (mainStand >= 180 && mainStand <= 182) {
    return { x: 10.8, y: 49.0, w: 4.0, h: 8.0 };
  }

  // Greenway row: Stands 183 to 195 (Runs horizontally from 12.5 to 43.5, y ~ 43.5)
  if (mainStand >= 183 && mainStand <= 195) {
    const minX = 12.5;
    const maxX = 43.5;
    const ratio = (mainStand - 183) / (195 - 183);
    const targetX = minX + ratio * (maxX - minX - 2.2);
    return { x: targetX, y: 43.5, w: 2.2, h: 5.5 };
  }

  // Middle center: Stands 67 to 76 (Hormetal / Consolidada block)
  if (mainStand >= 67 && mainStand <= 76) {
    if (mainStand === 67 || mainStand === 68 || mainStand === 69 || mainStand === 70) {
      const ratio = (mainStand - 67) / 3;
      const targetX = 15.0 + ratio * (26.2 - 15.0 - 2.4);
      return { x: targetX, y: 53.0, w: 2.4, h: 3.2 };
    } else {
      const ratio = (mainStand - 71) / 5;
      const targetX = 15.0 + ratio * (26.2 - 15.0 - 1.8);
      return { x: targetX, y: 56.5, w: 1.8, h: 3.2 };
    }
  }

  // Kingspan: Stands 77 to 80
  if (mainStand >= 77 && mainStand <= 80) {
    return { x: 27.0, y: 53.0, w: 4.0, h: 6.5 };
  }

  // NGO / Modernia: Stands 81 to 90
  if (mainStand >= 81 && mainStand <= 90) {
    if (mainStand >= 81 && mainStand <= 85) {
      const ratio = (mainStand - 81) / 4;
      const targetX = 31.3 + ratio * (41.7 - 31.3 - 2.0);
      return { x: targetX, y: 52.2, w: 2.0, h: 3.0 };
    } else {
      const ratio = (mainStand - 86) / 4;
      const targetX = 31.3 + ratio * (41.7 - 31.3 - 2.0);
      return { x: targetX, y: 55.4, w: 2.0, h: 3.0 };
    }
  }

  // Metalúrgica Vera: Stands 91 to 98
  if (mainStand >= 91 && mainStand <= 98) {
    if (mainStand >= 91 && mainStand <= 94) {
      const ratio = (mainStand - 91) / 3;
      const targetX = 42.1 + ratio * (50.8 - 42.1 - 2.0);
      return { x: targetX, y: 52.2, w: 2.0, h: 3.0 };
    } else {
      const ratio = (mainStand - 95) / 3;
      const targetX = 42.1 + ratio * (50.8 - 42.1 - 2.0);
      return { x: targetX, y: 55.4, w: 2.0, h: 3.0 };
    }
  }

  // Tecnomas: Stands 99 to 106
  if (mainStand >= 99 && mainStand <= 106) {
    if (mainStand >= 99 && mainStand <= 102) {
      const ratio = (mainStand - 99) / 3;
      const targetX = 42.1 + ratio * (50.8 - 42.1 - 2.0);
      return { x: targetX, y: 58.2, w: 2.0, h: 3.0 };
    } else {
      const ratio = (mainStand - 103) / 3;
      const targetX = 42.1 + ratio * (50.8 - 42.1 - 1.8);
      return { x: targetX, y: 61.4, w: 1.8, h: 3.0 };
    }
  }

  // Stands James: Stands 107 to 116
  if (mainStand >= 107 && mainStand <= 116) {
    if (mainStand >= 107 && mainStand <= 111) {
      const ratio = (mainStand - 107) / 4;
      const targetX = 31.3 + ratio * (41.7 - 31.3 - 2.0);
      return { x: targetX, y: 58.2, w: 2.0, h: 3.0 };
    } else {
      const ratio = (mainStand - 112) / 4;
      const targetX = 31.3 + ratio * (41.7 - 31.3 - 2.0);
      return { x: targetX, y: 61.4, w: 2.0, h: 3.0 };
    }
  }

  // Dyck block: Stands 117 to 127
  if (mainStand >= 117 && mainStand <= 127) {
    if (mainStand >= 117 && mainStand <= 122) {
      const ratio = (mainStand - 117) / 5;
      const targetX = 24.0 + ratio * (31.0 - 24.0 - 1.2);
      return { x: targetX, y: 58.2, w: 1.2, h: 6.0 };
    } else {
      const ratio = (mainStand - 123) / 4;
      const targetX = 16.2 + ratio * (23.6 - 16.2 - 1.5);
      return { x: targetX, y: 58.2, w: 1.5, h: 6.0 };
    }
  }

  // Lincoln / Isopanel: Stands 128 to 130
  if (mainStand >= 128 && mainStand <= 130) {
    return { x: 12.5, y: 58.2, w: 3.5, h: 6.0 };
  }

  // Left bottom corner: Stands 176 to 179
  if (mainStand >= 176 && mainStand <= 179) {
    return { x: 12.5, y: 65.0, w: 3.5, h: 9.3 };
  }

  // Schussmüller/Tingazu: Stands 131 to 134
  if (mainStand >= 131 && mainStand <= 134) {
    const ratio = (mainStand - 131) / 3;
    const targetX = 16.2 + ratio * (23.6 - 16.2 - 1.8);
    return { x: targetX, y: 65.0, w: 1.8, h: 6.8 };
  }

  // Comagro / Britam: Stands 135 to 144
  if (mainStand >= 135 && mainStand <= 144) {
    const ratio = (mainStand - 135) / 9;
    const targetX = 24.0 + ratio * (31.0 - 24.0 - 0.7);
    return { x: targetX, y: 65.0, w: 0.7, h: 6.8 };
  }

  // JLM: Stands 145 to 154
  if (mainStand >= 145 && mainStand <= 154) {
    const ratio = (mainStand - 145) / 9;
    const targetX = 31.3 + ratio * (40.7 - 31.3 - 0.9);
    return { x: targetX, y: 65.0, w: 0.9, h: 6.8 };
  }

  // Pabellón CECOEL: Stands 155 to 162
  if (mainStand >= 155 && mainStand <= 162) {
    const ratio = (mainStand - 155) / 7;
    const targetX = 41.1 + ratio * (50.8 - 41.1 - 1.2);
    return { x: targetX, y: 65.0, w: 1.2, h: 6.8 };
  }

  // Bottom-most block: Stands 163 to 175
  if (mainStand >= 163 && mainStand <= 175) {
    const ratio = (mainStand - 163) / 12;
    const targetX = 16.2 + ratio * (50.8 - 16.2 - 2.5);
    return { x: targetX, y: 72.4, w: 2.5, h: 4.8 };
  }

  return null;
}

// Helper to find the best matching zone for a specific set of stand numbers or pabellon labels
export function getZoneByExpositor(expositor: { stands: number[]; standText: string; area: string; empresa: string; pabellon: string }): StandZone | null {
  const standTextUpper = expositor.standText.toUpperCase();
  const areaUpper = expositor.area.toUpperCase();
  const empresaUpper = expositor.empresa.toUpperCase();

  // 1. Try to get highly precise pinpoint coordinates if the expositor has any numeric stand assigned
  const mainStand = (expositor.stands && expositor.stands.length > 0) ? expositor.stands[0] : 0;
  const pinPoint = getPreciseCoordsForStand(mainStand, expositor.standText, expositor.empresa, expositor.pabellon);

  if (pinPoint) {
    return {
      name: `Stand ${expositor.standText || mainStand}`,
      standsRange: expositor.standText || `${mainStand}`,
      x: pinPoint.x,
      y: pinPoint.y,
      w: pinPoint.w,
      h: pinPoint.h,
      color: "#EF4444"
    };
  }

  // 2. Fall back to standard block ranges if no precise pinpoint is matchable
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
    return STAND_ZONES.find(z => z.standsRange === "44-51") || null;
  }
  if (expositor.pabellon.includes("CECOEL")) {
    return STAND_ZONES.find(z => z.standsRange === "155-162") || null;
  }

  // Fallback list matchers
  if (mainStand) {
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
