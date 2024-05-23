// @ts-check
const { test, expect } = require('@playwright/test');

test('Me da mi edad válida', async ({ page }) => {
  //Con estos datos nos dirigimos a la página que queramos testear.
  await page.goto('https://age-calculator-app-cyan.vercel.app/');

  //Guardamos los inputs que vamos a utilizar.
  const dayInput = await page.locator('#day');
  const monthInput = await page.locator('#month');
  const yearInput = await page.locator('#year');

  //Rellenamos todos los inputs.
  await dayInput?.fill("05");
  await monthInput?.fill("01");
  await yearInput?.fill("2002");
  
  //Guardamos boton y hacemos click.
  const button = page.locator(".calculateButton");
  await button.click();

  //Localizamos el texto donde va a tener la edad.
  const years = await page.locator("div:nth-child(3) div:nth-child(1) span:nth-child(1)");

  //Chequeamos que la edad sea 22
  await expect(years).toHaveText("22");
});

test('Chequea que no podamos agregar un mes mas grande que 12', async ({ page }) => {
   //Con estos datos nos dirigimos a la página que queramos testear.
   await page.goto('https://age-calculator-app-cyan.vercel.app/');
   //Guardamos los inputs que vamos a utilizar.
  const dayInput = await page.locator('#day');
  const monthInput = await page.locator('#month');
  const yearInput = await page.locator('#year');

  //Rellenamos todos los inputs.
  await dayInput?.fill("05");
  await monthInput?.fill("15");
  await yearInput?.fill("2002");
  
   //Guardamos boton y hacemos click.
   const button = page.locator(".calculateButton");
   await button.click();

    //Localizamos el texto donde va a tener la edad.
  const years = await page.locator(".advise.adviseDate");

//Chequeamos que la edad sea 22
await expect(years).toHaveText("Must be a valid month."); 

});

