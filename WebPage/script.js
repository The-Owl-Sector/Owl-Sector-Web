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
