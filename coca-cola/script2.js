document.addEventListener('DOMContentLoaded', function() {
    // მობილური მენიუს ფუნქციონალი
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // ფოტოების გალერეის ფუნქციონალი
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.src;
            const imgAlt = this.alt;
            
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <p>${imgAlt}</p>
                </div>
            `;
            
            modal.style.display = 'flex';
            
            document.querySelector('.close').addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});




// ჰედერის ლინკებზე ჩამოსქროლვის დაყენება
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            smoothScroll(targetSection, 1000); // 1500ms = 1.5 წამი ნაზი სქროლი
        }
    });
});