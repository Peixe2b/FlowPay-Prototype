
const firstForm = document.getElementById("queue-form");

firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "./views/shop-page.html";
});
