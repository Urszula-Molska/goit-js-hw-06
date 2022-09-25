/*const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const userEmail = form.elements.email.value;
  const userPassword = form.elements.password.value;

  if (userEmail === '' || userPassword === '') {
    return alert('Please fill in all the fields!');
  } else {
    const userData = { email: userEmail, password: userPassword };

    console.log(userData);

    event.currentTarget.reset();
  }
}*/

const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    const userData = { email: email.value, password: password.value };

    console.log(userData);

    event.currentTarget.reset();
  }
}
