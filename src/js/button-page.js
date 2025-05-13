document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.button[shop-page]');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const shopPage = this.getAttribute('shop-page');
            window.location.href = shopPage;
        });
    });
});