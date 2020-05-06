// Function to toggle my notes for the week
const toggleMenu = () => {
  document.querySelector('#navigation').classList.toggle('show');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);
