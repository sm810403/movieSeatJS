const seats = document.querySelectorAll('.seat:not(.o-seat)');
const tickets = document.querySelector('.tickets');
const total = document.querySelector('.total');
const movieSelect = document.getElementById('movie-select')

const ticketPrice = +movieSelect.value;
console.log(typeof ticketPrice)
seats.forEach((seat)=>{
    seat.addEventListener('click',(e)=>{
        if (e.target.classList.contains('seat')&&!e.target.classList.contains('o-seat')){
            e.target.classList.toggle('s-seat');
            updateUI();
        }  
        
    }) 
})
let totalSeats = [];
function updateUI(){
    const selectedSeat = document.querySelectorAll('.row.seat.s-seat');
    const selectedSeatCount = totalSeats.length;
    console.log(selectedSeatCount)
    tickets.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount*ticketPrice;
}
// movieSelect.addEventListener('change',function(){

// })