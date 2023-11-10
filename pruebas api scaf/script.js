document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("clase-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Recopila los datos del formulario
        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Envía los datos al servidor (puedes usar fetch o AJAX)
        console.log("Datos a enviar al servidor:", jsonData);

        // Aquí puedes realizar una solicitud POST a tu API para guardar la clase
        // Ejemplo usando fetch:
        fetch('https://seashell-app-9tksw.ondigitalocean.app/cronograma/Clase/', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito o error.
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
    });
});
