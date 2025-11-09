// Sidebar menu toggle
const menuBtn = document.getElementById('menu-btn');
const sidebarMenu = document.getElementById('sidebar-menu');

menuBtn.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
});

const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
    sidebarMenu.classList.remove('active');
});