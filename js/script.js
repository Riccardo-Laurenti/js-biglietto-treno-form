// ! ALGORITMO BIGLIETTO TRENO FORM INPUT - Made by Riccardo Laurenti - Web Developer Full Stack

// Prendo elementi dom per la logica del programma

const nameSurnUser = document.getElementById('name-surname');

const kmUserTravel = document.getElementById('km-travel');

const scountSelectAge = document.getElementById('age-scount');

const buttonGenerate = document.getElementById('generate-btn');

const btnDelete = document.getElementById('btn-delete');


// Elementi Dom da stampare 

//const showTicket = document.getElementById('text-ticket');

const showTicketContain = document.getElementById('ticket-container')

const namePrint = document.getElementById('name-print')

const carrozzaRandom = document.getElementById('carrozza-random')

const cpRandom = document.getElementById('cp-random')

const rate = document.getElementById('rate')

const result = document.getElementById('price-ticket')


// Al click del bottone ..

buttonGenerate.addEventListener("click", function () {



    const name = nameSurnUser.value.trim();

    const km = parseInt(kmUserTravel.value);

    const ageSelect = scountSelectAge.value;

    const randCarrozza = Math.floor(Math.random() * 2900) + 1;

    const cpRand = Math.floor(Math.random() * 600) + 1;

    let priceOperationCalc = km * 0.21;

    let calcScount = priceOperationCalc;

    let rateTicket = 'Tariffa base';

    // Validazione
    if (!name || isNaN(km) || km < 1) {
        alert("Inserisci i valori corretti !")

    } else {

        if (ageSelect === 'min') {
            calcScount = priceOperationCalc * 0.8;

            rateTicket = 'Sconto 20%';

        } else if (ageSelect === 'over-65') {
            calcScount = priceOperationCalc * 0.6;

            rateTicket = 'Sconto 40%';
        }

        showTicketContain.classList.remove('d-none')
    }

    namePrint.innerHTML = name;

    rate.innerHTML = rateTicket;

    carrozzaRandom.innerHTML = randCarrozza;

    cpRandom.innerHTML = cpRand;

    result.innerHTML = calcScount.toFixed(2) + ' €';


})


// Al click cancello ..

btnDelete.addEventListener("click", function () {

    nameSurnUser.value = '';

    kmUserTravel.value = '';

    scountSelectAge.value = '';

    showTicketContain.classList.add('d-none')
})