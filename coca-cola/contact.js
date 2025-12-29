   // Scroll to top functionality
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');
        const navLinks = mainNav.querySelectorAll('a');
        
        menuToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
            menuToggle.innerHTML = mainNav.style.display === 'flex' ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    mainNav.style.display = 'none';
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Responsive navigation
        function handleResponsiveNav() {
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
                mainNav.style.display = 'none';
                mainNav.style.flexDirection = 'column';
                mainNav.style.position = 'absolute';
                mainNav.style.top = '100%';
                mainNav.style.left = '0';
                mainNav.style.right = '0';
                mainNav.style.background = 'white';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                mainNav.style.zIndex = '999';
            } else {
                menuToggle.style.display = 'none';
                mainNav.style.display = 'flex';
                mainNav.style.flexDirection = 'row';
                mainNav.style.position = 'static';
                mainNav.style.background = 'transparent';
                mainNav.style.padding = '0';
                mainNav.style.boxShadow = 'none';
            }
        }
        
        // Initial call and resize listener
        handleResponsiveNav();
        window.addEventListener('resize', handleResponsiveNav);
        
        // Dropdown functionality
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                if (window.innerWidth > 768) {
                    dropdown.querySelector('.dropdown-menu').style.maxHeight = '200px';
                    dropdown.querySelector('.dropdown-menu').style.opacity = '1';
                }
            });
            
            dropdown.addEventListener('mouseleave', () => {
                if (window.innerWidth > 768) {
                    dropdown.querySelector('.dropdown-menu').style.maxHeight = '0';
                    dropdown.querySelector('.dropdown-menu').style.opacity = '0';
                }
            });
            
            // Touch support for mobile
            dropdown.querySelector('a').addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const menu = dropdown.querySelector('.dropdown-menu');
                    const isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';
                    
                    if (isOpen) {
                        menu.style.maxHeight = '0';
                        menu.style.opacity = '0';
                    } else {
                        menu.style.maxHeight = menu.scrollHeight + 'px';
                        menu.style.opacity = '1';
                    }
                }
            });
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#scrollToTop') return;
                
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Add loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            setTimeout(() => {
                document.querySelector('.container1').style.opacity = '1';
                document.querySelector('.container1').style.transform = 'translateY(0)';
            }, 100);
        });