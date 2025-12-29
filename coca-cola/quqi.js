   // ელემენტების მითითება
        const cookieModal = document.getElementById('cookieModal');
        const cookieOverlay = document.getElementById('cookieOverlay');
        const closeModalBtn = document.getElementById('closeModal');
        
        // ტექსტი რომელზეც ვაჭერთ - შეგიძლიათ რამდენიმე დამატება
        const openCookieSettings = document.getElementById('openCookieSettings');
        const openCookieSettings2 = document.getElementById('openCookieSettings2');
        const cookieLink = document.querySelector('a[href="#cookie-settings"]');
        
        // ქუქი პარამეტრები
        const functionalCookies = document.getElementById('functionalCookies');
        const analyticsCookies = document.getElementById('analyticsCookies');
        const marketingCookies = document.getElementById('marketingCookies');
        
        // ღილაკები
        const saveCookieSettings = document.getElementById('saveCookieSettings');
        const acceptAllCookies = document.getElementById('acceptAllCookies');
        const rejectAllCookies = document.getElementById('rejectAllCookies');

        // ფანჯრის გახსნის ფუნქცია
        function openCookieModal() {
            cookieModal.classList.add('active');
            cookieOverlay.classList.add('active');
            document.body.classList.add('modal-open');
        }

        // ფანჯრის დახურვის ფუნქცია
        function closeCookieModal() {
            cookieModal.classList.remove('active');
            cookieOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }

        // ტექსტზე დაჭერის მოსმენა
        if (openCookieSettings) {
            openCookieSettings.addEventListener('click', openCookieModal);
        }
        
        if (openCookieSettings2) {
            openCookieSettings2.addEventListener('click', openCookieModal);
        }
        
        if (cookieLink) {
            cookieLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCookieModal();
            });
        }

        // დახურვა
        closeModalBtn.addEventListener('click', closeCookieModal);
        cookieOverlay.addEventListener('click', closeCookieModal);

        // ESC ღილაკით დახურვა
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cookieModal.classList.contains('active')) {
                closeCookieModal();
            }
        });

        // ქუქი პარამეტრების შენახვა
        saveCookieSettings.addEventListener('click', function() {
            const cookieSettings = {
                functional: functionalCookies.checked,
                analytics: analyticsCookies.checked,
                marketing: marketingCookies.checked,
                date: new Date().toISOString()
            };
            
            // შენახვა localStorage-ში
            localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
            
            // შეტყობინება
            alert('ქუქი პარამეტრები შენახულია!');
            
            closeCookieModal();
        });

        // ყველას მიღება
        acceptAllCookies.addEventListener('click', function() {
            functionalCookies.checked = true;
            analyticsCookies.checked = true;
            marketingCookies.checked = true;
            
            const cookieSettings = {
                functional: true,
                analytics: true,
                marketing: true,
                date: new Date().toISOString()
            };
            
            localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
            alert('ყველა ქუქი ფაილი მიღებულია!');
            closeCookieModal();
        });

        // ყველას უარყოფა
        rejectAllCookies.addEventListener('click', function() {
            functionalCookies.checked = false;
            analyticsCookies.checked = false;
            marketingCookies.checked = false;
            
            const cookieSettings = {
                functional: false,
                analytics: false,
                marketing: false,
                date: new Date().toISOString()
            };
            
            localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
            alert('ყველა ქუქი ფაილი უარყოფილია!');
            closeCookieModal();
        });

        // URL ფრაგმენტის შემოწმება
        window.addEventListener('hashchange', function() {
            if (window.location.hash === '#cookie-settings') {
                openCookieModal();
            }
        });

        // თუ გვერდი უკვე ჩაიტვირთა ფრაგმენტით
        if (window.location.hash === '#cookie-settings') {
            setTimeout(openCookieModal, 500);
        }