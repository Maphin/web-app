let user1 = document.querySelector("#user1");
let user2 = document.querySelector("#user2");
let btn1 = document.querySelector("#user1-btn");
let btn2 = document.querySelector("#user2-btn");
let chat = document.querySelector("#chat-box");

const sendMessage = (user) => {
    let message = user.value;
    let div = document.createElement('div');
    div.className = `message ${user.name}`;
    div.innerHTML = `<br><b>${user.name}</b></br> ${message}`;
    chat.appendChild(div);
}

btn1.addEventListener('click', () => {
    if (user1.value.trim().length) {
        sendMessage(user1);
        user1.value = '';
    }
})

btn2.addEventListener('click', () => {
    if (user2.value.trim().length) {
        sendMessage(user2);
        user2.value = '';
    }
})