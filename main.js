
const firstForm = document.getElementById("queue-form");
const cpfInput = document.getElementById("cpf-input");

function validateCPF(cpf) { 
    console.log(`Validation CPF ${cpf}`);
    return true; // Placeholder for actual validation logic
}

firstForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cpf = cpfInput.value;

    if(validateCPF(cpf)) { // Call the validation function    
        window.location.href = "./views/shop-page.html";
    } else {
        console.log("Invalid CPF");
    }
});
