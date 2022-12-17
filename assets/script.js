const data = [
    {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
    },
    {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
    },
    {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "1",
    },
    {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "2",
    },
    {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "3",
    },
];

const tabela = document.querySelector('#imc-table');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let btnCalcular = document.querySelector('#btn-calcular');
let btnLimpar = document.querySelector('#btn-limpar');

let imcNumber = document.querySelector('#imc-number span');
let imcInfo = document.querySelector('#imc-info span');
let backBtn = document.querySelector('#back-btn');

let formulario = document.querySelector('form');
let resultado = document.querySelector('#resultado');

function createTable(data) {
    data.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('table-data');

        const classification = document.createElement('p');
        classification.innerText = item.classification;
        const info = document.createElement('p');
        info.innerText = item.info;
        const obesity = document.createElement('p');
        obesity.innerText = item.obesity;

        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        tabela.appendChild(div);
    });
};

function cleanInputs() {
    peso.value = "";
    altura.value = "";
}

function calcImc(valorPeso, valorAltura) {
    let imc = (valorPeso / (valorAltura* valorAltura)).toFixed(1);
    return imc;
}

function exibir() {
    formulario.classList.toggle("hide");
    resultado.classList.toggle("hide");
}


createTable(data);

btnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let valorPeso = peso.value;
    let valorAltura = altura.value;

    let imc = calcImc(valorPeso, valorAltura);

    let info;

    data.forEach((item) => {
        if(imc >= item.min && imc <= item.max) {
            info = item.info;
        }
    });

    
    if(!info) return;

    imcNumber.innerText = imc;
    imcInfo.innerText = info;

    exibir();
    
});

btnLimpar.addEventListener("click", (e) => {
    e.preventDefault();
    cleanInputs();
});





