const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('A new client has connected');

    socket.on('message', (message) => {
        const textMessage = message instanceof Buffer ? message.toString() : message;
        console.log(`Received: ${textMessage}`);

        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(textMessage);
            }
        });
    });

    socket.on('close', () => {
        console.log('A client has disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
