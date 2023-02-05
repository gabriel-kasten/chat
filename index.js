const input_messsage_field = document.querySelector('#input_messsage_field')
const send_message_button = document.querySelector('#send_message_button');

send_message_button.addEventListener("click", sendMessage);
input_messsage_field.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
})

function sendMessage() {
  var content = input_messsage_field.value;
  content.value = "";

  var time = new Date();
  var formatedTime = `Hoje - ${time.getHours()}:${time.getMinutes()} `;

  let message = `<div class="message you">
                  <div class="top">${formatedTime}</div>
                  <div class="body">${content}</div>
                </div>`
  const messages = document.querySelector(".messages");

  messages.lastElementChild.insertAdjacentHTML('afterend', message);
  messages.lastElementChild.scrollIntoView();

  console.log(messages);
}