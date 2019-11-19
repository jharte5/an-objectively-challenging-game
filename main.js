function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resultQ = document.querySelector('#results');
const monsterQ = document.querySelector('#monster');
const bossQ = document.querySelector('#boss');
const fightQ = document.querySelector("#fight");
const playerHealth = document.querySelector('#player-health');
const monsterHealth = document.querySelector('#monster-health')

let currentMonster = monster;

fightQ.addEventListener("click", attackRound);


function attackRound() {
    const playerDmg = getAttackDamage(player.attackMin, player.attackMax);
    updatePlayerTxt(playerDmg);
    currentMonster.hitPoints -= playerDmg;

    if (currentMonster.hitPoints <= 0) {
        if (currentMonster === monster) {
            resultQ.innerText = 'You slayed the monster! But here comes the boss...';
            currentMonster = boss;
            monsterQ.style.height = '1px';
            monsterQ.style.width = '1px';
            bossQ.style.height = '200px';
            bossQ.style.width = '200px';
        } else {
            resultQ.innerText = 'You beat all the monsters! You win!';
            startOver()
        }
    } else {
        const monsterDmg = getAttackDamage(currentMonster.attackMin, currentMonster.attackMax);
        updateMonsterTxt(monsterDmg);
        player.hitPoints -= monsterDmg;
        if (player.hitPoints <= 0) {
            resultQ.innerText = 'You died! Game over...';
            startOver()
        } else {
            resultQ.innerText = `You and the monster trade blows!`;
        }
    }
    updateHealthBar()
    
}


function updatePlayerTxt(dmg) {
    let playerDmgTxt = '';

    if (dmg < 1) {
        playerDmgTxt += `You barely scratched the monster with ${dmg}.`;
    } else if (dmg < 4) {
        playerDmgTxt += `You hit the monster for ${dmg}`;
    } else {
        playerDmgTxt += `You clobbered the monster with ${dmg}.`;
    }

    document.querySelector('#player-damage-taken').innerText = playerDmgTxt;
}

function updateMonsterTxt(dmg) {
    let monsterDmgTxt = '';

    if (dmg < 1) {
    monsterDmgTxt += `The monster barely scratched you with ${dmg}.`;
    } else if (dmg < 4) {
    monsterDmgTxt += `The monster hit you for ${dmg}`;
} else {
    monsterDmgTxt += `The monster clobbered you with ${dmg}.`;
}

    document.querySelector('#monster-damage-taken').innerText = monsterDmgTxt;
    }

function updateHealthBar () {
    playerHealth.innerText = `${player.hitPoints}`;
    playerHealth.style.width = `${player.hitPoints * 2}px`;

    monsterHealth.innerText = `${currentMonster.hitPoints}`;
    monsterHealth.style.width = `${currentMonster.hitPoints * 2}px`;

    // document.querySelector('player').style.rotate(Math.PI/2);
}

function startOver () {
    fightQ.innerText = 'Start Over';
    fightQ.onclick = fight;

    monsterQ.style.width = '200px';
    monsterQ.style.height = '200px';
    bossQ.style.width = '1px';
    bossQ.style.height = '1px';

    player.hitPoints = 100;
    monster.hitPoints = 30;
    boss.hitPoints = 50;
    currentMonster = monster;

    updateHealthBar();
}

function fight () {
    fightQ.innerText = 'Fight';
    fightQ.onclick = attackRound;
}