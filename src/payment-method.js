const paymentOptions = document.querySelectorAll('input[name="payment-method"]');
const pixOption = document.querySelector('input[name="payment-method"][value="pix"]');
const cardOption = document.querySelector('input[name="payment-method"][value="card"]');
const cashOption = document.querySelector('input[name="payment-method"][value="cash"]');
const cardDetails = document.getElementById('card-details');
const cardTypeOptions = document.querySelectorAll('input[name="card-type"]');
const installmentGroup = document.getElementById('installment-group');
const installmentsSelect = document.getElementById('installments');

paymentOptions.forEach((option) => {
    option.addEventListener('change', () => {
        cardDetails.hidden = !cardOption.checked;

        if (option === pixOption && pixOption.checked) {
            window.location.href = './pagamento.html';
        }

        if (option === cashOption && cashOption.checked) {
            window.location.href = './fila-pagamento.html';
        }
    });
});

cardTypeOptions.forEach((option) => {
    option.addEventListener('change', () => {
        const isCredit = option.value === 'credit' && option.checked;
        installmentGroup.hidden = !isCredit;

        if (!isCredit) {
            installmentsSelect.value = '';
        }
    });
});
