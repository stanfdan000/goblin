// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
import { renderGoblin } from './render.utils.js';
const destroyedEl = document.getElementById('destroyed');
const playerHP = document.getElementById('player-hitPoints');
const form1 = document.querySelector('form');
const goblinsEl = document.getElementById('goblins');

let defeatedGoblinsCount = 0;
let playerHitPoints = 10;
let goblins = [
    { id: 1, name: 'gorn', hp: 5 },
    { id: 2, name: 'kilAton', hp: 5 },
];

let currentId = 3;


form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form1);
    const goblinName = data.get('goblin-name');
    const newGoblin = {
        id: currentId,
        name:goblinName,
        hp: Math.ceil(Math.random() * 100),
    };
    goblins.push(newGoblin);
    displayGoblins();
});


function displayGoblins() {
    goblinsEl.textContent = '';
    for (let goblin of goblins) {
        const goblinsMl = renderGoblin(goblin);
        goblinsMl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinsEl.append(goblinsMl);
    }
}
displayGoblins();

function goblinClickHandler(goblin) {
    if (goblin.hp === 0) return;
    if (playerHitPoints === 0) return;
    const playerHit = Math.random();
    if (playerHit < 0.5) {
        goblin.hp--;
        displayGoblins();
        alert(`you hit ${goblin.name}`);
        if (goblin.hp === 0) {
            defeatedGoblinsCount++;
            destroyedEl.textContent = defeatedGoblinsCount;
        }
    } else {
        alert(`you missed`);
    }
    const goblinHit = Math.random();
    if (goblinHit < 0.5) {
        playerHitPoints--;
        playerHP.textContent = playerHitPoints;
        alert(`${goblin.name} hit you`);
        if (playerHitPoints === 0) {
            alert(`YOU ARE DEAD`);
          
        }
    } else {
        alert(`${goblin.name} missed you`);
    }
}







