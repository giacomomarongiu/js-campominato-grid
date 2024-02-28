console.log("Hello World");

// Creo una variabile a cui associo la possibilità
// di creare un bottone nel DOM (Anche più di uno)
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');
// La dichiaro adesso ma vorrei utilizzarla dopo


// Uso append per agganciare questo(i) elemento(i) alla DOM
document.body.append(main);
main.append(container);
container.append(row);

//Assegno agli elementi delle classi di Bootstrap  
container.classList.add('container');
row.classList.add('row');


//Creo un ciclo che mi permette di creare 100 elementi
for (let i = 0; i < 100; i++) {
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
        //verifico se solo nelle'elemento corretto);
        colElement.classList.toggle('blue')
        console.log(i + 1);
    }
    )
}