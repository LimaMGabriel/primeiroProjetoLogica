const heroi = "Gabriel";
const heroiXp = 50000;
let heroiNivel = null;

if (heroiXp < 1000) {
    heroiNivel = "Ferro";
} else if (heroiXp <= 2000) {
    heroiNivel = "Bronze";
} else if (heroiXp <= 5000) {
    heroiNivel = "Prata";
} else if (heroiXp <= 7000) {
    heroiNivel = "Ouro";
} else if (heroiXp <= 8000) {
    heroiNivel = "Platina";
} else if (heroiXp <= 9000) {
    heroiNivel = "Ascendente";
} else if (heroiXp <= 10000) {
    heroiNivel = "Imortal";
} else {
    heroiNivel = "Radiante";
}
console.log(`O Herói de nome ${heroi} está no nível de ${heroiNivel}`);