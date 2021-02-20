let chooseType = $('.machineTop>div:first-child')
let techService = $('.machineTop>div:last-child')
let threeItemTitle = $('.indexBotActTitle')
let botLine = $(".botLine")
let indexBottomBot = $(".indexBottomBot")
let botArticleBoth = $(".botArticleBoth")
let articleBig = $(".articleBig")
let articleSmall = $(".articleSmall")
let product = $(".product>.productItem")
let productSec = $(".productSec")
let itemName = $(".product>.productItem>.itemName")
let itemDesc = $(".product>.productItem>.itemDesc>span")
//首页文章修改
let secArtTop = $('.secUl>li')
let secArtBot = $('.secBot>ul')
let asideTop = $('.asideUl>li')
let asideBot = $('.asideBot>ul')

// ------------------------------------------------------------
// $(window).scroll(function () {
//
//     $(window).scrollTop()
// })
function f() {
    // 首页 二级机器展示
    for (let i = 0; i < product.length; i++) {
        $(product[i]).hover(function () {
            for (let j = 0; j < productSec.length; j++) {
                $(itemName[j]).removeClass('itemNameAct')
                $(itemDesc[j]).removeClass('itemDescAct')
            }
            $(itemName[i]).addClass('itemNameAct')
            $(itemDesc[i]).addClass('itemDescAct')
        }, function () {
            for (let j = 0; j < productSec.length; j++) {
                $(itemName[j]).removeClass('itemNameAct')
                $(itemDesc[j]).removeClass('itemDescAct')
            }
        })
        $(product[i]).click(function () {
            for (let k = 0; k < productSec.length; k++) {
                $(productSec[k]).addClass('hide')
                $(itemName[k]).removeClass('itemNameActOne')
                $(itemDesc[k]).removeClass('itemDescActOne')
            }
            $(productSec[i]).removeClass('hide')
            let productChild = $(productSec[i]).children('.productItem')
            for (let m = 0; m < productChild.length; m++) {
                if (m % 5 === 4) {
                    $(productChild[m]).css("margin-right", "0")
                }
            }

            $(itemName[i]).addClass('itemNameActOne')
            $(itemDesc[i]).addClass('itemDescActOne')
        })

        function showSecondDiv() {
            for (let k = 0; k < productSec.length; k++) {
                $(productSec[k]).addClass('hide')
                $(itemName[k]).removeClass('itemNameActOne')
                $(itemDesc[k]).removeClass('itemDescActOne')
            }
            $(productSec[0]).removeClass('hide')
            let productChild = $(productSec[0]).children('.productItem')
            for (let m = 0; m < productChild.length; m++) {
                if (m % 5 === 4) {
                    $(productChild[m]).css("margin-right", "0")
                }
            }

            $(itemName[0]).addClass('itemNameActOne')
            $(itemDesc[0]).addClass('itemDescActOne')
        }

        showSecondDiv()
    }
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
    $('.machineBox').hover(function () {
        $('.machineBot>img:first-child').css({'left':'140px','transition':'all .8s'})
        $('.machineBot>img:last-child').css({'right':'140px','transition':'all .8s'})
    },function () {
        $('.machineBot>img:first-child').css({'left':'80px','transition':'all .8s'})
        $('.machineBot>img:last-child').css({'right':'80px','transition':'all .8s'})
    })


    // 首页 直播资讯展会tab切换
    for (let i = 0; i < threeItemTitle.length; i++) {
        $(threeItemTitle[i]).click(function () {
            for (let j = 0; j < threeItemTitle.length; j++) {
                $(botLine[j]).removeClass('botLineAct')
                $(indexBottomBot[j]).addClass('hide')
            }
            for (let k = 0; k < botArticleBoth.length; k++) {
                $(articleBig[k]).addClass('hide')
                $(articleSmall[k]).removeClass('hide')
            }
            $(botLine[i]).addClass('botLineAct')
            $(indexBottomBot[i]).removeClass('hide')
        })
    }

    // 首页样式
    $('.productLearnMore').hover(function () {
        $('.productLearnMore>p').css('color','#33AAB3')
        $('.productLearnMore>i:last-child').css('transform','translateX(10px)')

        $('.productLearnMore>i').css('color','#33AAB3')
    },function () {
        $('.productLearnMore>p').css('color','#FFFFFF')
        $('.productLearnMore>i:last-child').css('transform','translateX(0)')
        $('.productLearnMore>i').css('color','#FFFFFF')
    })
    $('.planItem').hover(function () {
        $(this).children('.planItemImgBox').children('.planItemImg').css({'transform':'scale(1.06,1.06) matrix(1.02,0,0,1.02,0,0)','-webkit-transition-duration':'2s','overflow':'hidden'})
    },function () {
        $(this).children('.planItemImgBox').children('.planItemImg').css('transform','scale(1,1) matrix(1,0,0,1,0,0)')
    })
    $('.planLearnMore').hover(function () {
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
    $('.productItem').hover(function () {
        $(this).children('img').css('transform','matrix(1.02,0,0,1.02,0,0)')
    },function () {
        $(this).children('img').css('transform','matrix(1,0,0,1,0,0)')
    })

    //首页底部文章修改

    for (let i = 0; i < secArtTop.length; i++){
        $(secArtTop[i]).hover(function () {
            $(this).addClass('asideAct')
        },function () {
            $(this).removeClass('asideAct')
        })
        $(secArtTop[i]).click(function (event) {
            event.stopPropagation()
            for (let j = 0; j < secArtBot.length; j++){
                $(secArtBot[j]).addClass('hide')
                $(secArtTop[j]).removeClass('secAct')
            }
            $(secArtBot[i]).removeClass('hide')
            $(secArtBot[i]).addClass('animated fadeInRight')
            $(secArtTop[i]).addClass('secAct')
        })
    }
    for (let i = 0; i < asideTop.length; i++){
        $(asideTop[i]).hover(function () {
            $(this).addClass('asideAct')
        },function () {
            $(this).removeClass('asideAct')
        })
        $(asideTop[i]).click(function (event) {
            event.stopPropagation()
            for (let j = 0; j < asideBot.length; j++){
                $(asideBot[j]).addClass('hide')
                $(asideTop[j]).removeClass('secAct')
            }
            $(asideBot[i]).removeClass('hide')
            $(asideBot[i]).addClass('animated fadeInRight')
            $(asideTop[i]).addClass('secAct')
        })
    }
    $(secArtBot).children('li').hover(function () {
        $(this).addClass('secHoverLi')
    },function () {
        $(this).removeClass('secHoverLi')
    })



}

if (window.attachEvents) {
    window.attachEvents("load", f, false);
} else {
    window.addEventListener("load", f);
}