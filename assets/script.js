let nome = document.querySelector('#nome');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let imc = peso/(altura * altura);
let form = document.querySelector('form');
let btn = document.querySelector('#btn');

function resultado() {
    if(imc > 30) {
        console.log('parabéns!')
    } else {
        console.log('obrigado!')
    }
}

btn.addEventListener('click', resultado())
