// Menu
const Menu = (e) =>{
    e.name === 'menu' ? (e.name = 'close') : (e.name = 'menu');
}
const body = document.querySelector('.body');
document.querySelector('#menu').addEventListener('click', (e) => {
    Menu(e.target)
    body.classList.toggle('body-blur');
    document.querySelector('.sidebar').classList.toggle('change-sidebar');
    document.querySelector('#hamburger-icon').classList.toggle('change-hamburger-icon');
});