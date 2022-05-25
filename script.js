const article = document.querySelector("article");

// Wrap letters in <span> for the overlappinng effect
// (string, bool) => string
// Takes the text, and parity as argument
// Parity represent whether to raise the even or odd characters
// i.e if parity == 0, then the even characters raise (counting from 0)
// returns the produced html string
function makeOverlappingLetters(text, parity) {
    let htmlString = "";
    for (let i = 0; i < text.length; i++) {
        htmlString += (i % 2 == parity)
                    ? `<span>${text[i]}</span>`
                    : text[i];
    }
    return htmlString;
}

// Splits the string for the tilt effect
function splitKeyword(text) {
    let left = mid = right = "";
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

const obj = splitKeyword("PoKabcéMoNxyz")
const p = document.createElement("p");
p.innerHTML = `<span class="antiClockwise">${obj.left}</span>`
            + `<span class="mid">${obj.mid}</span>`
            + `<span class="clockwise">${obj.right}</span>`;
article.appendChild(p);