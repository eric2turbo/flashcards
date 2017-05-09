var BasicCard = require("./BasicCard.js");

function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        if (text.indexOf(cloze) > -1) {
            this.partial = text.replace(cloze, '***');
            this.cloze = cloze;
            this.fullText = text;
        } else {
            return brokenCloze;
        }
    } else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;

//Testing

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);

console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");