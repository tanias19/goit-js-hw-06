const form = document.querySelector('.login-form')
// console.dir(form);

const loginForm = (evt) => {
    evt.preventDefault();
    const {
    elements: { email, password }
    } = evt.currentTarget;
    if (email.value === "" || password.value === "") {
        alert('Please fill in all the fields!');
    } else {
        const object = {
            email: email.value,
            password: password.value,
        }
        console.log(object);
    }
    evt.currentTarget.reset();
}

form.addEventListener('submit', loginForm)