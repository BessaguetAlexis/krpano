// JavaScript (script.js)
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const openModal1Button = document.getElementById('openModal1');
const openModal2Button = document.getElementById('openModal2');
const closeModal1Button = document.getElementById('closeModal1');
const closeModal2Button = document.getElementById('closeModal2');

openModal1Button.addEventListener('click', () => {
    modal1.style.display = 'flex';
});

openModal2Button.addEventListener('click', () => {
    modal2.style.display = 'flex';
});

closeModal1Button.addEventListener('click', () => {
    modal1.style.display = 'none';
});

closeModal2Button.addEventListener('click', () => {
    modal2.style.display = 'none';
});
