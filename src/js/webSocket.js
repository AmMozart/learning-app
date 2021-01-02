let socket = new WebSocket('wss://192.168.1.117/ws')

const getPackage = ({ channel, level }) => {
  return channel << 8 | level
}

const elem = document.querySelector("#range").addEventListener('input', (event) => {
  let level = event.target.value
  console.log(level)
  socket.send(getPackage({ channel: 1, level }))

})

socket.onopen = function (e) {
  console.log("Соединение установлено");
  console.log("Отправляем данные на сервер");
  // socket.send(getPackage({ channel: 1, level: 150 }));
};
socket.onmessage = function (event) {
  console.log(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    console.log('[close] Соединение прервано');
  }
};

socket.onerror = function (error) {
  console.log(`[error] ${error.message}`);
};

