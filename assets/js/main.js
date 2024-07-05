$(document).ready(function () {
    $(window).on('resize', function () {
        wrapperDistance()
    })
})

function wrapperDistance() {
    let distance = $('.wrapper').offset().left

    $('.wrapper-left').each(function () {
        $(this).css({ 'padding-left': distance + 'px' })
    })
    $('.wrapper-right').each(function () {
        $(this).css({ 'padding-right': distance + 'px' })
    })

    $('.wrapper-full').each(function () {
        $(this).css({ 'padding': '0 ' + distance + 'px' })
    })
}