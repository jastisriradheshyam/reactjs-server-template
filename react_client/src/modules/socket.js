import socketIOClient from "socket.io-client";
import config from '../config/config.json'

var socket

function registerEvents(socket) {
    socket.on('notification', function (data) {
        console.log("data here=>", data)
    })
}

export function initSocket(token) {
    return new Promise((resolve, reject) => {
        socket = socketIOClient(config.socketEndPoint + "?token=" + token);
        socket.on('connect', function () {
            console.log("Socket connection done---  :)")
        });
        // registerEvents(socket);
        resolve(socket);
    })
}

export function getSocket() {
    return socket
}
