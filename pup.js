import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path'

async function runBrowser() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  // Open a local file using file:// protocol
  await page.goto("https://pokemon-fonts-generator.netlify.app/");

  // Do operations with the page
  const content = await page.content();
  console.log("Local file loaded");

  await page.type("#text", "");

  // Find and click the button (replace 'button' with the actual selector)
  // If the button has an id, use: await page.click('#buttonId');
  // If it's a submit button, use: await page.click('input[type="submit"]');
  await page.click("button[type='submit']"); // Update this selector

  // Wait for the .font-space element to appear after clicking
  await page.waitForSelector(".font-space img");

  // Find the image within the .font-space element
  const imgElement = await page.$(".font-space img");

  if (!imgElement) {
    throw new Error("No image found inside .font-space element");
  }

  // Get the image source
  const imgSrc = await page.evaluate((img) => {
    return img.src;
  }, imgElement);


  // Download the image
  let imageBuffer;

  // Handle different types of sources
  if (imgSrc.startsWith("data:")) {
    // For data URLs
    const base64Data = imgSrc.split(",")[1];
    imageBuffer = Buffer.from(base64Data, "base64");
  } else {
    // For regular URLs or file:// URLs
    const response = await page.goto(imgSrc);
    imageBuffer = await response.buffer();
    await page.goBack(); // Go back to the original page
  }

  // Save the image
  const outputPath = path.resolve("./images/some-id-img.png");
  await fs.writeFile(outputPath, imageBuffer, function () {console.log(arguments)});

  console.log(`Image downloaded successfully to: ${outputPath}`);

  await browser.close();
}

runBrowser().catch((error) => {
  console.error("Error running browser:", error);
});
