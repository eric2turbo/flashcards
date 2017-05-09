var BasicCard = require("./BasicCard.js");

function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        if (text.indexOf(cloze) > -1) {
            this.partial = text.replace(cloze, '***');
            this.cloze = cloze;
            this.fullText = text;
        } else {
            console.log("Oops, " + cloze + " does not appear in " + text);
        }
    } else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze = new ClozeCard("This doesn't work", "oops");

// var dbzCard = new BasicCard(
//     "Who was the one that killed Freezer and Coller?", "Trunks");