const socket = new WebSocket("ws://localhost:8080");

var button = document.querySelector("button");
var _name = prompt("Enter chat name");
var id = 123;

const StyleMyMessages = () => {
    let msgs = document.querySelectorAll(`.id-${id}`);
    console.log("StyleMyMessages -> _name", _name);
    msgs.forEach(msg => {
        if (_name === "Mario") {
            var _msg = document.querySelector(".name");
            console.log("StyleMyMessages -> _msg", _msg);
            if (_msg.innerHTML === "Mario") {
                msg.classList.add("my-message");
            } else {
                msg.classList.remove("my-message");
            }
        }
    });
}

socket.onopen = (event) => {
    console.log("Socket connection succesfully established.");
};

socket.onerror = (error) => {
    console.error("There was an error with your connection => ", error);
};

socket.onclose = (event) => {
    console.log("Socket connection was closed.");
};

socket.onmessage = (message) => {
    const container = document.querySelector(".messages");
    container.innerHTML += message.data;
    StyleMyMessages();
};

button.addEventListener("click", () => {
    var value = document.querySelector("input").value;
    const finalData =
        `<div class="single-message id-${id}">
        <h2 class="name">${_name}</h2>
        <p class="message">${value}</p>
    </div>`;
    socket.send(finalData);
    value = "";
});