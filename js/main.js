// JS scripts placed here
const button = document.querySelector('.submit-1');
const area = document.querySelector('.area');
button.addEventListener('click', (e) => {
    e.preventDefault();
    area.classList.toggle('on');
});