function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentMonster = monster;

document.querySelector("#fight").addEventListener("click", attackRound);

function attackRound() {
    const playerDmg = getAttackDamage(player.attackMin, player.attackMax);
    updatePlayerTxt(playerDmg);
    currentMonster.hitPoints -= playerDmg;

    if (currentMonster.hitPoints <= 0) {
        if (currentMonster === monster) {
            document.querySelector('#results').innerText = 'You slayed the monster! But here comes the boss...';
            currentMonster = boss;
        } else {
            document.querySelector('#results').innerText = 'You beat all the monsters! You win!';
        }
    } else {
        const monsterDmg = getAttackDamage(currentMonster.attackMin, currentMonster.attackMax);
        updateMonsterTxt(monsterDmg);
        player.hitPoints -= monsterDmg;
        if (player.hitPoints <= 0) {
            document.querySelector('#results').innerText = 'You died! Game over...';
            // create a reset function and insert here
        } else {
            document.querySelector('#results').innerText = `You and the monster trade blows!`;
        }
    }
    // somehow update the health bars
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