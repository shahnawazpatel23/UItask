document.addEventListener('DOMContentLoaded', function() {
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });


    const menuToggle = document.querySelector('.menu-toggle');
    const navRight = document.querySelector('.nav-right');
    
    menuToggle.addEventListener('click', () => {
        navRight.classList.toggle('active');
    });

   
    document.addEventListener('click', (e) => {
        if (!navRight.contains(e.target) && !menuToggle.contains(e.target)) {
            navRight.classList.remove('active');
        }
    });

   
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navRight.classList.remove('active');
        }
    });
});