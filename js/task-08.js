const form = document.querySelector('.login-form')
const email = form.elements.email
const password = form.elements.password

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();


    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }

    const userData = {
        email: email.value,
        password: password.value
    }

    console.log(userData);

    event.currentTarget.reset();
}
