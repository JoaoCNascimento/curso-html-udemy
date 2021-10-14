const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');

email.addEventListener('keypress', (e) => {
    setInputBorder(email);
})

password.addEventListener('keypress', (e) => {
    setInputBorder(password);
})

function setInputBorder(element) {
    if(element.value.length > 0) {
        element.style.cssText = 'border-color: rgb(255, 145, 0);';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let json = {
        email: email.value,
        password: password.value
    }

    console.log(json);
})