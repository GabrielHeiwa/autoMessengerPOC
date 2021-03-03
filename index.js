"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var whatsapp_web_js_1 = require("whatsapp-web.js");
var web = new whatsapp_web_js_1.Client({
    puppeteer: {
        product: "chrome",
    },
});
web.on("qr", function (qr) {
    console.log(qr + "\n");
});
web.initialize();
