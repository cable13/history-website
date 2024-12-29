document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var hamburgerInside = document.getElementById("hamburger-inside");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    hamburgerMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        toggleSidebar();
    });

    hamburgerInside.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        toggleSidebar();
    });

    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target) && !hamburgerInside.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
document.body.style.overflow = 'auto';