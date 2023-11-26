const menu = document.getElementsByClassName('menu')[0];
const btnClose = document.getElementsByClassName('menu__closing')[0];
const btnBurger = document.getElementsByClassName('header__burger')[0];

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