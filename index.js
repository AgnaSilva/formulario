//isso é um comentário
/*isso é 
um comentario
de multiplas 
linhas*/ 

//variaveis
//espacos na memória para guardar algim tipo de dados.

var num =10

var nome= "Barbie"

let num2= 5

const pi = 3.14

//mostrar no console informações
//console.log(nome)
//console.log(pi)

//estutura de dados que ultizamos para armazenar diferentes tipos de informações;

var capitais =["São Paulo","Califórnia","Paris"]
console.log(capitais[2])

//vareáveis booleanas
var frio= true
console.log(frio)

//objetos
//null
//NaN
//Undefined
var idade= 40

//template string: uma string com diferentes tipos de dados
console.log(`Sou ${nome} e tenho ${idade} anos`)

//operadores matemáticos
/**
  + adição
  - subtração
  / divisão
  * multiplicação
  % resto da divisão
  ++ incrementar
  -- decremento
  
*/
console.log( 5 + 2)

var numero = 10
//numero++
//console.log("incremento de 10")
//console.log(numero)

//numero--
//console.log("decremento de 10")
//console.log(numero)

//operadores de atribuição
/*  = atribuir valor a uma variável
    += atribuir o valor da soma em uma variável
    -=
    *=
    /=


*/

numero += 2
console.log(numero)

//operadores relacionais

/*
  == comparar se os dois valores sao iguais
  > maior que
  < menor que 
  >= maior ou igual
  <= menor ou igual
  === compara se os valores tem o mesmo tipo
  !== compara se os valores tem tipos diferentes

*/

//console.log(2 == 2)

//console.log(2 === "2")

//Operadores lógicos

/*
    !NOT (negação)
    && AND (e, conjuncao)
    || OR   (ou, disjuncao )
*/
/*
console.log("Peradores lógico AND")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log("Peradores lógico OR")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

*/
//estrutura de decisão

/*
  if
  else
*/
/*
var tamanhoImagem = 10

if(tamanhoImagem >= 100){
    console.log("imagem grande")

}else if( 10 < tamanhoImagem && tamanhoImagem < 100 ){
        console.log("imagem adequada")

} 

else{

    console.log("imagem pequena")
}
*/
/*
//laços de repetição
console.log("Loop for")
for(var i=0; i < 4; i+=1){

  console.log(i)
}

console.log("Loop while")

var indice= 0
while(indice < 4){

    console.log(indice)

    indice++
} 
*/

//Função é um bloco de código para executar uma tarefa específica

//Função sem parâmetros
console.log("Função sem parâmetros")
function somar(){
  console.log(2+2)

}
somar()

console.log("Função com parâmetros")

function multiplicar(n1,n2){
      
      console.log(n1*n2)

}

multiplicar(2,3)

console.log("Função com retorno")

function dividir(n1,n2){

    return (n1/n2)
}

var resultado = dividir(2,2)

console.log(resultado)

//Função seta =>

var sum = (param1,param2) => {
  return param1+ param2

}
console.log("Função seta")
console.log(sum(2,3))

