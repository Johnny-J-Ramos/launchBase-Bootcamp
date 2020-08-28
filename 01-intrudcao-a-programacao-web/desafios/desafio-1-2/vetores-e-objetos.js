const programador = {
  nome: [
    'Johnny',
    'Tatiana',
    'Larissa',
    'Adriano',
    'Carlos',
    'André',
    'Felipe',
  ],
  idade: 26,
  tecnologias: [
    { nome: 'javascript', especialidade: 'Web/Mobile' },
    { nome: 'HTML/CSS', especialidade: 'Web' },
  ],
};

console.log(
  `O usuário ${programador.nome[2]} tem ${programador.idade} anos e usa a técnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`
);
