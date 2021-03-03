"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var whatsapp_web_js_1 = require("whatsapp-web.js");
var path_1 = require("path");
var a = 1;
var pathChrome = a === 0
    ? path_1.resolve(__dirname, "node_modules", "puppeteer", ".local-chromium", "linux-856583", "chrome-linux", "chrome")
    : "C:\\Users\\heiwa\\Documents\\programming\\Self-Corie-POC\\node_modules\\puppeteer\\.local-chromium\\win64-818858\\chrome-win\\chrome.exe";
var web = new whatsapp_web_js_1.Client({
    puppeteer: {
        executablePath: pathChrome,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
});
web.on("qr", function (qr) {
    console.log(qr + "\n");
    console.log(web.pupBrowser);
});
web.initialize();
