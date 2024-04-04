const button = document.getElementById('btn');

button.addEventListener('mouseenter', function() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  button.style.backgroundColor = "#" + randomColor;
});

button.addEventListener('mouseleave', function() {
  button.style.backgroundColor = "#3498db";
});
