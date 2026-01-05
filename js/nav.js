document.addEventListener('DOMContentLoaded', function() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const staticNav = document.querySelector('.nav-main');
    
    if (navbarPlaceholder) {
        const basePath = '/Responsive--Producto-C9200L-24P-4G-E/';
        const navbarPath = basePath + 'components/navbar.html';
        
        fetch(navbarPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                navbarPlaceholder.insertAdjacentHTML('afterend', data);
                if (staticNav) {
                    staticNav.style.display = 'none';
                }
                initializeNavbar();
                initializeMobileMenu();
                initializeSearchModal();
                addDynamicStyles(basePath);
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
                if (staticNav) {
                    staticNav.style.display = 'block';
                }
            });
    }
});

function initializeNavbar() {
    // Menú hamburguesa (versión simplificada que será reemplazada por initializeMobileMenu)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        const icon = mobileMenuButton.querySelector('i');
        mobileMenuButton.addEventListener('click', function() {
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
}

function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        if (menuOverlay) {
            menuOverlay.classList.add('show');
        }
        document.body.style.overflow = 'hidden';
        
        // Cambiar ícono
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMobileMenu);
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        if (menuOverlay) {
            menuOverlay.classList.remove('show');
        }
        document.body.style.overflow = '';
        
        // Cambiar ícono
        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

function initializeSearchModal() {
    const searchModal = document.getElementById('search-modal');
    const searchButton = document.getElementById('search-button');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const closeSearch = document.getElementById('close-search');

    function openSearchModal() {
        if (searchModal) {
            searchModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeSearchModal() {
        if (searchModal) {
            searchModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    if (searchButton) searchButton.addEventListener('click', openSearchModal);
    if (mobileSearchButton) mobileSearchButton.addEventListener('click', openSearchModal);
    if (closeSearch) closeSearch.addEventListener('click', closeSearchModal);

    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                closeSearchModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal && searchModal.classList.contains('show')) {
            closeSearchModal();
        }
    });
}

function addDynamicStyles(basePath) {
    const existingLink = document.querySelector('link[href*="navbar.css"]');
    if (existingLink) return;
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = basePath + 'css/navbar.css';
    document.head.appendChild(link);
}

