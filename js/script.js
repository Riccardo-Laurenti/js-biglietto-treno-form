// ! ALGORITMO BIGLIETTO TRENO FORM INPUT - Made by Riccardo Laurenti - Web Developer Full Stack

// Prendo elementi dom per la logica del programma

const nameSurnUser = document.getElementById('name-surname');

const kmUserTravel = document.getElementById('km-travel');

const scountSelectAge = document.getElementById('age-scount');

const buttonGenerate = document.getElementById('generate-btn');

const btnDelete = document.getElementById('btn-delete');


// Elementi Dom da stampare 

const showTicket = document.getElementById('show-ticket');

const ticketContain = document.getElementById('ticket-container')

const namePrint = document.getElementById('name-print')

const carrozzaRandom = document.getElementById('carrozza-random')

const cpRandom = document.getElementById('cp-random')

const rate = document.getElementById('rate')

const result = document.getElementById('price-ticket')


// Al click del bottone ..

buttonGenerate.addEventListener("click", function () {

    const domTicket = showTicket;

    const name = nameSurnUser.value.trim();

    const km = parseInt(kmUserTravel.value);

    const ageSelect = scountSelectAge.value;

    const randCarrozza = Math.floor(Math.random() * 2900) + 1;

    const cpRand = Math.floor(Math.random() * 600) + 1;

    let priceCalc = km * 0.21;

    let priceBase = priceCalc;

    let rateTicket = 'Tariffa base';

    // Validazione
    if (!name || isNaN(km) || km < 1) {
        alert("Inserisci i valori corretti !")

    } else {

        if (ageSelect === 'min') {
            priceBase = priceCalc * 0.8;

            rateTicket = 'Sconto 20%';

        } else if (ageSelect === 'over') {
            priceBase = priceCalc * 0.6;

            rateTicket = 'Sconto 40%';
        }

        ticketContain.classList.remove('d-none')
    }

    domTicket.innerHTML;

    namePrint.innerHTML = name;

    rate.innerHTML = rateTicket;

    carrozzaRandom.innerHTML = randCarrozza;

    cpRandom.innerHTML = cpRand;

    result.innerHTML = priceBase.toFixed(2) + ' €';


})


// Al click cancello ..

btnDelete.addEventListener("click", function () {

    nameSurnUser.value = '';

    kmUserTravel.value = '';

    scountSelectAge.value = '';

    ticketContain.classList.add('d-none')
})