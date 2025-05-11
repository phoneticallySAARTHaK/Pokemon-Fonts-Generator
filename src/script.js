const section = document.querySelector("section");
const textarea = document.querySelector('input[type="text"]');
const fontSpace = document.querySelector(".font-space");
const range = document.querySelector('#size');
const output = document.querySelector('output');
const btn = document.querySelector("button");

/* in ES 5 */
var htmlToImage = require('html-to-image');


// Slider outpuut
output.textContent = `${range.value}`
range.addEventListener('input', function() {
  output.textContent = `${range.value}`;
});

// Generate button
btn.addEventListener("click", generate);

function generate() {
    clearImg();
    clearP();
    let text = textarea.value;
    const size = output.value;

    fontSpace.style.fontSize = `${size}px`;
    fontSpace.style.setProperty("--stroke-width", `${size / 16 * 0.25}rem`)
    text = processText(text);

    const p = document.createElement("p");
    p.setAttribute("class", "fonts");
    p.innerHTML = text;
    fontSpace.appendChild(p);
    raiseAllMiddleLetters(p);

    htmlToImage.toPng(p)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        return img;
      })
      .then( (img) => {
          img.setAttribute("class", "rendered")
          fontSpace.removeChild(p)
          fontSpace.appendChild(img)
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
}


function clearP() {
    const p = document.querySelector(".fonts");
    if (p) {
        fontSpace.removeChild(p);
    }
}

function clearImg() {
    const img = document.querySelector(".rendered");
    if (img) {
        fontSpace.removeChild(img);
    }
}

function processText(text) {
    text = text.trim();
    const wordArray = text.split(" ");
    let strArray = [];
    let str = "";
    for (const word of wordArray) {
        if (word.length === 0) {
            continue;
        }
        if (word.slice(0, 2) === "**" && word.slice(-2) === "**") {
            str = makeTilted(word);
        }
        else {
            str = makeOverlappingLetters(word);
        }
        strArray.push(str);
    }
    return strArray.join(" ");
}

function makeTilted(word) {
    const obj = splitKeyword(word.slice(2, -2));
    return `<span class="antiClockwise">${makeOverlappingLetters(obj.left)}</span>`
                + `<span class="mid">${obj.mid}</span>`
                + `<span class="clockwise">${makeOverlappingLetters(obj.right)}</span>`;
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
        htmlString += (i % 2 == 0)
                    ? `<span>${text[i]}</span>`
                    : text[i];
    }
    return htmlString;
}

// Splits the string for the tilt effect
function splitKeyword(text) {
    let left, mid, right ;
    left = mid = right = "";
    if (text.length % 2 == 0) {
        left = text.substr(0, text.length / 2);
        right = text.substr(text.length / 2);
    }
    else {
        left = text.substr(0, text.length / 2);
        mid = text.substr(text.length / 2, 1);
        right = text.substr(text.length / 2 + 1);
    }
    return {left, mid, right}
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

    const elevation = Math.sin(angle) * (width * 0.9) ; // Find the elevation, using sine
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
