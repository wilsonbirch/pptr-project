require('dotenv').config();
const puppeteer = require('puppeteer');
const expect = require('chai').expect

describe('alpha', ()=>{
    it('should launch the browser', async function(){

        // browser initialization for testing
        const browser = await puppeteer.launch({headless:false, slowMo:10, devtools:false});
        
        // Set page parameters
        const page = await browser.newPage()   
        await page.goto('https://github.com/session')
        // Timeout options/functions
        // await page.setDefaultTimeout(10000)
        // await page.setDefaultNavigationTimeout(20000);

        // XPath format
        // await page.waitForXPath('//h1')
        
        // waitForSelector can be used to validate a tag, id or class exists on the page
        // await page.waitForSelector('header')

        // page.type can be used to input text into a form input, page.click can be used to click buttons
        // await page.type('#login_field', process.env.GITHUB_USERNAME)
        // await page.type('#password', process.env.GITHUB_PASSWORD)
        // await page.click('.btn-primary', {clickCount:1})

        // Select options can also be validated using page.select
        // await page.select("#preferred-interface",'Javascript API')

        // Can get title/url of page using the following
        const title = await page.title();
        const url = await page.url();

        // Get text within an element
        // const f = await page.$("h1")
        // const text = await (await f.getProperty('textContent')).jsonValue()

        // Get the number of elements that appear on a page
        const pCount = await (await page.$$("p")).length

        // Use chai library to expect certain values
        expect(title).to.be.a('string', 'Sign in to GitHub')
        expect(url).to.include('github.com')
        expect(pCount).to.equal(1)

        // Keypress simulation
        // await page.goto('http://zero.webappsecurity.com/')
        // await page.waitForSelector('#searchTerm')
        // await page.type('#searchTerm', 'HelloWorld', {delay:1000})
        // await page.keyboard.press('Enter', {delay:1000});


        await browser.close();
    })  
})