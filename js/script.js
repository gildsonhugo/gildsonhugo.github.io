document.getElementById('mobile').addEventListener('click', e => {
    document.querySelector('.navbar ul').classList.toggle('open');
    e.currentTarget.classList.toggle('open');
});