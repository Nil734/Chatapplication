// // Establish WebSocket connection (assuming WebSocket server is running on ws://localhost:8080)
// const socket = new WebSocket('ws://localhost:8080');

// // Elements
// const chatBox = document.getElementById('chat-box');
// const chatInput = document.getElementById('chat-input');
// const sendButton = document.getElementById('send-button');

// // Send message when the button is clicked
// sendButton.addEventListener('click', () => {
//     const message = chatInput.value;
//     if (message) {
//         socket.send(message); // Send message to WebSocket server
//         displayMessage(message, 'you'); // Display the message in the chat box
//         chatInput.value = ''; // Clear input field
//     }
// });

// // Receive message from the WebSocket server
// socket.addEventListener('message', (event) => {
//     displayMessage(event.data, 'other');
// });

// // Function to display message in the chat box
// function displayMessage(message, sender) {
//     const messageDiv = document.createElement('div');
//     messageDiv.classList.add('message', sender);
//     messageDiv.textContent = message;
//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
// }


const socket = new WebSocket('ws://localhost:8080');

const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = chatInput.value;
    if (message) {
        socket.send(message);
        displayMessage(message, 'you');
        chatInput.value = '';
    }
});

socket.addEventListener('message', (event) => {
    displayMessage(event.data, 'other');
});

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
