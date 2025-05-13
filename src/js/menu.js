document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation(); 
        this.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            menuIcon.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});