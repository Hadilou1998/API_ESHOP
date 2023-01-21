"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var gt = require('fs');
var fs = require('fs');
var link = {
    name: 'Link',
    hp: 60,
    mp: 30,
    str: 15
};
var bokoblin = {
    name: 'Bokoblin',
    hp: 25,
    mp: 20,
    str: 5
};
var ganon = {
    name: 'Ganon',
    hp: 350,
    mp: 100,
    str: 20
};
var content = fs.readFileSync('./enemies.json', 'utf-8');
var system = gt.readFileSync('./players.json', 'utf-8');
var players = JSON.parse(system);
var enemies = JSON.parse(content);
var fightNumber = 1;
var fight = true;
var heal = link.mp / 2;
function hyrule() {
    console.log("========== FIGHT 1 ==========");
    console.log("".concat(enemies.name));
    if (enemies.hp === enemies.mp) {
        console.log("HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ".concat(enemies.hp, " / ").concat(enemies.mp));
    }
    else if (enemies.hp === 0) {
        console.log("HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ".concat(enemies.hp, " / ").concat(enemies.mp));
    }
    else {
        console.log("HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ".concat(enemies.hp, " / ").concat(enemies.mp));
    }
    console.log("".concat(link.name));
    if (link.hp === link.mp) {
        console.log("HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII ".concat(link.hp, " / ").concat(link.hp));
    }
    else if (link.hp === 0) {
        console.log("HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII ".concat(link.hp, " / ").concat(link.hp));
    }
    else {
        console.log("HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII ".concat(link.hp, " / ").concat(link.hp));
    }
    console.log("---OPTION----------");
    console.log("1. Attack  2. Heal");
    console.log("You encounter a ".concat(enemies.name));
}
exports["default"] = hyrule;
function linkAttack(enemies) {
    enemies.hp -= link.str;
    console.log("You attacked and dealt ".concat(link.str, " damages!"));
}
function bokoblinAttack() {
    link.hp -= bokoblin.str;
    console.log("Bokoblin attacked and dealt ".concat(bokoblin.str, " damages!"));
}
function Heal() {
    if (link.hp === link.mp) {
        console.log("You can't heal anymore!");
    }
    else if (link.hp + heal > link.mp) {
        link.hp = link.mp;
        console.log("You healed!");
    }
    else {
        link.hp += heal;
        console.log("You healed!");
    }
}
function Gattack() {
    link.hp -= ganon.str;
    console.log("Ganon attacked and dealt ".concat(ganon.str, " damages!"));
}
function fightBokoblin() {
    var hadil = readline.question("What do you want to do?");
    if (hadil === "1") {
        linkAttack(bokoblin);
        bokoblinAttack();
        if (bokoblin.hp === 0) {
            bokoblin.hp = 30;
            fightNumber++;
            fight = true;
        }
    }
    else if (hadil === "2") {
        Heal();
    }
    else {
        console.log("You can't do that!");
    }
    if (link.hp === 0) {
        fight = false;
        console.log("You died!");
    }
}
function fightGanon() {
    var hadil = readline.question("What do you want to do?");
    if (hadil === "1") {
        linkAttack(ganon);
        Gattack();
        if (ganon.hp === 0) {
            fight = false;
            console.log("Ganon is defeated!");
        }
    }
    else if (hadil === "2") {
        Heal();
    }
    else {
        console.log("Choisissez entre 1 et 2!");
    }
    if (link.hp === 0) {
        fight = false;
        console.log("You died!");
    }
}
function play() {
    while (fight) {
        if (fightNumber < 10) {
            fightBokoblin();
        }
        else {
            fightGanon();
        }
    }
}
play();
