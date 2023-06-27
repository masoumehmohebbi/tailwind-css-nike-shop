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

// Mobile Footer
const bottonNav = document.querySelector('#bottom-navigation');

    for (let i = 0; i < bottonNav.children.length; i++) {
        bottonNav.children[i].addEventListener('click', function (e) {
            for (const tab of bottonNav.children) {
              tab.children[0].children[1].style.display = 'none';
              tab.children[0].children[0].classList.add('text-gray-400');
        }
        this.children[0].children[1].style.display = 'block';
        this.children[0].children[0].classList.remove('text-gray-400');
    });
}