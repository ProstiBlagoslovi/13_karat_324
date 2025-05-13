document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
    const fullscreenImage = document.querySelector('.fullscreen-image');
    const closeFullscreen = document.querySelector('.close-fullscreen');
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');
    
    let currentImageIndex = 0;
    const images = Array.from(thumbnails).map(thumb => thumb.dataset.full);
    
    // Переключение миниатюр
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            // Обновляем основное изображение
            const newSrc = this.dataset.full;
            mainImage.src = newSrc;
            
            // Обновляем активную миниатюру
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            currentImageIndex = index;
        });
    });
    
    // Открытие полноэкранного просмотра
    mainImage.addEventListener('click', function() {
        fullscreenImage.src = this.src;
        fullscreenOverlay.style.display = 'flex';
    });
    
    // Закрытие полноэкранного просмотра
    closeFullscreen.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'none';
    });
    
    // Навигация в полноэкранном режиме
    prevArrow.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateFullscreenImage();
    });
    
    nextArrow.addEventListener('click', function(e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateFullscreenImage();
    });
    
    // Обновление полноэкранного изображения
    function updateFullscreenImage() {
        fullscreenImage.src = images[currentImageIndex];
        
        // Обновляем активную миниатюру
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[currentImageIndex].classList.add('active');
        
        // Обновляем основное изображение
        mainImage.src = images[currentImageIndex];
    }
    
    // Закрытие по клику вне изображения
    fullscreenOverlay.addEventListener('click', function(e) {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.style.display = 'none';
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fullscreenOverlay.style.display = 'none';
        }
    });
});