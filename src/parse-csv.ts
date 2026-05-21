import fs from 'fs';
import path from 'path';

interface Expositor {
  id: number;
  empresa: string;
  area: string;
  standText: string;
  stands: number[];
  pabellon: string;
}

function parseCSV() {
  const csvPath = 'sheet_content.csv';
  if (!fs.existsSync(csvPath)) {
    console.error('CSV file not found!');
    return;
  }

  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n');
  const expositores: Expositor[] = [];

  // Line 1 is title: EXPOSITORES CONSTRUCTENIA 2026 - UBICACIÓN STAND,,
  // Line 2 is header: EMPRESA,AREA EXTERIOR ,STAND N° 
  // Let's loop from index 2 onwards (line 3)
  let idCounter = 1;
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Split CSV correctly, handling commas inside quotes
    const parts: string[] = [];
    let insideQuote = false;
    let currentPart = '';

    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      if (char === '"') {
        insideQuote = !insideQuote;
      } else if (char === ',' && !insideQuote) {
        parts.push(currentPart.trim());
        currentPart = '';
      } else {
        currentPart += char;
      }
    }
    parts.push(currentPart.trim());

    if (parts.length < 1) continue;

    const empresa = parts[0];
    if (!empresa || empresa.toUpperCase().startsWith('EMPRESA') || empresa.toUpperCase().includes('CONSTRUCTENIA 2026')) {
       continue;
    }

    const area = parts[1] || '';
    const standText = parts[2] || '';

    // Let's parse stand numbers from standText or area
    // Stands formats can be:
    // "Stand (01-02-03)"
    // "Stand (04) de 3x3"
    // "Stand 12 - 13"
    // "Stands (29-30-34-35)"
    // "Stands SALON INTERIOR (38-39)"
    // "PABELLON ARGENTINA"
    // "PABELLON CECOEL"
    // "STAND (Nº E-08)"
    // "STAND (Nº E-17 - E-22)"
    let stands: number[] = [];
    let pabellon = '';

    const lowerStandText = standText.toLowerCase();
    const lowerArea = area.toLowerCase();

    // Check for special pavilions
    if (lowerStandText.includes('argentina') || lowerArea.includes('argentina')) {
      pabellon = 'Pabellón Argentina';
    } else if (lowerStandText.includes('cecoel') || lowerArea.includes('cecoel') || lowerStandText.includes('pabillon cecoel')) {
      pabellon = 'Pabellón CECOEL';
    } else if (lowerArea.includes('exterior') || lowerStandText.includes('exterior')) {
      pabellon = 'Área Exterior / Maquinarias';
    } else if (empresa.includes('PABELLON') || empresa.includes('Pabellon')) {
      pabellon = 'Pabellón Especial';
    } else {
      pabellon = 'Salón Principal (Interior)';
    }

    // Attempt to extract digits inside parenthesis or lists
    // Examples: (01-02-03) -> [1,2,3]
    // 12 - 13 -> [12, 13]
    // (6-7) -> [6, 7]
    // (14-15 -15b) -> [14, 15]
    // (47-51) -> [47, 48, 49, 50, 51] (range handles)
    // E-08 -> E-08
    // E-17 - E-22 -> range of E stands
    
    // Simple regex or parse logic
    // Let's find numbers/ranges
    // Let's extract ranges like (\d+)-(\d+) or (\d+)-(\d+)-(\d+)
    // Let's try to parse any parentheses contents first
    const parenMatch = standText.match(/\(([^)]+)\)/);
    const searchString = parenMatch ? parenMatch[1] : standText || area;

    // Match numbers
    const numbersMatch = searchString.match(/\d+/g);
    if (numbersMatch) {
      if (searchString.includes('-') && numbersMatch.length === 2) {
        const start = parseInt(numbersMatch[0]);
        const end = parseInt(numbersMatch[1]);
        if (!isNaN(start) && !isNaN(end) && start < end && end - start < 15) {
          for (let s = start; s <= end; s++) {
            stands.push(s);
          }
        } else {
          stands = numbersMatch.map(n => parseInt(n));
        }
      } else {
        stands = numbersMatch.map(n => parseInt(n));
      }
    }

    expositores.push({
      id: idCounter++,
      empresa,
      area,
      standText,
      stands,
      pabellon
    });
  }

  // Generate ts output
  const outputDir = 'src/data';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const tsContent = `export interface Expositor {
  id: number;
  empresa: string;
  area: string;
  standText: string;
  stands: number[];
  pabellon: string;
}

export const EXPOSITORES: Expositor[] = ${JSON.stringify(expositores, null, 2)};
`;

  fs.writeFileSync(path.join(outputDir, 'expositores.ts'), tsContent);
  console.log(`Successfully generated src/data/expositores.ts with ${expositores.length} sponsors.`);
}

parseCSV();
