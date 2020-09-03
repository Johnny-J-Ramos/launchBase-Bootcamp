const classA = [
  {
    name: 'Johnny',
    grade: 9.5,
  },
  {
    name: 'Tatiana',
    grade: 1.5,
  },
  {
    name: 'Rafael',
    grade: 1.5,
  },
];

const classB = [
  {
    name: 'Adré',
    grade: 3.5,
  },
  {
    name: 'Marcus',
    grade: 5.5,
  },
  {
    name: 'Carlos',
    grade: 4.5,
  },
  {
    name: 'Martoro',
    grade: 10,
  },
  {
    name: 'Denilson',
    grade: 6.5,
  },
  {
    name: 'Alyson',
    grade: 9.5,
  },
  {
    name: 'Maria',
    grade: 7.5,
  },
];

function calculateAverage(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }

  const average = sum / students.length;

  return average;
}

function sendMessage(average, classs) {
  if (average > 5) {
    console.log(
      `the class average ${classs} wes in ${average}. congratulations!!!`
    );
  } else {
    console.log(`the class average ${classs} is not good.`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendMessageflunked(student) {
  if (student.flunked) {
    console.log(`Aluno ${student.name} flunked.`);
  }
}

function studentsflunked(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendMessageflunked(student);
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'Turma A'); //Não chamados de parâmetros da função
sendMessage(average2, 'Turma B'); //Não chamados de parâmetros da função

studentsflunked(classA);
studentsflunked(classB);

/*====================================================================
  APRENDENDO ESTRUTURA DE REPETIÇÃO

  for (let i = 0)

  O FOR, é permite que a variavél que estiver dentro dela mude de modo que a estrutura vide um estrutura
  de repetição.

======================================================================
ESCOPO DE BLOCOS

  - Uma variável criada no seu escopo, ela funciona no seu escopo e dentro do seu escopos filho, porém não
funciona no escopo pai.
  - Já uma variável blobal, é bem provável que funcione dentro dos escopos.

  - O motivo de criar um RETURN dentro do Escopo, é para mandar as informações para fora do escopo.
  

======================================================================*/
