console.log('Welcome to RANDOM COLOR GENERATOR');

// Setting Colors Option Array
const colorOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const currentColor = document.getElementById('currentColor');

const pickColor = document.getElementById('pickColor');
pickColor.addEventListener('click', setHex);

function setHex() {
    let color = '#';
    // Selecting 6 random Color from colorOptions
    for (let i = 0; i < 6; i++) {
        color += colorOptions[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    currentColor.innerHTML = color;
    currentColor.style.color = color;
}

let copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', copyHex);

function copyHex() {
    let color = currentColor.innerText;
    // console.log(color);

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = color;
    tempTextArea.setAttribute('readonly', '');
    tempTextArea.style.position = 'absolute';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    tempTextArea.remove();

    const alert = document.createElement('span');
    alert.classList.add('alert');
    alert.textContent = `Copied ${color} !`;

    const container = document.querySelector('.container');
    container.insertAdjacentElement('afterbegin', alert);

    setTimeout(() => {
        alert.remove();
    }, 1500);
}