const clock = document.querySelector("#clock");

// function sayHello() {
//     console.log("hello");
// }
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuites = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `It's ${hours}:${minuites}:${seconds}`;
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);
getClock();
setInterval(getClock, 1000);
