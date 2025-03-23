function incrementCounter(){
    let counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) + 1;
}

function decrementCounter(){
    let counter = document.getElementById("counter");
    counter.innerText = Number(counter.innerText) - 1;
}