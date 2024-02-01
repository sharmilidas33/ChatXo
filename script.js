document.getElementById('sendMessage').addEventListener('click', function() {
    var messageInput = document.getElementById('messageInput');
    if (messageInput) {
        var message = messageInput.value;

        if (message.trim() !== '') {
            var messageContainer = document.createElement('div');
            messageContainer.className = 'flex items-start justify-end mb-2';

            var messageDiv = document.createElement('div');
            messageDiv.innerHTML = `
                <p class="text-white">Sweta</p>
                <div class="bg-green-200 text-green-800 rounded-lg p-2">
                    <p>${message}</p>
                    <p class="text-xs text-gray-500">${formatAMPM(new Date())}</p>
                </div>
            `;
            messageContainer.appendChild(messageDiv);

            var userImage = document.createElement('img');
            userImage.src = 'UserB.jpg'; 
            userImage.alt = 'User B';
            userImage.className = 'w-8 h-8 rounded-full mr-4';
            messageContainer.appendChild(userImage);
            messageContainer.style.marginTop = '-60px';

            document.querySelector('.messages-container').appendChild(messageContainer);

            messageInput.value = '';
            alert("Message sent!");
        }
    } else {
        console.error("Message input element not found");
    }
});

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}