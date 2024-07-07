window.addEventListener('load', function() {
    header()

    if(document.querySelector('.colaboradores')) { colaboradores() }
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

function colaboradores() {
    let colaboradores = document.querySelectorAll('.colaboradores__item')
    let maxLength = 0
    let longestElement = null, shortestElement = null

    colaboradores.forEach(function(el, i){
        let length = el.querySelector('p').textContent.trim().length;
        if (length > maxLength) {
            maxLength = length
            longestElement = el
        } else {
            shortestElement = el
        }
    })

    let longestElementHeight = longestElement.querySelector('p').clientHeight
    let shortestElementHeight = shortestElement.querySelector('p').clientHeight

    shortestElement.querySelector('p').style.marginBottom = (longestElementHeight - shortestElementHeight) + 'px'
}