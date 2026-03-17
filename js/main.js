// JS scripts placed here
// const button = document.querySelector('.submit-1');
// const area = document.querySelector('.area');
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     area.classList.toggle('on');
// });


const star = document.querySelector(".star");
const stars = document.querySelectorAll(".star");
console.log("hey ");
console.log(star);
console.log(stars);


const body = document.querySelector('body');
const pinkfish = document.querySelector(".bl-fish-1");
const barracudda = document.querySelector(".ba-fish-1");
const barracudda2 = document.querySelector(".ba-fish-2");

console.log(pinkfish);
console.log(barracudda);

pinkfish.addEventListener('click', () => {
// Code to execute when the element is clicked
    body.classList.toggle("pink");
});

barracudda.addEventListener('click', () => {
// Code to execute when the element is clicked
    barracudda.classList.toggle("flipped");
    body.classList.toggle('invert-colors')
    pinkfish.classList.toggle("hvr-bob");
});

barracudda2.addEventListener('click', () => {
// Code to execute when the element is clicked
    barracudda.classList.toggle("swim");
});