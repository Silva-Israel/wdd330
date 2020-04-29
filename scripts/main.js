// Function to toggle my main menu
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);

