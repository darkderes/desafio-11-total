precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


count = 0;

count_data = document.querySelector(".cantidad");
count_data.innerHTML = count;

total_price = document.querySelector(".valor-total");


const incrementButton = document.getElementById("incrementButton");

// Agrega un event listener al botón para llamar a la función increment
incrementButton.addEventListener("click", function() {
    count++;
    count_data.innerHTML = count;
    total_price.innerHTML = precio * count;
    // precioSpan.innerHTML = precio * count;
});

const decrementButton = document.getElementById("decrementButton"); 

// Agrega un event listener al botón para llamar a la función decrement
decrementButton.addEventListener("click", function() {
    if(count > 0) {
        count--;
        count_data.innerHTML = count;
        total_price.innerHTML = precio * count;
        // precioSpan.innerHTML = precio * count;
    }
});