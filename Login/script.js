const form = document.getElementById('login');
form.addEventListener("submit",(event) => {
    event.preventDefault();
    console.log("submit",event)
    const email = document.getElementById('#email').value
    const password = document.getElementById('#password').value
    console.log(email)
    console.log(password)})