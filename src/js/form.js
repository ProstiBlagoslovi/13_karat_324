document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.but-order');
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.close');
    const productTitle = document.getElementById('modalProductTitle');
    const orderForm = document.getElementById('orderForm');
    
    if (orderButton && modal) {
        orderButton.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = document.querySelector('.text-name').textContent;
            productTitle.textContent = productName;
            modal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                product: productTitle.textContent,
                productId: document.getElementById('productId').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value
            };
            
            console.log('Данные заказа:', formData);
            alert('Ваш заказ принят! Мы свяжемся с вами для подтверждения.');
            
            modal.style.display = 'none';
            orderForm.reset();
        });
    }
});