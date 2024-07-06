window.addEventListener('load', function() {
    header()
})

function header() {
    let header = document.querySelector('.header')
    let headerTop = document.querySelector('.header__top')
    let menu = document.querySelector('.header__menu')
    headerTop.style.height = headerTop.clientHeight + 'px'

    window.addEventListener('scroll', function() {
        let menuOffset = menu.offsetTop;
        if (window.scrollY >= menuOffset) {
            header.classList.add('header--fixed')
        } else {
            header.classList.remove('header--fixed')
        }
    })

    // Header not in frontpage
    if(!document.querySelector('.banner')) {
        header.classList.add('header--static')
        document.querySelector('main').style.marginTop = header.clientHeight + 'px'
    }
}