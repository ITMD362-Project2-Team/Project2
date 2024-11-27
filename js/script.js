const navButton = document.querySelector('.button--navigation');
const navigation = document.querySelector('.navigation');

navButton.addEventListener('click', (event) => {
    event.preventDefault();
    navigation.classList.toggle('navigation--open');
})