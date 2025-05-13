document.addEventListener('DOMContentLoaded', function() {
    const infoItems = document.querySelectorAll('.info-item');
    
    infoItems.forEach(item => {
        const header = item.querySelector('.info-header');
        
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});