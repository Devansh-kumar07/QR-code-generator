const qrinput = document.getElementById('qr-input');
const qrbutton = document.getElementById('qr-button');
const qrimg = document.getElementById('qr-img');

qrbutton.addEventListener('click', () => {
    const inputValue = qrinput.value.trim();
    if (!inputValue) {
        alert('Please enter a valid URL or text!');
        return;
    }
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    qrimg.alt = `QR code for ${inputValue}`;
});
