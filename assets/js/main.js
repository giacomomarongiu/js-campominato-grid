console.log("Hello World");

//SEZIONE DEDICATA A CREARE ELEMENTI NELLA DOM
// Creo una variabile a cui associo la possibilità
// di creare un bottone e gli altri elementi nel DOM (Anche più di uno)
const button = document.createElement('button');
const select = document.createElement('select');
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');

// Uso append per agganciare questo(i) elemento(i) alla DOM
document.body.append(main);
main.append(button);

//BONUS 1 - Genero un secondo Elemento accanto al bottone
main.append(select);
select.classList.add('my_select');

//BONUS 1 - Aggiungo le opzioni nel select
select.innerHTML =
    `<option value="100">Easy</option>
<option value="81">Medium</option>
<option value="49">Hard</option>`;

button.innerHTML = `CLICCA QUI PER GENERARE LA GRIGLIA`;
main.append(button);



//BONUS A CUI STAVO LAVORANDO IERI - LASCIO IN SOSPESO
/*let valueElement = select.addEventListener('click', function (e) {
    const selecetedElement = document.querySelector('.my_select')
    console.log(selecetedElement);
    console.log(selecetedElement.value);
    return selecetedElement.value;
})

console.log(valueElement);*/




//Functions
/** Questa funzione quando chiamata restituisce un array numerico di 16 numeri casuali
 * 
 * @returns {Array}
 */
function createPoops() {
    let myPoops = [];
    for (let i = 0; i < 16; i++) {
        // Creo un nuvo numero
        const newPoop = Math.floor(Math.random() * 100) + 1;
        // Verifico che nell'array non ci siano due numeri uguali
        // SE NON è incluso lo aggiungo
        if (!myPoops.includes(newPoop)) {
            myPoops.push(Math.floor(Math.random() * 100) + 1);
            // SE E' presente decremento l'inidice 
        } else { i-- }
    };
    return myPoops;
}

/** Questa funzione mi permette di creare una griglia sul DOM a ogni click
 * 
 */
function createGrill() {
    //Aggiungo elementi al DOM
    main.append(container);
    container.append(row);

    //Assegno agli elementi delle classi  
    container.classList.add('container');
    row.classList.add('row');

    //Svuoto la mia row per evitare che ogni click generi un'altra tabella
    //(Ovviamente al primo click sarà già vuota)
    row.innerHTML = "";


    //Creo un ciclo che mi permette di creare  elementi
    for (let i = 0; i < elementValue; i++) {

        // Creo una variabile che si incrementa assieme all'indice
        //(Parte da 1 anziché da zero perché dovrò visualizzarla nella card)
        const my_counter = i + 1;

        //Creo un elemento div
        const col = document.createElement('div');

        // Appendo il primo a row
        row.append(col);

        // Assegno la classe col all'elemento del DOM
        col.classList.add('col');

        //Nello stesso ciclo faccio si' che all'interno degli elementi venga
        // visualizzato sul Dom un numero progressivo da 1 a 100
        col.innerHTML = `${my_counter}`;

        // Verifico se l'incremento è corretto
        //onsole.log(my_counter); //OK
    }
}


function verifiedPoops(index) {
    let canYouPlay = true;
    let i = index;
    let colsElements = document.getElementsByClassName('col')
    const colElement = colsElements[i];
    const containerElement = document.getElementsByClassName('container')
    //DAY 2 
    /* Quando clicco su una cella:
     SE il numero della cella è presente tra i numeri generati casualmente nell'array STOPPO IL GIOCO
     SE NO la coloro di azzurro e continuo il gioco*/
    if (!listPoops.includes(i + 1)) {
        //Quando una cella viene cliccata le assegno una classe che permette di colorarla
        colElement.classList.toggle('blue')
        //Visualizzo un messaggio in console con il numero della cella cliccata
        console.log("Hai cliccato sul", i + 1);
        //Incremento le cacche mancate
        missedPoop++;
        console.log("Niente cacche per ", missedPoop);
        //Non rendo più cliccabile la box

        colElement.addEventListener('click', function (e) {
            e.stopPropagation();
        }, true);
    } else {
        //Pulisco il contenuto e aggiungo una cacca
        colElement.classList.add('poop')
        colElement.innerHTML = ``;
        colElement.innerHTML = `&#x1F4A9`
        console.log("Hai perso");
        //Non rendo più cliccabile la box
        colElement.addEventListener('click', function (e) {
            e.stopPropagation();
        }, true);
        for (let y = 0; y < colsElements.length; y++) {
            let colElement = colsElements[y];
        }
        //main.classList.add('youloose');
        //main.innerHTML=`<h1>YOU LOOSE</h1>`
    }
}

/** Questa funzione mi permette di scorrere le mie celle fino a che non trovo quella cliccata
 * 
 */
function scrollPoops() {
    //Mi serve avere le mie box create in un contenitore
    // Utilizzo un array
    let colsElements = document.getElementsByClassName('col')

    // Verifico di aver preso gli elementi corretti
    // console.log(colsElements); //ok

    //DAY 2
    //Mi serve un contatore che si incrementa quando non clicco sulla cacca

    //Utilizzo addEventListener e toggle in un ciclo for
    for (let i = 0; i < colsElements.length; i++) {
        //Variabile a cui assegno a turno gli elementi del mio array
        const colElement = colsElements[i];
        //console.log(colElement);
        colElement.addEventListener('click', function () {
            verifiedPoops(i);
        })
        //colElement.removeEventListener('click', verifiedPoops(i))
    }
}




//MAIN CODE

//DAY 2 Creo un array che contiene 16 numeri generati casualmente
let listPoops = createPoops();
//Verifico che il mio array cotenga 16 numeri casuali diversi
console.log(listPoops);//ok

//Dichiaro una variabile a cui per ora assegno il valore 100
//ma dopo vorrei avesse il valore value del select 
let elementValue = 100;

let missedPoop = 0;
let letsClick;

//Il codice parte al click
button.addEventListener('click', function () {

    createGrill();
    scrollPoops();

})


/*button.removeEventListener('click','funzioneTest')
function funzioneTest(){
    console.log('ciao bello');
}*/