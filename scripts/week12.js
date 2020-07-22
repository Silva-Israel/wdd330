// Function to toggle my notes for the week
const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('show');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);

function doNothing() {
    let nothing = document.createElement('P');
    nothing.innerHTML = "Nothing happened!";
    let container = document.querySelector('#nothing-goes-here');

    container.appendChild(nothing);
}

document.querySelector('#nothing').addEventListener('click', doNothing);