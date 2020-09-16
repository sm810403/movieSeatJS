const seats = document.querySelectorAll('.seat:not(.o-seat)');
const tickets = document.querySelector('.tickets')


seats.forEach((seat)=>{
    seat.addEventListener('click',(e)=>{
        if (!e.target.classList.contains('s-seat')){
            e.target.classList.add('s-seat')
        } else {
            e.target.classList.remove('s-seat')
        }
        updateTotal();
    }) 
})
function updateTotal(){
    
}