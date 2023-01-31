require('dotenv').config();
const puppeteer = require('puppeteer');

describe('alpha', ()=>{
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({headless:false, slowMo:10, devtools:false});
        const page = await browser.newPage()   
        await page.goto('https://github.com/session')
        await page.type('#login_field', process.env.GITHUB_USERNAME)
        await page.type('#password', process.env.GITHUB_PASSWORD)
        await browser.close();
    })  
})