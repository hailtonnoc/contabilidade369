document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu > span');
    const menuContent = document.querySelector('.menuContent');
    
    menuButton.addEventListener('click', function() {
        menuContent.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu')) {
            menuContent.classList.remove('show');
        }
    });
});