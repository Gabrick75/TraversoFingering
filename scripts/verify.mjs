import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://localhost:5173';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1024, height: 768 } });

  // Home page
  const homePage = await context.newPage();
  await homePage.goto(BASE, { waitUntil: 'networkidle' });
  await homePage.waitForTimeout(500);
  await homePage.screenshot({ path: '/tmp/verify-home.png', fullPage: true });
  console.log('✓ Home page screenshot saved to /tmp/verify-home.png');

  // Home page title
  const homeTitle = await homePage.title();
  console.log(`  Title: "${homeTitle}"`);

  // Check CTA buttons exist
  const ctas = await homePage.$$('.cta-button');
  console.log(`  CTA buttons: ${ctas.length}`);

  // Check abbreviations table is NOT on home page
  const abbOnHome = await homePage.$('.abbrev-table');
  console.log(`  Abbreviations table on home: ${abbOnHome ? 'YES (WRONG!)' : 'no (correct)'}`);

  // Baroque Flute chart page
  const chartPage = await context.newPage();
  await chartPage.goto(`${BASE}/baroque-flute`, { waitUntil: 'networkidle' });
  await chartPage.waitForTimeout(500);
  await chartPage.screenshot({ path: '/tmp/verify-chart.png', fullPage: true });
  console.log('✓ Chart page screenshot saved to /tmp/verify-chart.png');

  // Check chart title
  const chartTitle = await chartPage.title();
  console.log(`  Title: "${chartTitle}"`);

  // Check legend exists
  const legend = await chartPage.$('.chart-legend');
  console.log(`  Legend: ${legend ? 'yes' : 'no'}`);

  // Check octave nav exists
  const nav = await chartPage.$('#octave-nav');
  console.log(`  Octave nav: ${nav ? 'yes' : 'no'}`);

  // Check fingering chart exists
  const chart = await chartPage.$('#fingering-chart');
  console.log(`  Fingering chart: ${chart ? 'yes' : 'no'}`);

  // Check abbreviations table is at the bottom of chart page
  const abbOnChart = await chartPage.$('.abbrev-table');
  console.log(`  Abbreviations table on chart page: ${abbOnChart ? 'yes (correct)' : 'no'}`);

  // Count hole elements
  const holes = await chartPage.$$('.hole');
  console.log(`  Hole elements: ${holes.length}`);

  // Check dark toggle exists
  const toggle = await chartPage.$('#dark-toggle');
  console.log(`  Dark toggle: ${toggle ? 'yes' : 'no'}`);

  // Check back to top exists
  const btt = await chartPage.$('#back-to-top');
  console.log(`  Back to top: ${btt ? 'yes' : 'no'}`);

  // Check footer exists
  const footer = await chartPage.$('#footer');
  console.log(`  Footer: ${footer ? 'yes' : 'no'}`);

  await browser.close();
}

main().catch(console.error);
