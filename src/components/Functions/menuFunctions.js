export const openMenu = () => {
    document.querySelector('#menuList').style.transform = 'translateY(0)';
    document.querySelector('body').style.overflow = 'hidden';
}

export const closeMenu = () => {
    document.querySelector('#menuList').style.transform = 'translateY(-100%)';
    document.querySelector('body').style.overflow = 'visible';
}