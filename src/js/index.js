let chooseType = $('.machineTop>div:first-child')
let techService = $('.machineTop>div:last-child')
let threeItemTitle = $('.indexBotActTitle')
let botLine = $(".botLine")
let indexBottomBot = $(".indexBottomBot")
let botArticleBoth = $(".botArticleBoth")
let articleBig = $(".articleBig")
let articleSmall = $(".articleSmall")

function f() {
    new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
        autoplay:2000,
        speed:2000,
        loop:true
    })
    // 首页 我要选型和技术服务tab切换
    chooseType.click(function () {
        $('.chooseType').css("display", "flex")
        $('.techService').css("display", "none")
        $(this).addClass("chooseTipAct")
        techService.removeClass("chooseTipAct")
    })
    techService.click(function () {
        $('.chooseType').css("display", "none")
        $('.techService').css("display", "flex")
        $(this).addClass("chooseTipAct")
        chooseType.removeClass("chooseTipAct")
    })

    // 首页 直播资讯展会tab切换
    for (let i = 0; i < threeItemTitle.length; i++) {
        threeItemTitle[i].index = i
        $(threeItemTitle[i]).click(function () {
            for (let j = 0; j < threeItemTitle.length; j++) {
                botLine[j].index = j
                $(botLine[j]).removeClass('botLineAct')
                $(indexBottomBot[j]).addClass('hide')

            }
            for (let k = 0; k < botArticleBoth.length; k++) {
                $(articleBig[k]).addClass('hide')
                $(articleSmall[k]).removeClass('hide')
            }
            $(botLine[i]).addClass('botLineAct')
            $(indexBottomBot[i]).removeClass('hide')
            $(articleBig[i * 3]).removeClass('hide')
            $(articleSmall[i * 3]).addClass('hide')

        })
    }
    // 首页底部文章展示切换
    for (let i = 0; i < botArticleBoth.length; i++) {
        $(botArticleBoth[i]).hover(function () {
            setTimeout(function () {
                for (let j = 0; j < botArticleBoth.length; j++) {
                    $(articleBig[j]).addClass('hide')
                    $(articleSmall[j]).removeClass('hide')
                }
                $(articleBig[i]).removeClass('hide')
                $(articleSmall[i]).addClass('hide')
            },)

        })
    }

}

if (window.attachEvents) {
    window.attachEvents("load", f, false);
    window.attachEvents("resize", f, false);
} else {
    window.addEventListener("load", f);
    window.addEventListener("resize", f);
}