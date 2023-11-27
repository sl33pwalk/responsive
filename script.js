const menu = document.querySelector('.menu');
const btnClose = document.querySelector('.menu__closing');
const btnBurger = document.querySelector('.header__burger');

if (menu) {
    menu.style.display = 'none';
}

document.addEventListener("click", ({target}) => {
    
    switch (target) {
        case btnClose:
            if (menu) {
                menu.style.display = 'none';
            }
            return;
        case btnBurger:
            if (menu) {
                menu.style.display = 'flex';
            }
            return;
    }
})

function autoGrow(element) {
    element.style.height = (element.scrollHeight) + "px";
}