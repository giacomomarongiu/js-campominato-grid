//1) CREO ELEMENTI NEL DOM
//2) RACCOLTA DI FUNZIONI
//3) MAIN CODE

//SEZIONE DEDICATA A CREARE ELEMENTI NELLA DOM
// Creo una variabile a cui associo la possibilità
// di creare un bottone e gli altri elementi nel DOM (Anche più di uno)
const button = document.createElement('button');
const select = document.createElement('select');
const form = document.createElement('form')
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');

// Uso append per agganciare questo(i) elemento(i) alla DOM
document.body.append(main);
main.append(form)
form.append(button);

//BONUS 1 - Genero un secondo Elemento accanto al bottone
form.append(select);

// Aseegno un nome al select per poi prenderne il valore
document.querySelector('select').name = 'level';
//console.log(document.querySelector('select'));

//BONUS 1 - Aggiungo le opzioni nel select
select.innerHTML =
    `<option value="100">Easy</option>
<option value="81">Medium</option>
<option value="49">Hard</option>`;

button.innerHTML = `CLICCA QUI PER GENERARE LA GRIGLIA`;
form.append(button);





//FUNCTIONS
/** Questa funzione quando chiamata restituisce un array numerico di 16 numeri casuali
 * tra il numero massimo di celle generate
 * @param {number} number
 * @returns {Array}
 */
function createPoops(number) {
    let poopRange = number;
    let myPoops = [];
    for (let i = 0; i < 16; i++) {
        // Creo un nuvo numero
        const newPoop = Math.floor(Math.random() * poopRange) + 1;
        // Verifico che nell'array non ci siano due numeri uguali
        // SE NON è incluso lo aggiungo
        if (!(myPoops.includes(newPoop))) {
            myPoops.push(newPoop);
            // SE E' presente decremento l'inidice 
        } else  i--
    };
    return myPoops;
}

/** Questa funzione mi permette di creare una griglia delle dimensioni che voglio sul DOM 
 * 
 */
function createGrill(number) {
    elementValue = number;

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
        // Assegno la classe col OGNI elemento del DOM
        // A seconda delle dimensioni della griglia assegno una classe specifica
        if (elementValue == 100) {
            // Assegno la classe col-10 all'elemento del DOM
            col.classList.add('col', 'col-10');
        } else if (elementValue == 81) {
            // Assegno la classe col-9 all'elemento del DOM
            col.classList.add('col', 'col-9');
        } else {
            // Assegno la classe col-7 all'elemento del DOM
            col.classList.add('col', 'col-7');
        }

        //Nello stesso ciclo faccio si' che all'interno degli elementi venga
        // visualizzato sul Dom un numero progressivo da 1 a 100
        col.innerHTML = `${my_counter}`;
        // Verifico se l'incremento è corretto
        //onsole.log(my_counter); //OK
    }
}

/**
 * Questa funzione mi permette di verificare se la cella cliccata è associata a un numero
 * della mia lista e in caso colorarla e non renderla più cliccabile
 * @param {number} index
 * @param {Array} list 
 */
function verifiedPoops(index, list) {
    let listPoops= list;
    let i = index;
    let colsElements = document.getElementsByClassName('col')
    const colElement = colsElements[i];
    /* Quando clicco su una cella:
     SE il numero della cella NON è presente tra i numeri generati casualmente nell'array:
     -> Lo coloro -> Visualizzo quale ho cliccato in console -> Aumento l'indice di ->
     -> Visualizzo l'indice -> Rendo l'elemento non più cliccabile.*/
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
    } else if(listPoops.includes(i + 1) || missedPoop==(listPoops.length-16) ) {
        //SE è PRESENTE: 
        //Pulisco il contenuto e aggiungo una cacca -> Visualizzo il punteggio
        // -> Prendo tutti gli elementi e li rendo non cliccabili
        colElement.classList.add('poop')
        colElement.innerHTML = ``;
        colElement.innerHTML = `&#x1F4A9`
        console.log("PARTITA FINITA, HAI TOTALIZZATO:", missedPoop);
        console.log("Clicca sul bottone per riprovare");
        //Scorro l'intero array e non rendo più cliccabile nessuna box
        for (let y = 0; y < colsElements.length; y++) {
            //console.log(colsElements);
            let colElement = colsElements[y];
            colElement.addEventListener('click', function (e) {
                e.stopPropagation();
            }, true);

        }
        //main.classList.add('youloose');
        //main.innerHTML=`<h1>YOU LOOSE</h1>`
    }
}

/** Questa funzione mi permette di scorrere le mie celle fino a che non trovo quella cliccata
 * la lista serve perché sarà quella da passara durante la verifica nella funzione successiva
 * @param {Array} list 
 */
function scrollPoops(list) {
    let listPoops= list;
    //Mi serve avere le mie box create in un contenitore
    // Utilizzo un array
    let colsElements = document.getElementsByClassName(['col'])

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
            verifiedPoops(i,listPoops);
        })
        //colElement.removeEventListener('click', verifiedPoops(i))
    }
}





//MAIN CODE

//Dichiaro una variabile a cui dopo vorrei avesse il valore value del select 
let elementValue;

let missedPoop = 0;

//Il codice parte al click
document.querySelector('form').addEventListener('submit', function (e) {
    //Resetto il contatore nel caso venga creata un'altra griglia  
    missedPoop =0;
    e.preventDefault();
    elementValue = e.target.level.value;
    //DAY 2 Creo un array che contiene 16 numeri generati casualmente
    let listPoops = createPoops(elementValue);
    //Verifico che il mio array cotenga 16 numeri casuali diversi
    console.log("Questi sono i numeri se vuoi pestare cacca", listPoops);//ok

    createGrill(elementValue);
    scrollPoops(listPoops);

})
