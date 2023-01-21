const readline = require('readline-sync');

const fs = require('fs');

const gt = require('fs');

interface Personne {
    name: string;
    rarity: number;
    class: number;
    race: number;
}

const gibdo: Personne = {
    name: 'Gibdo',
    rarity: 2,
    class: 5,
    race: 15
}

const stalfos: Personne = {
    name: 'Stalfos',
    rarity: 4,
    class: 2,
    race: 15
}

const content: string = fs.readFileSync('./enemies.json', 'utf-8');
const jsonChar = JSON.parse(content);
const path: string = gt.readFileSync('./classes.json', 'utf-8');
const jsonPers = JSON.parse(path);

const hadil = readline.question('Choisissez entre 1 et 2!');

let fightNumber = 1;
let fight = true;
let heal = gibdo.rarity * 2;
let heal1 = stalfos.rarity / 2;

function Character(Personne: any) {
    
    function Gattack(enemies: { hp: number; }) {
        stalfos.rarity -= gibdo.rarity;
        console.log(`You attacked and dealt ${gibdo.rarity} damages!`);
        console.log("Crushing hit");
    }

    function stalfosAttack() {
        gibdo.rarity -= stalfos.rarity;
        console.log(`staflos attacked and dealt ${stalfos.rarity} damages!`);
        console.log("Glancing hit");
    }

    function fightstaflos() {

        const hadil = readline.question("What do you want to do?");
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

    function gibdoAttack(gibdo: Personne) {
        gibdo.rarity -= stalfos.rarity;
        console.log(`Gibdo attacked and dealt ${gibdo.rarity} damages!`);
    }

    function fightGibdo() {
        const hadil = readline.question("What do you want to do?");
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