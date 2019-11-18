function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let currentMonster = monster
document.getElementById("fight").addEventListener("click", getAttackDamage);
monster.hitPoints - getAttackDamage

function attackRound (getAttackDamage) {
    
}