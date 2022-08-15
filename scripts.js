let opção1;
let opção2;
let opção3;
let validar;



function selecionarFood(classComida){
    
    opção1 = document.querySelector(classComida);
    check1 = document.querySelector('.check')

    const botaoSelecionado = document.querySelector('.selecionado');
    

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    const botao = document.querySelector(classComida);
    botao.classList.add('selecionado');


    validacao ();
}




function selecionarDrinks(classDrinks){

    opção2 = document.querySelector(classDrinks)

    const botaoSelecionadoD = document.querySelector('.selecionadoD');

    if (botaoSelecionadoD !== null) {
        botaoSelecionadoD.classList.remove('selecionadoD');
    }

    const botaoD = document.querySelector(classDrinks);
    botaoD.classList.add('selecionadoD');

    validacao ();
}

function selecionarSobremesas(classSobremesas){

    opção3 = document.querySelector(classSobremesas)

    const botaoSelecionadoS = document.querySelector('.selecionadoS');

    if (botaoSelecionadoS !== null) {
        botaoSelecionadoS.classList.remove('selecionadoS');
    }

    const botaoS = document.querySelector(classSobremesas);
    botaoS.classList.add('selecionadoS');  

    validacao ();

}


function validacao (){

    if(opção1 && opção2 && opção3){
        const botao = document.querySelector('.caixa-pedido');
        botao.innerHTML = "Fechar pedido"
        botao.classList.add('escondido');
     } 
 }

 function somar (){
    let titulo1 = document.querySelector(".selecionado .tituloComida").textContent;
    let titulo2 = document.querySelector(".selecionadoD .tituloDrinks").textContent;
    let titulo3 = document.querySelector(".selecionadoS .tituloSobremesas").textContent;


    let pratos = document.querySelector(".selecionado .valorComida").textContent;
    let bebidas = document.querySelector(".selecionadoD .valorDrinks").textContent;
    let dessert = document.querySelector(".selecionadoS .valorSobremesas").textContent;

    pratos = parseFloat(pratos.replace(",", "."));
    bebidas = parseFloat(bebidas.replace(",", "."));
    dessert = parseFloat(dessert.replace(",", "."));
    

    let total =  (pratos + bebidas + dessert).toFixed(2);

    let text = 'https://wa.me/?text=';
    let text1 = `Olá gostaria de fazer o pedido:\n -Prato: ${titulo1}\n -Bebida: ${titulo2}\n -Sobremesa: ${titulo3}\n -Total:R$ ${total}`

    let encoded = encodeURIComponent(text1)
    window.open(text + text1, "_blank")

 }  

 

 