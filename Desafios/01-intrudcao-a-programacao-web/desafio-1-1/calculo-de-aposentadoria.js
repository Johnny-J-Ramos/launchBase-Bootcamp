//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição
// do homem precisa ser de no mínimo 95 anos, enquanto a mulherprecisa ter no mínimo 85 anos na soma;

const nome = 'Johnny';
const idade = 26;
const sexo = 'M';
const contribuicao = 8;

const somacontrubuicao = idade + contribuicao;

if (sexo === 'M') {
  if (contribuicao >= 35 && somacontrubuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você não pode se aposentar!`);
  }
} else {
  if (contribuicao >= 30 && somacontrubuicao >= 85) {
    console.log(`${nome}, você pode se aposentar.`);
  } else {
    console.log(`${nome}, você não pode se aposentar`);
  }
}
