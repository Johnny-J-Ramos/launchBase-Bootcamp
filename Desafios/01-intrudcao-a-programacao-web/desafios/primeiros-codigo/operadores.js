/*===============================================
OPERADORES DE COMPARAÇÃO

>     Maior 
<     Manor
>=    Maior igual a 
<=    Menor igual a 
==    Igual a 
===   Igual a do mesmo tipo
!=    Diferente e 
!==   Diferente inclusive do tipo

=================================================

OPERADORES DE LÓGICOS

&& "E" As duas condições devem ser verdadeiras para 
que a condição final seja verdadeira.

|| "OU" Uma das condições devem ser veradeiras para que a condiçõa final 
seja verdadeira.

=================================================*/

//DESAFIO 1
// Verificar se a pessa é maior de 18 anos
//Se sim, deixar entrar, se não, bloquear
//Se a pessoa tiver 17 anos
//A visar para voltar quando fizer 18 anos

const nome = 'Johnny Jefferson';
const idade = 25;

if (!(idade >= 18) || idade === 17) {
  console.log('bloquear entrada');
} else {
  console.log('Deixar entrar');
}

/*===================================================
OPERADORES ARITMÉTICOS

*      Multiplicação
/      Divisão
%      Resto da divisão
+      Adição
-      Subtração

===================================================== */

console.log(2 * 2); // 4
console.log(4 / 2); // 2
console.log(2 % 1.5); // 0.5
console.log(4 + 3); // 7
console.log(4 - 5); //1
