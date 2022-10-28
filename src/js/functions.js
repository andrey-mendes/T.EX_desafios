let paises = [
    ['Brasil', 'Feijoada', 0],
    ['Itália', 'Spaghetti', 0],
    ['França', 'Ratatouille', 0],
    ['México', 'Pozole', 0],
    ['Inglaterra', 'Fish and Chips', 0],
    ['Alemanha', 'Wurst', 0],
    ['Argentina', 'Parrillada', 0],
    ['Grécia', 'Moussaka', 0],
    ['Japão', 'Lámen', 0],
    ['Portugal', 'Bacalhau', 0]
];

let numSorteado = 0;

//Cria os elementos base
function criaElementos (parent, text, type) {
    let obj;

    if (type == 'titulo') {
        obj = document.createElement('p');
        obj.innerText = text;   
        obj.setAttribute('class', 'w-25 border-1 bg-light fw-bold');
    }
    else if (type == 'texto') {
        obj = document.createElement('span');
        obj.innerText = text;  
        obj.setAttribute('class', 'p-1 mtb-1 d-inline-block fw-normal');
    }
    
    parent.appendChild(obj);
    return obj;
}


//Cria os elementos base
let pais = criaElementos (document.querySelector('#boxMensagem'), 'País: ', 'titulo');
criaElementos (pais, '', 'texto');
let prato = criaElementos (document.querySelector('#boxMensagem'), 'Prato Típico: ', 'titulo');
criaElementos (prato, '', 'texto');
let qtd = criaElementos (document.querySelector('#boxMensagem'), 'Quantidade de exibições: ', 'titulo');
criaElementos (qtd, '', 'texto');

// Ao clicar no botão, sorteia um valor aleatório
document.querySelector('#btnMensagem').onclick = function () {
    numSorteado = Math.floor(Math.random() * 10); 
    paises[numSorteado][2] += 1;

    //Atribui os textos para cada elemento 'span'
    for (let i = 0; i < 3; i++) {
        document.querySelector(`#boxMensagem p:nth-of-type(${i+1}) span`).innerText = paises[numSorteado][i];
    }
};