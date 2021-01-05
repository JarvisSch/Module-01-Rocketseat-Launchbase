const Nome ='Jean';
const Altura = 1.76;
const Peso = 14;

const IMC = Peso / (Altura * Altura);

if (IMC >= 30) {
    console.log (`${Nome}, Você esta acima do peso.`);

} else { console.log (`${Nome}, Você não esta acima do peso.`);
}   