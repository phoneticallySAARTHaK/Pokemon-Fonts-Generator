const article = document.querySelector("article");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const upperLine = "WHO'S THAT";
const lowerLine = "POKéMON"

const width = canvas.width = 1000;
const height = canvas.height = 1000;

const fillColor = "rgba(232,188,53,255)";
const strokeColor = "rgba(52,92,161,255)";

function drawStroked(text, x, y) {
    ctx.font = '80px pokemon_solid';
    ctx.fillStyle = fillColor;
    ctx.fillText(text, x, y);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 8;
    ctx.strokeText(text, x, y);
}


drawStroked(upperLine.toUpperCase(), 50, 150);

// Wrap letters in <span> for the overlappinng effect
// (string, bool) => string
// Takes the text, and parity as argument
// Parity represent whether to raise the even or odd characters
// i.e if parity == 0, then the even characters raise (counting from 0)
// returns the produced html string
function makeOverlappingLetters(text, parity) {
    let htmlString = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === parity) {
            htmlString += `<span>${text[i]}</span>`;
        }
        else {
            htmlString += text[i];
        }
    }
    return htmlString;
}