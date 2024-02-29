console.log("Hello World");

//SEZIONE DEDICATA A CREARE ELEMENTI NELLA DOM
// Creo una variabile a cui associo la possibilità
// di creare un bottone e gli altri elementi nel DOM (Anche più di uno)
const button = document.createElement('button')
const select = document.createElement('select')
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');

// Uso append per agganciare questo(i) elemento(i) alla DOM
document.body.append(main);
main.append(button);
//BONUS 1 - Genero un secondo Elemento accanto al bottone
main.append(select);
select.classList.add('my_select')
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

//DAY 2 Creo un array che contiene 16 numeri generati casualmente
let myPoops = [];
for (let i = 0; i < 16; i++) {
    // Creo un nuvo numero
    const newPoop = Math.floor(Math.random() * 100) + 1;
    // Verifico che nell'array non ci siano due numeri uguali
    // SE NON è incluso lo aggiungo
    if (!myPoops.includes(newPoop)) {
        myPoops.push(Math.floor(Math.random() * 100) + 1)
        // SE E' presente decremento l'inidice 
    } else {i--}
}

//Verifico che il mio array cotenga 16 numeri casuali diversi
//console.log(myPoops);//ok


//Il codice parte al click
button.addEventListener('click', function () {
    //Aggiungo elementi al DOM
    main.append(container);
    container.append(row);

    //Assegno agli elementi delle classi  
    container.classList.add('container');
    row.classList.add('row');

    //Svuoto la mia row per evitare che ogni click generi un'altra tabella
    //(Ovviamente al primo click sarà già vuota)
    row.innerHTML = "";

    //Dichiaro una variabile a cui per ora assegno il valore 100
    //ma dopo vorrei avesse il valore value del select 
    let elementValue = 100;

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

        col.classList.add('col')
        //Nello stesso ciclo faccio si' che all'interno degli elementi venga
        // visualizzato sul Dom un numero progressivo da 1 a 100

        col.innerHTML = `${my_counter}`
        // Verifico se l'incremento è corretto
        //onsole.log(my_counter); //OK
    }

    //Mi serve avere le mie box create in un contenitore
    // Utilizzo un array
    let colsElements = document.getElementsByClassName('col')

    // Verifico di aver preso gli elementi corretti
    //console.log(colsElements); //ok

    //Utilizzo addEventListener e toggle in un ciclo for
    for (let i = 0; i < colsElements.length; i++) {
        //Variabile a cui assegno a turno gli elementi del mio array
        const colElement = colsElements[i];

        colElement.addEventListener('click', function () {
            //Quando una cella viene cliccata le assegno una classe che permette di colorarla
            colElement.classList.toggle('blue')
            //Visualizzo un messaggio in console con il numero della cella cliccata
            console.log(i + 1);
        }
        )
    }

})



