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
        if (i % 2 == parity) {
            htmlString += `<span>${text[i]}</span>`;
        }
        else {
            htmlString += text[i];
        }
    }
    return htmlString;
}

