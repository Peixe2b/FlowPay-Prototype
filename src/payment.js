import QRCode from 'qrcode';

const qrCanvas = document.getElementById('payment-qr');
const paymentStatus = document.getElementById('payment-status');
const finishButton = document.getElementById('finish-purchase');
const finishStatus = document.getElementById('finish-status');
const demoPayload = 'FLOWPAY-DEMO-PIX-NOT-A-REAL-PAYMENT';

QRCode.toCanvas(qrCanvas, demoPayload, {
    width: 256,
    margin: 2,
    color: {
        dark: '#1f2234',
        light: '#ffffff'
    }
}).then(() => {
    paymentStatus.textContent = 'QR Code de demonstração pronto.';
}).catch((error) => {
    console.error('Não foi possível gerar o QR Code:', error);
    paymentStatus.textContent = 'Não foi possível gerar o QR Code. Atualize a página para tentar novamente.';
});

finishButton.addEventListener('click', () => {
    finishStatus.textContent = 'Finalização simulada. Nenhum pagamento foi processado.';
    finishButton.disabled = true;
});
