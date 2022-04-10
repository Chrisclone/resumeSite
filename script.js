
let car = document.getElementsByClassName("carousel-element");
let pages = document.getElementsByClassName("page")

let last = 0;

function changePage(page){
    pages[page].scrollIntoView({behavior:"smooth"})

    car[last].style.backgroundColor = "#fff";

    car[page].style.backgroundColor = "#000"

    last = page;
}

for (let i = 0; i < car.length; i++) {
    car[i].addEventListener("click", () => {changePage(i)});
}