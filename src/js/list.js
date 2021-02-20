function f() {
    function knowMore(e) {
        $(e).hover(function () {
            $(this).css('border-color','#33AAB3')
            $(this).children('p').css('color','#33AAB3')
            $(this).children('i').css('color','#33AAB3')
            $(this).children('.icon-jiantou').css('transform','translateX(10px)')
        },function () {
            $(this).css('border-color','#000000')
            $(this).children('p').css('color','#000000')
            $(this).children('.icon-jiantou').css('transform','translateX(0)')
            $(this).children('i').css('color','#000000')
        })
    }
    knowMore($('.moreBox'))
}
if (window.attachEvents) {
    window.attachEvents("load", f, false);
} else {
    window.addEventListener("load", f);
}