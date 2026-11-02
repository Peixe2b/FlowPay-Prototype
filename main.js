const firstForm = document.getElementById("queue-form");
const cpfInput = document.getElementById("cpf-input");
const submitButton = firstForm.querySelector('button[type="submit"]');

function isValidCPFFormat(value) {
    const digits = value.replace(/\D/g, "");

    if (
        !/^[\d.\-\s]+$/.test(value)
        || digits.length !== 11
        || /^(\d)\1{10}$/.test(digits)
    ) {
        return false;
    }

    const numbers = [...digits].map(Number);
    const calculateCheckDigit = (values, factor) => {
        const sum = values.reduce(
            (total, number, index) => total + number * (factor - index),
            0
        );
        const remainder = (sum * 10) % 11;
        return remainder === 10 ? 0 : remainder;
    };

    return numbers[9] === calculateCheckDigit(numbers.slice(0, 9), 10)
        && numbers[10] === calculateCheckDigit(numbers.slice(0, 10), 11);
}

async function validateCPFWithAPI(cpf) {

    const response = await fetch(
        `https://api.cpfhub.io/cpf/${encodeURIComponent(cpf)}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "x-api-key": "6caa36dd0fad7e58d8b63200b4c516e7278284f6d0260ab83b9c1a89d070d96d"
            }
        }
    );

    if ([400, 404, 422].includes(response.status)) {
        return false;
    }

    if (!response.ok) {
        throw new Error(`A API de CPF respondeu com o status ${response.status}.`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
        let result;
        try {
            result = await response.json();
        } catch {
            throw new Error("A API de CPF retornou uma resposta inválida.");
        }

        if (result && typeof result === "object") {
            if ("valid" in result || "isValid" in result) {
                const validity = result.valid ?? result.isValid;
                if (typeof validity !== "boolean") {
                    throw new Error("A API de CPF retornou um formato inesperado.");
                }
                return validity;
            }
        }
    }

    return true;
}

cpfInput.addEventListener("input", () => {
    cpfInput.setCustomValidity("");
});

firstForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    cpfInput.setCustomValidity("");

    const cpf = cpfInput.value.trim();
    if (!isValidCPFFormat(cpf)) {
        cpfInput.setCustomValidity("Informe um CPF válido.");
        cpfInput.reportValidity();
        return;
    }

    submitButton.disabled = true;

    try {
        if (await validateCPFWithAPI(cpf.replace(/\D/g, ""))) {
            window.location.assign("./views/shop-page.html");
            return;
        }

        cpfInput.setCustomValidity("A API não validou este CPF.");
        cpfInput.reportValidity();
    } catch (error) {
        console.error("Falha ao validar CPF com a API:", error);
        cpfInput.setCustomValidity(
            error instanceof TypeError
                ? "Não foi possível conectar à API. Tente novamente."
                : error.message
        );
        cpfInput.reportValidity();
    } finally {
        submitButton.disabled = false;
    }
});
