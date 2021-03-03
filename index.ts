import { Client } from "whatsapp-web.js";
import { resolve } from "path";
let a = 0;
let pathChrome = a === 0
    ? resolve(__dirname, "node_modules", "puppeteer", ".local-chromium", "linux-856583", "chrome-linux", "chrome")
    : "C:\\Users\\heiwa\\Documents\\programming\\Self-Corie-POC\\node_modules\\puppeteer\\.local-chromium\\win64-818858\\chrome-win\\chrome.exe"
const web = new Client({
    puppeteer: {
        executablePath: pathChrome,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
});



web.on("qr", qr => {
    console.log(`${qr}\n`);
    console.log(web.pupBrowser)
})


web.initialize();
