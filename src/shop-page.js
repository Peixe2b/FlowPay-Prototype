
const app = document.getElementById('app');

function generateHTML() { 
    return  `
        <main class="shop-page">
            <header class="shop-header">
                <h1 class="queue-number">
                    <span>Seu número de<br>atendimento é:</span>
                    <span class="queue-number__value">1</span>
                </h1>
                <button class="cart-button" type="button" aria-label="Carrinho de compras">
                    <svg viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M3 4h3l3.2 17h16.4l3.1-12H7"></path>
                        <circle cx="12" cy="27" r="1.5"></circle>
                        <circle cx="24" cy="27" r="1.5"></circle>
                    </svg>
                </button>
            </header>

            <section class="products" aria-label="Produtos">
                <img class="product-placeholder" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f1f1f1'/%3E%3Cpath d='M100 270l75-85 55 60 40-45 80 70z' fill='%23d1d5db'/%3E%3Ccircle cx='155' cy='145' r='24' fill='%23d1d5db'/%3E%3C/svg%3E" alt="Imagem ilustrativa de produto" loading="lazy" decoding="async">
                <img class="product-placeholder" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f1f1f1'/%3E%3Cpath d='M100 270l75-85 55 60 40-45 80 70z' fill='%23d1d5db'/%3E%3Ccircle cx='155' cy='145' r='24' fill='%23d1d5db'/%3E%3C/svg%3E" alt="Imagem ilustrativa de produto" loading="lazy" decoding="async">
                <img class="product-placeholder" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f1f1f1'/%3E%3Cpath d='M100 270l75-85 55 60 40-45 80 70z' fill='%23d1d5db'/%3E%3Ccircle cx='155' cy='145' r='24' fill='%23d1d5db'/%3E%3C/svg%3E" alt="Imagem ilustrativa de produto" loading="lazy" decoding="async">
                <img class="product-placeholder" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f1f1f1'/%3E%3Cpath d='M100 270l75-85 55 60 40-45 80 70z' fill='%23d1d5db'/%3E%3Ccircle cx='155' cy='145' r='24' fill='%23d1d5db'/%3E%3C/svg%3E" alt="Imagem ilustrativa de produto" loading="lazy" decoding="async">
                <img class="product-placeholder" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f1f1f1'/%3E%3Cpath d='M100 270l75-85 55 60 40-45 80 70z' fill='%23d1d5db'/%3E%3Ccircle cx='155' cy='145' r='24' fill='%23d1d5db'/%3E%3C/svg%3E" alt="Imagem ilustrativa de produto" loading="lazy" decoding="async">
            </section>

            <footer class="shop-actions">
                <button class="checkout-button" type="button">Finalizar compra</button>
                <button class="leave-queue-button" type="button">Sair da fila</button>
            </footer>
        </main>
    `;
}

setTimeout(() => {
    app.innerHTML = generateHTML();

    app.querySelector('.checkout-button').addEventListener('click', () => {
        window.location.href = './final-page.html';
    });
}, 2000);
