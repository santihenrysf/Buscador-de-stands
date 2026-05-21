import fs from 'fs';

async function main() {
  const url = 'https://docs.google.com/spreadsheets/d/1OwHG8nHgVybSSfiTMb5T3VK4twiEUBGK27NdIev_cZA/export?format=csv';
  console.log('Fetching', url);
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log('Fetched characters length:', text.length);
    console.log('First 200 characters:', text.substring(0, 200));
    fs.writeFileSync('sheet_content.csv', text);
    console.log('Saved sheet_content.csv');
  } catch (err) {
    console.error('Error fetching sheet:', err);
  }
}

main();
