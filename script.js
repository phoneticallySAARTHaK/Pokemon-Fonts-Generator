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


function writeFirstLine(text) {
    const length = text.length;
    let pContent = "";
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            pContent += `<span>${text[i]}</span>`;
        }
        else {
            pContent += text[i];
        }
    }
    const p = document.createElement("p");
    p.innerHTML = pContent;
    article.appendChild(p);
}

writeFirstLine("WHO'S THAT".toLowerCase());
writeFirstLine("PoKéMoN", 2);

