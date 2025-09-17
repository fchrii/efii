const loginfrom = document.getElementById("login-form");
const loginsubmit = document.getElementById("login-submit");
const loginmsg = document.getElementById("login-error");

loginsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginfrom.username.value;
    const password = loginfrom.password.value;

    if (username === "epoyy" && password === "2234478"){
        alert("kamu telah sukses login");
        location.reload();
    } else {
        loginmsg.style.opacity = 1;
    }

})
