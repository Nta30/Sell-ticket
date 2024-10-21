const openSidebar = document.querySelector('.js-open-sidebar-btn');
const closeSidebar = document.querySelector('.js-close-sidebar-btn');
const sidebarContainer = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');

openSidebar.addEventListener('click', () => {
    sidebarContainer.classList.add("show");
    sidebarContainer.classList.remove("hidden");
    openSidebar.classList.add("hidden");
});

closeSidebar.addEventListener('click', () => {
    sidebarContainer.classList.remove("show");
    sidebarContainer.classList.add("hidden");
    openSidebar.classList.remove("hidden");
});

sidebarContainer.addEventListener('click', () => {
    sidebarContainer.classList.remove("show");
    sidebarContainer.classList.add("hidden");
    openSidebar.classList.remove("hidden");
});

sidebar.addEventListener('click', function (event) {
    event.stopPropagation();
});