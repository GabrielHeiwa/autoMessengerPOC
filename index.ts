import { Client } from "whatsapp-web.js";

const web = new Client({
    puppeteer: {
        product: "chrome",
    },

});

web.on("qr", qr => {
    console.log(`${qr}\n`);
})


web.initialize();
