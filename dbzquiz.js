var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

var dbz1 = new ClozeCard(
    "Trunks was the person that killed Freezer and Cooler", "Trunks");

var dbz2 = new ClozeCard(
    "The Great Saiyman's secret identity is Gohan", "Gohan");

var dbz3 = new ClozeCard(
    "During the Tenkaichi Budokai, Mr. Satan won against Android 17", "Mr. Satan");

var dbz4 = new ClozeCard(
    "During a full moon, Saiyans turn into a giant monkey", "full moon");

var dbz5 = new ClozeCard(
    "Cell turned into his perfect form by absorbing Androids 17 and 18", "Cell");

var questions = [dbz1, dbz2, dbz3, dbz4, dbz5];

var i = 0;
var corrects = 0;
var incorrects = 0;

function quiz() {
    inquirer.prompt([{
        name: 'answer',
        message: questions[i].partial
    }, ]).then(function(user) {
        if (user.answer.toLowerCase() === questions[i].cloze.toLowerCase()) {
            console.log("Correct! The answer was: " + questions[i].cloze);
            console.log("===========================================================");
            corrects++;
        } else {
            console.log("Wrong! The correct answer was: " + questions[i].cloze);
            console.log("===========================================================")
            incorrects++;
        }
        i++;
        if (i === questions.length) {
            console.log("Results: You got " + corrects + " right and " + incorrects + " wrong.");
        } else {
            quiz();
        }
    });
}
quiz();