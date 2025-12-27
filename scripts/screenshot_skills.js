const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const urls = [
    { url: 'http://localhost:3000', name: 'next-portfolio' },
    { url: 'http://localhost:3001', name: 'harsh-portfolio-app' }
  ];

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const u of urls) {
    try {
      console.log('Visiting', u.url);
      const res = await page.goto(u.url, { timeout: 10000 });
      if (!res || !res.ok()) {
        console.warn(`Unable to load ${u.url} (status ${res && res.status()})`);
        continue;
      }
      await page.waitForSelector('#skills', { timeout: 8000 });
      const el = await page.$('#skills');
      if (!el) {
        console.warn(`#skills not found on ${u.url}`);
        continue;
      }
      const outPath = `./public/screenshots/skills-${u.name}.png`;
      await fs.promises.mkdir('./public/screenshots', { recursive: true });
      await el.screenshot({ path: outPath });
      console.log('Saved screenshot to', outPath);
    } catch (err) {
      console.warn('Error capturing', u.url, err.message);
    }
  }

  await browser.close();
})();
