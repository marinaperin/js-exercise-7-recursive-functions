/*
    Exercise 1 

    Crea una funzione che converte tutte le proprietà di
    tipo 'number' all'interno di un oggetto in stringhe 
    (comprese le proprietà annidate).

*/

const numberToString = (object) => {
    const entries = Object.entries(object);
    for(let i = 0; i < entries.length; i++){
        const entry = entries [i];
        const key = entry [0];
        const value = entry [1];
        switch(typeof value){
            case 'number':
                object[key] = value.toString();
            break;
            case 'object':
                numberToString(object[key]);
            break;    
        }  
    }return object;  
};

/*
    Exercise 2

    Crea un calcolatore di fattoriale (5 fattoriale = 5x4x3x2x1).
    L'utente deve poter inserire un numero, e al click di un 
    bottone calcola, stampare il risultato del fattoriale di 
    quel numero (è una funzione ricorsiva).

*/

const factorialCalculator = (number) =>{
    if(number === 0 || number === 1){
        return 1;
    }
    return number * factorialCalculator(number - 1);
};

window.addEventListener('load', ()=> {
    const factorialButton = document.getElementById('factorialButton');
    factorialButton.addEventListener('click', ()=>{
        const inputFactorial = document.getElementById('input-factorial');
        const input = inputFactorial.valueAsNumber;
        const factorized = factorialCalculator(input);
        const factorialResult = document.getElementById('factorial-result');
        factorialResult.innerText = `${factorized}`;
    })
});

/*

    Exercise 3

    Crea una funzione che dato un oggetto, stampa sul documento
    HTML il diagramma ad albero dell'oggetto usando i tag <ul> 
    per gli oggetti e i tag <ol> per gli array.

*/



const objectTreeDiagram = (object)=> {
    const entries = Object.entries(object);
    for (let i = 0; i < entries.length; i++){
        const entry = entries [i];
        const key = entries [0];
        const value = entries [1];
        const array = Array.isArray(object[key]);
        switch(typeof value){
            case array:
                const ol = document.createElement('ol');
                const arrayLi = ol.createElement('li');
                arrayLi.innerHTML = array[i];
            break;
            case 'object':
                objectTreeDiagram(object[key]);
            default:
                const ul = document.createElement('ul');
                const li = ul.createElement('li');
                li.innerHTML += entry;
                break;
        }
    }return;
};

const italy = {
	nome: 'Repubblica Italiana',
	bandiera: {
		stile: 'verticale',
		colori: ['rosso', 'verde', 'bianco'],
		forma: 'rettangolo',
	},
	currency: 'euro',
    	popolazione: 50000000,
}


window.addEventListener('load', ()=>{
    const div = document.getElementById('tree-diagram');
    div.innerHTML = objectTreeDiagram(italy);
})