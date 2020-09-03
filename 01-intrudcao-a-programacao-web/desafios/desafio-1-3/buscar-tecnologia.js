const usuarios = [
  {
    nome: 'Johnny',
    tecnologias: ['HTML', 'CSS', 'Javascript'],
  },
  {
    nome: 'Marcus',
    tecnologias: ['MogoDB', 'MySQL', 'PHP'],
  },
  {
    nome: 'Danilo',
    tecnologias: ['React', 'Nat.Js', 'Javascript'],
  },
  {
    nome: 'Mariano',
    tecnologias: ['Python', 'Node.js', 'Express'],
  },
  {
    nome: 'Natasha',
    tecnologias: ['HTML', 'CSS', 'Javascript'],
  },
];

function checarUsuarioUsaCSS(usuario) {
  let usuarioUsacss = false;

  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia === 'CSS') {
      usuarioUsacss = true;
    }
  }
  return usuarioUsacss;
}

for (let usuario of usuarios) {
  const usuarioTrabalhacomCSS = checarUsuarioUsaCSS(usuario);

  if (usuarioTrabalhacomCSS) {
    console.log(`O usuário ${usuario.nome} trabalha com CSS`);
  }
}
