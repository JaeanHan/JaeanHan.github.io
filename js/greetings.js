const loginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");
// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}