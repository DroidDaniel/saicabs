document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.side-menu').style.right = '0';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.side-menu').style.right = '-250px';
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.side-menu') && !e.target.closest('.hamburger')) {
        document.querySelector('.side-menu').style.right = '-250px';
    }
});
