function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentMonster = monster;

document.getElementById("fight").addEventListener("click", attackRound);

function attackRound () {
    players.hitPoints = players.hitPoints - getAttackDamage(monster.attackMin, monster.attackMax)
    currentMonster.hitPoints = currentMonster.hitPoints - getAttackDamage(player.attackMin, player.attackMax)
}