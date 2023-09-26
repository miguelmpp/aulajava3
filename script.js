/* switch

let opcao = parseInt(prompt("Digite uma opçao: "));

switch(opcao){
    case 1:
        document.write("Primeira Opção")
        break;
    case 2:
        document.write("Segunda Opção")
        break;
    case 3: 
        document.write("Terceira opção")
        break;
    default :
        document.write("nehuma das opções validas")
        break;

}
*/

let valor = 7
console.log(valor)
valor = valor-1
console.log(valor);

let valor1 =10
console.log(valor1)
valor1 +=3;
console.log(valor1)

//for (laço de repetição)

for(let i=0; i<10; i++){
    console.log("Agora i vale", i);
}

//for com array 
let carros = ["fusca","belina", "marea turbo", "kombi","gurgel","passat"]

for(let i=0; i <carros.length;i++){
    console.log(carros[i]);
}
// for com o of 

for(let carro of carros){
    console.log(carro)
}