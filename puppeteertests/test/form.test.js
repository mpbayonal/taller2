const timeout =  1000000;
beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded" });
});



describe("Test title and header of the homepage", () => {
    test('Submit form with valid data', async () => {


        await page.click('div button')


        await page.type('input[formcontrolname="firstName"]', "P")
        await page.type('input[formcontrolname="lastName"]', "B")
        await page.type('input[formcontrolname="username"]', "P")
        await page.type('input[formcontrolname="password"]', "Paolab", {delay: 200})



        await page.click('div button')
        const label2 = await page.$('alert div')
        const html = await page.evaluate(label2 => label2.innerHTML, label2);
        console.log(html)
        expect(html).toBe('Registration successful');



    }, timeout);


});


