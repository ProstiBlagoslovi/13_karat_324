document.addEventListener('DOMContentLoaded', function() {
    const ticketButtons = document.querySelectorAll('.button');
    const modal = document.getElementById('ticketModal');
    const closeBtn = document.querySelector('.close');
    const ticketTitle = document.getElementById('modalTicketTitle');
    const ticketForm = document.getElementById('ticketForm');
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const ticketsInput = document.getElementById('tickets');

    function updateCounter() {
        const value = parseInt(ticketsInput.value);
        decrementBtn.disabled = value <= 1;
        incrementBtn.disabled = value >= 10;
    }
    
    decrementBtn.addEventListener('click', () => {
        const currentValue = parseInt(ticketsInput.value);
        if (currentValue > 1) {
            ticketsInput.value = currentValue - 1;
            updateCounter();
        }
    });
    
    incrementBtn.addEventListener('click', () => {
        const currentValue = parseInt(ticketsInput.value);
        if (currentValue < 10) {
            ticketsInput.value = currentValue + 1;
            updateCounter();
        }
    });
    
    updateCounter();

    ticketButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const ticketBlock = this.closest('.ticket1');
            const date = ticketBlock.querySelector('.ticketText1').textContent;
            const city = ticketBlock.querySelector('.ticketText2').textContent;
            const place = ticketBlock.querySelector('.ticketText3').textContent;
            
            ticketTitle.textContent = `${date} | ${city} | ${place}`;
            modal.style.display = 'block';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }


    if (ticketForm) {
        ticketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                concert: ticketTitle.textContent,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                tickets: document.getElementById('tickets').value
            };
            
            console.log('Данные заказа билетов:', formData);
            alert('Ваш заказ билетов принят! Мы свяжемся с вами для подтверждения.');
            
            modal.style.display = 'none';
            ticketForm.reset();
        });
    }
});