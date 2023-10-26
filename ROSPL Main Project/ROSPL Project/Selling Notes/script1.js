var container = document.getElementById("container");
var count = document.getElementById("count");
var total = document.getElementById("total");
var movie = document.querySelector("#movies");
var screen = document.querySelector("img");
var seat_count = 0;
var total_cost = 0;

const setCoutAndTotal = () => {
    count.innerHTML = seat_count;
    total.innerHTML = total_cost;
}

container.addEventListener("click", (e) => {
    if (e.target.classList.value === 'seat' || e.target.classList.value === 'seat occupied') {
        e.target.classList.toggle('occupied');

        if(e.target.classList.value !== 'seat') {
            seat_count++;
            total_cost += +movie.value;
        }
        else {
            seat_count--;
            total_cost -= +movie.value;
        }
    }
    setCoutAndTotal();
 });

 
movie.addEventListener('click', (e) => {
    total_cost = seat_count * (e.target.value);
    setCoutAndTotal();

    if(e.target.value == 12) 
        screen.src = "Joker.jpg";
    else if(e.target.value == 10) 
        screen.src = "Avenger.jpg";
    else if(e.target.value == 8) 
        screen.src = "Toy.jpg";
    else 
        screen.src = "Lion.jpg"
});

// screen.src = "Joker.jpg";