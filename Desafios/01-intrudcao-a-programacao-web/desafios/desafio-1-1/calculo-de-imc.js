const nome = 'Johnny';
const peso = 120;
const altura = 1.69;

const imc = peso / (altura * altura);

if (!(imc >= 30) || imc <= 29.9) {
  console.log(`${nome}, você não esta acima do peso.`);
} else {
  console.log(`${nome}, você está acisa no peso`);
}
