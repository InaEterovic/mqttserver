
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.2.133');//tu ip aqui
client.on('connect', function () {
setInterval(function() {
client.publish('ledState', 'on');
console.log('Message Sent');
}, 5000);
});