// criar um programa de calcule a média
// das notas entre nos alunos
// mensagem do calculo da média

const nome1 = 'johnny';
const nota1 = 8.6;

const nome2 = 'Larissa';
const nota2 = 8.7;

const nome3 = 'Launa';
const nota3 = 4.3;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
  console.log(`A sua nota é ${media}, voce vai paassar.`);
} else {
  console.log('Você não conseguiu atingir a nota, terá que fazer recuperação.');
}
