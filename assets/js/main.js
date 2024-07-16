document.addEventListener("DOMContentLoaded", function () {
    const ticketForm = document.getElementById("ticketForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const confirmationDetails = document.getElementById("confirmationDetails");
    const closeMessageButton = document.getElementById("closeMessageButton");

    if (ticketForm) {
        ticketForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Запобігає відправці форми

            // Отримуємо значення з форми
            const from = document.getElementById("from").value;
            const to = document.getElementById("to").value;
            const date = document.getElementById("date").value;
            const ticketClass = document.getElementById("class").value;

            // Перевіряємо чи всі поля заповнені
            if (!from || !to || !date || !ticketClass) {
                alert("Будь ласка, заповніть всі поля форми.");
                return;
            }

            // Створюємо повідомлення про успішне заповнення форми
            const confirmationText = `
                Ви успішно заповнили форму!
                <br>Від: ${from}
                <br>До: ${to}
                <br>Дата: ${date}
                <br>Клас: ${ticketClass}
            `;

            // Відображаємо повідомлення
            confirmationDetails.innerHTML = confirmationText;
            confirmationMessage.classList.remove("hidden");
        });
    }

    if (closeMessageButton) {
        closeMessageButton.addEventListener("click", function () {
            confirmationMessage.classList.add("hidden");
        });
    }
});



