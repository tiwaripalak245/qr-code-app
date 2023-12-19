const text = document.getElementById('text');
const btn = document.getElementById('btn');
const qrimage = document.getElementById('qrimage')
const hero = document.querySelector('hero-container')


btn.addEventListener("click", () => {
    let qrValue = text.value;
    if (!qrValue) return;
    btn.innerText = "Generating QR Code"
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
btn.innerText = "Generate QR Code"
})

