const seats = document.querySelectorAll('.row .seat:not(.o-seat)');
const tickets = document.querySelector('.tickets');
const total = document.querySelector('.total');
const movieSelect = document.getElementById('movie-select')

let ticketPrice = +movieSelect.value;


//select seat
seats.forEach((seat)=>{
    seat.addEventListener('click',(e)=>{
        if (e.target.classList.contains('seat')&&!e.target.classList.contains('o-seat')){
            e.target.classList.toggle('s-seat');
            updateUI();
        }  
        
    }) 
})
//change ticket value
movieSelect.addEventListener('change',(e)=>{
    let newValue = e.target.value;
    ticketPrice = +newValue;
    setMovieData(e.target.selectedIndex, e.target.value); 
    updateUI();
})
//get value and index data
function setMovieData(ticketValue, ticketIndex){
    localStorage.setItem('selectedMovieIndex', ticketIndex);
    localStorage.setItem('selectedMovieValue', ticketValue);
}

function setDataUI(){
    const selectedSeats = JSON.parse(localStorage.getItem(selectedSeats));
    if (selectedSeats !== null){
        updateUI();
    }
}

//update UI whenever selecting seat or changing value
function updateUI(){
    const selectedSeats = document.querySelectorAll('.row .seat.s-seat');
    const seatIndex = [...selectedSeats].map(seat=> [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

    const numOfSelected = selectedSeats.length
    tickets.innerText = numOfSelected;
    total.innerText = numOfSelected*ticketPrice;
}

