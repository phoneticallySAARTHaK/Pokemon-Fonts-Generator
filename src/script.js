const textarea = document.querySelector('input[type="text"]');
const fontSpace = document.querySelector(".font-space");
const range = document.querySelector("#size");
const output = document.querySelector("output");
const btn = document.querySelector("button");

/* in ES 5 */
import * as htmlToImage from "html-to-image";

textarea.addEventListener("focus", (e) => {
  e.target.select();
});

// Slider output
output.textContent = `${range.value}`;
range.addEventListener("input", function () {
  output.textContent = `${range.value}`;
});

// Generate button
btn.addEventListener("click", generate);

function generate() {
  clear();
  const text = processText(textarea.value || "");
  const size = output.value;

  fontSpace.style.fontSize = `${size}px`;

  const p = document.createElement("p");
  p.setAttribute("class", "fonts");
  p.innerHTML = text;
  p.style.opacity = "0";
  fontSpace.appendChild(p);
  raiseAllMiddleLetters(p);

  htmlToImage
    .toPng(p, { style: { opacity: "1" } })
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      return img;
    })
    .then((img) => {
      img.setAttribute("class", "rendered");
      fontSpace.removeChild(p);
      fontSpace.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
}

function clear() {
  fontSpace.innerHTML = "";
}

function blobToDataURL(blob) {
  const f = new FileReader();

  return new Promise((r, j) => {
    f.onload = function (e) {
      r(e.target.result);
    };

    f.onerror = function (e) {
      j(e);
    };

    f.readAsDataURL(blob);
  });
}

function processText(text) {
  const wordArray = text.trim().split(" ");
  let strArray = [];
  let str = "";
  for (const word of wordArray) {
    if (word.length === 0) {
      continue;
    }
    if (word.slice(0, 2) === "**" && word.slice(-2) === "**") {
      str = makeTilted(word);
    } else {
      str = makeOverlappingLetters(word);
    }
    strArray.push(str);
  }
  return strArray.join(" ");
}

function makeTilted(word) {
  const obj = splitKeyword(word.slice(2, -2));
  return (
    `<span class="antiClockwise">${makeOverlappingLetters(obj.left)}</span>` +
    `<span class="mid">${obj.mid}</span>` +
    `<span class="clockwise">${makeOverlappingLetters(obj.right)}</span>`
  );
}

function raiseAllMiddleLetters(p) {
  const leftArray = document.querySelectorAll(".antiClockwise");
  for (const left of leftArray) {
    raiseMidLetter(left);
  }
}

// Wrap letters in <span> for the overlappinng effect
// (string, bool) => string
// Takes the text, and parity as argument
// Parity represent whether to raise the even or odd characters
// i.e if parity == 0, then the even characters raise (counting from 0)
// returns the produced html string
function makeOverlappingLetters(text) {
  let htmlString = "";
  for (let i = 0; i < text.length; i++) {
    htmlString += i % 2 == 0 ? `<span>${text[i]}</span>` : text[i];
  }
  return htmlString;
}

// Splits the string for the tilt effect
function splitKeyword(text) {
  let left, mid, right;
  left = mid = right = "";
  if (text.length % 2 == 0) {
    left = text.substr(0, text.length / 2);
    right = text.substr(text.length / 2);
  } else {
    left = text.substr(0, text.length / 2);
    mid = text.substr(text.length / 2, 1);
    right = text.substr(text.length / 2 + 1);
  }
  return { left, mid, right };
}

// Finds the elevaation for  middle letter
function raiseMidLetter(left) {
  // Get references to first and mid span
  const mid = left.nextSibling;
  // Get the length of left part, (i.e. hypotenuse of trianlge)
  // Strip the "px", and convert it to number.
  const widthStr = window.getComputedStyle(left).width;
  const width = Number(widthStr.slice(0, -2));
  // Get the value of custom angle property, defined on the root element.
  const rootElement = document.documentElement;
  const angleRaw = window
    .getComputedStyle(rootElement)
    .getPropertyValue("--rotate-clockwise");
  let angle = Number(angleRaw.slice(0, -3)); //Strip the "deg"
  angle = angle * (Math.PI / 180); // Convert to radians

  const elevation = Math.sin(angle) * (width * 0.9); // Find the elevation, using sine
  mid.style.bottom = `${elevation}px`;
  /*
left:  /|
      / |
     /  | :mid
    /   |
   /____| ^ elevation
   base line
*/
}

textarea.value = "**PoKéMoN**";
generate();

// Example usage
function needsFallback() {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform || "";

  const isAppleDevice = /MacIntel|iPhone|iPad|iPod/i.test(platform);
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

  return isAppleDevice || isSafari;
}

function handleFallbackSetup() {
  const note = document.getElementById("note");
  if (note.childElementCount !== 0) {
    return;
  }

  const p = document.createElement("p");
  p.innerHTML =
    "If you are using an Apple Device, the blue border may not show up on the image. <br> " +
    "You can click the 'Generate fallback' button below to get the server generated image. <br> " +
    "Note that it can take a couple of seconds to load. <br>" +
    "<strong> This is a limited, temporary fix. Size has no effect.</strong>";

  const button = document.createElement("button");
  button.innerHTML = "Generate fallback";
  button.addEventListener("click", generateFallback);
  note.appendChild(p);
  note.appendChild(button);
}

const cfDev = "http://127.0.0.1:5001/pokemon-fonts/us-central1/generate";
const cfProd = "https://generate-rkca5556oa-uc.a.run.app/";
window.addEventListener("DOMContentLoaded", () => {
  if (needsFallback()) {
    handleFallbackSetup();
  }
});
function generateFallback() {
  clear();
  const p = document.createElement("p");
  p.style.textAlign = "center";
  p.style.fontStyle = "italics";
  p.innerHTML = "Loading...";
  fontSpace.appendChild(p);

  const text = textarea.value.trim();

  fetch(`${import.meta.env.PROD ? cfProd : cfDev}?text=${encodeURI(text)}`)
    .then((r) => r.blob())
    .then(blobToDataURL)
    .then((dataUrl) => {
      var img = new Image();
      img.src = dataUrl;
      img.setAttribute("class", "rendered");
      fontSpace.appendChild(img);
      p.remove();
    })
    .catch(() => {
      p.style.fontWeight = "bold";
      p.style.color = "red";
      p.innerHTML = "Error. Couldn't generate image";
    });
}
