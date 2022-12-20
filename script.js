/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ x ]  A soma dos dois números;
- [ x ]  A subtração dos dois números;
- [ x ]  A multiplicação dos dois números;
- [ x ]  A divisão dos dois números;
- [ x ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ x ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [  ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!

*/

let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))

//Operações Matemáticas

const sum = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = (n1 / n2).toFixed(2);
const restDiv = n1 % n2;

alert(`A soma de ${n1} + ${n2} é igual a ${sum}`)
alert(`A subtração de ${n1} - ${n2} é igual a ${sub}`)
alert(`A multiplicação de ${n1} * ${n2} é igual a ${mult}`)
alert(`A divisão de ${n1} / ${n2} é igual a ${div}`)
alert(`A o resto da divisão de ${n1} por ${n2} é igual a ${restDiv}`)


// Checando se a soma é Par ou Impar


if (sum % 2 === 0) {
    alert(`O número ${sum} é par.`)
} else {
    alert(`O número ${sum} é impar.`)
}

if (n1 === n2) {
    alert("Os números inseridos são iguais.")
} else {
    alert("Os números inseridos não são iguais.")
}