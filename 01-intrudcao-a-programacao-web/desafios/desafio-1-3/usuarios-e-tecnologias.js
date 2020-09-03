// Crie um programa que armazena uma array de usuário (objetos),
// cada usuário tem um nome e suas tecnologias (novo array).

const usuarios = [
  {
    nome: 'Johnny',
    tecnologias: ['HTML', 'CSS'],
  },
  {
    nome: 'larissa',
    tecnologias: ['Javascript', 'CSS'],
  },
  {
    nome: 'Luana',
    tecnologias: ['Docker', 'Node.js'],
  },
  {
    nome: 'Maria',
    tecnologias: ['Docker', 'Node.js'],
  },
];

for (let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`);
}
  