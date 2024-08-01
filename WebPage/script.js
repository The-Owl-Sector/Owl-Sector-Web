function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todo el contenido de las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Eliminar la clase 'active' de todos los botones de las pestañas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la pestaña actual y añadir clase 'active'
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Establecer la pestaña predeterminada
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablink').click();
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Recoger datos del formulario
        const formData = {
            name: document.getElementById('name').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Enviar email utilizando EmailJS
        emailjs.send('service_c7rml3k', 'template_qerk4n3', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('response-message').textContent = 'Mensaje enviado exitosamente.';
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('response-message').textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.';
            });
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
