let button = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener('mouseover', function () {
    button.style.position = 'absolute'; // Need to wrap 'absolute' in quotes
    button.style.top = Math.random() * height + 'px'; // Need to concatenate 'px' with the value
    button.style.left = Math.random() * width + 'px'; // Same here
});