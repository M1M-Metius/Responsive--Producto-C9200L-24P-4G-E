// Función para cambiar de imagen principal
function toExchangeImage(imgElement) {
    const mainImg = document.getElementById('img_main');
    if (mainImg && imgElement) {
        mainImg.src = imgElement.src;
    }
}

// Función para ver imagen en modal
function viewImage(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Cambio de pestañas (Producto/Imágenes)
document.addEventListener('DOMContentLoaded', function() {
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const informationSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    if (productTab && imagesTab && informationSection && imagesSection) {
        // Pestaña Producto
        productTab.addEventListener('click', function() {
            informationSection.classList.remove('hidden');
            imagesSection.classList.add('hidden');
            
            productTab.classList.add('tab-active');
            imagesTab.classList.remove('tab-active');
        });

        // Pestaña Imágenes
        imagesTab.addEventListener('click', function() {
            informationSection.classList.add('hidden');
            imagesSection.classList.remove('hidden');
            
            imagesTab.classList.add('tab-active');
            productTab.classList.remove('tab-active');
        });
    }

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Cerrar modal al hacer clic fuera de la imagen
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});

