var readline = require('readline-sync');
var fs = require('fs');
var gt = require('fs');
var gibdo = {
    name: 'Gibdo',
    rarity: 2,
    "class": 5,
    race: 15
};
var stalfos = {
    name: 'Stalfos',
    rarity: 4,
    "class": 2,
    race: 15
};
var content = fs.readFileSync('./enemies.json', 'utf-8');
var jsonChar = JSON.parse(content);
var path = gt.readFileSync('./classes.json', 'utf-8');
var jsonPers = JSON.parse(path);
var hadil = readline.question('Choisissez entre 1 et 2!');
var fightNumber = 1;
var fight = true;
var heal = gibdo.rarity * 2;
var heal1 = stalfos.rarity / 2;
function Character(Personne) {
    function Gattack(enemies) {
        stalfos.rarity -= gibdo.rarity;
        console.log("You attacked and dealt ".concat(gibdo.rarity, " damages!"));
        console.log("Crushing hit");
    }
    function stalfosAttack() {
        gibdo.rarity -= stalfos.rarity;
        console.log("staflos attacked and dealt ".concat(stalfos.rarity, " damages!"));
        console.log("Glancing hit");
    }
    function fightstaflos() {
        var hadil = readline.question("What do you want to do?");
        if (hadil === "1") {
            gibdoAttack(stalfos);
            stalfosAttack();
            if (stalfos.rarity === 0) {
                stalfos.rarity = 30;
                fightNumber++;
                fight = true;
            }
        }
        else if (hadil === "2") {
            heal: any();
        }
        else {
            console.log("You can't do that!");
        }
        if (gibdo.rarity === 0) {
            fight = false;
            console.log("You died!");
        }
    }
    function gibdoAttack(gibdo) {
        gibdo.rarity -= stalfos.rarity;
        console.log("Gibdo attacked and dealt ".concat(gibdo.rarity, " damages!"));
    }
    function fightGibdo() {
        var hadil = readline.question("What do you want to do?");
        if (hadil === "1") {
            gibdoAttack(gibdo);
            Gattack();
            if (gibdo.rarity === 0) {
                fight = false;
                console.log("Gibdo is defeated!");
            }
        }
        else if (hadil === "2") {
            heal();
        }
        else {
            console.log("Choisissez entre 1 et 2!");
        }
        if (gibdo.rarity === 0) {
            fight = false;
            console.log("You died!");
        }
    }
    function play() {
        while (fight) {
            if (fightNumber < 10) {
                fightstaflos();
            }
            else {
                fightGibdo();
            }
        }
    }
}
Character(content);
