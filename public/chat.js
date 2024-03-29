const socket = io.connect('http://localhost:3000');
// const socket = io.connect(`${window.location.hostname}`);

/* buttons and inputs */
const chatroom = document.getElementById('chatroom');
const message = document.getElementById('message');
const sendMessage = document.getElementById('send_message');
const username = document.getElementById('username');
const sendUsername = document.getElementById('send_username');

/* listen on new_message */
socket.on('new_message', (data) => {
  console.log(data);
  chatroom.insertAdjacentHTML(
    'beforeend',
    `<p>${data.username}: ${data.message}</p>`,
  );

  // keep focus scrolled to bottom for new chats
  chatroom.scrollTop = chatroom.scrollHeight;
});

/* Emit message */
sendMessage.addEventListener('click', (event) => {
  event.preventDefault();
  socket.emit('new_message', { message: message.value });
  message.value = '';
});

/* Emit a username */
sendUsername.addEventListener('click', () => {
  socket.emit('change_username', { username: username.value });
  alert(`Username changed to ${username.value}`);
});
