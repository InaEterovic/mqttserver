var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.2.136')
client.on('connect', function () {
    client.subscribe('ledState')
})
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
})