const loginBtn = document.getElementById("login-btn");

const users = [
    {userName :'user 1' , email : 'a@sample.com' , password : '123456'},
    {userName :'user 2' , email : 'b@sample.com' , password : '123456'},
    {userName :'user 3' , email : 'c@sample.com' , password : '123456'},
    {userName :'user 4' , email : 'd@sample.com' , password : '123456'},
    {userName :'user 5' , email : 'e@sample.com' , password : '123456'},

];
loginBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const pass = document.getElementById("password");

    const user = users.filter((item) => item.email === email.value);
    if (user.length != 0  && user[0].password === pass.value) {
        const message = document.querySelector('.modal-body');
        message.classList.add('text-success');
        message.innerHTML = 'login successful';
    }

    const closeBtn = document.getElementById('close');
    closeBtn.addEventListener('click' , () => {
        console.log('close btn click');
        location.replace("../index.html")
    });
});