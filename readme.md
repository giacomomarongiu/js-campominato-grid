# Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
:point_right: Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

## Steps
- Creo una variabile a cui associo la possibilità di creare un bottone nel DOM (Anche più di uno)
- Uso append per agganciare questo(i) elemento(i) alla DOM
- Assegno agli elementi delle classi di Bootstrap  
- Creo un ciclo che si ripete per 100 volte
- Creo un elemento che appendo alla mia row e gli assegno una classe col
- Nello stesso ciclo faccio si' che all'interno degli elementi venga visualizzato sul Dom un numero progressivo da 1 a 100
- Quando una cella viene cliccata le assegno una classe che permette di colorla
- Visualizzo un messaggio in console con il numero della cella cliccata
-- BONUS
- Genero un secondo Elemento accanto al bottone
- Assegno al select tre valori difersi 1-2-3
- Assegno a una variabile il valore selezionato in select


### DAY 2 Consegna
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.

Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


#### DAY 2 Steps
- Creo un array che contiene 16 numeri generati casualmente
- Verifico che nell'array non ci siano due numeri uguali
- Quando clicco su una cella:
-- SE il numero della cella è presente tra i numeri generati casualmente nell'array STOPPO IL GIOCO
-- SE NO la coloro di azzurro e continuo il gioco
- Comunico il punteggio ottenuto a fine partita
- Valuto il caso in la partita termini perché non ho cliccato nessun fungo