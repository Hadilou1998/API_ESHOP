const readline = require('readline-sync');

const gt = require('fs');

const fs = require('fs');

interface Char { 
    name: string; 
    hp: number; 
    mp: number; 
    str: number;
}

const link: Char = {
    name: 'Link',
    hp: 60,
    mp: 30,
    str: 15
}

const bokoblin: Char = {
    name: 'Bokoblin',
    hp: 25,
    mp: 20,
    str: 5
}

const ganon: Char = {
    name: 'Ganon',
    hp: 350,
    mp: 100,
    str: 20
}

const content = fs.readFileSync('./enemies.json', 'utf-8');
const system = gt.readFileSync('./players.json', 'utf-8');

const players = JSON.parse(system);
const enemies = JSON.parse(content);

let fightNumber = 1;
let fight = true;
    
let heal = link.mp / 2;

export default function hyrule() {

    console.log("========== FIGHT 1 ==========");
    console.log(`${enemies.name}`);

    if (enemies.hp === enemies.mp) {
        console.log(`HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ${enemies.hp} / ${enemies.mp}`);               
    } 
    else if (enemies.hp === 0) {
        console.log(`HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ${enemies.hp} / ${enemies.mp}`);               
    }
    else {
        console.log(`HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIII ${enemies.hp} / ${enemies.mp}`);
    }

    console.log(`${link.name}`);
    if (link.hp === link.mp) {
        console.log(`HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII ${link.hp} / ${link.hp}`);
    }
    else if (link.hp === 0) {
        console.log(`HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII ${link.hp} / ${link.hp}`);
    }
    else {
        console.log(`HP: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII ${link.hp} / ${link.hp}`);
    }

    console.log("---OPTION----------");
    console.log("1. Attack  2. Heal");

    console.log(`You encounter a ${enemies.name}`);
        
}

function linkAttack(enemies: { hp: number; }) {
    enemies.hp -= link.str;
    console.log(`You attacked and dealt ${link.str} damages!`);
}

function bokoblinAttack() {
    link.hp -= bokoblin.str;
    console.log(`Bokoblin attacked and dealt ${bokoblin.str} damages!`);
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
    console.log(`Ganon attacked and dealt ${ganon.str} damages!`);
}

function fightBokoblin() {

    const hadil = readline.question("What do you want to do?");
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

    const hadil = readline.question("What do you want to do?");
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