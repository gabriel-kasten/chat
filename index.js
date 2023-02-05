const messageArea = document.querySelector('#messages');

const messages = document.querySelectorAll('.message');

const input_field = document.querySelector('#input_field');
const send_message = document.querySelector('#send_message');

send_message.addEventListener("click", sendMessage);
input_field.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
})

function sendMessage() {
  var content = input_field.value;
  input_field.value = "";

  var time = new Date();

  var formatedTime = `Hoje - ${time.getHours()}:${time.getMinutes()} `;
  var message = `<div class="message you"><div class="send">${formatedTime}</div><div class="body">${content}</div></div>`

  messages[messages.length - 1].insertAdjacentHTML('beforeend', message);

  scrollBottom();
}