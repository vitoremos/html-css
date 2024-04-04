function showHeart() {
    var heart = document.getElementById('heart');
    heart.classList.add('show');
    setTimeout(function() {
        heart.classList.remove('show');
    }, 1000);
}
