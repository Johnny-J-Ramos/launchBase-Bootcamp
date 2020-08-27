// Sintaxe dos Objetos Relacionados do Javascript
/*
const aluno01 = {
  // Dentro do objetos, as variaveis são chamadas de propriedades e metódos quando estão dentro dos objetos.
  nome: 'Johnny',
  nota: 9.8,
  saudacao: function () {
    alert('oi! Eu sou' + this.nome[0] + '.');
  },
};

const aluno02 = {
  nome: 'Larissa',
  nota: 5.2,
};

const aluno03 = {
  nome: 'Luana',
  nota: 6.2,
};

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3; //Para acessar as propriedades da variavel, é necessario incluir o . 


console.log (aluno03) // O console é um OBJETO, e ele tem diversas Funcionalidades e Propriedades */

/*============================================================================================= */

// PARA EU RECEBER DENTRO DE UMA UNICA VARIAVEL, DIVERSOS OBJETOS COMO ALUNOS, EU COLOCO O SEGUINTE CÓDIGO

// O nome damos a isso é Array, ou vetores.
const alunos = [
  {
    nome: 'Johnny',
    nota: 9.8,
  },
  {
    nome: 'Larissa',
    nota: 5.8,
  },
  {
    nome: 'Tatiana',
    nota: 8.8,
  },
];

const nomedeAlunos = ['Johnny', 'jefferson', 'Lucimar'];

console.log(alunos);

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
