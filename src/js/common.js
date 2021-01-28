let indexMune = $(".navLeftBox>li:first-child")
let firstMune = $(".current>li")
let secMune = $(".currentSec")
let threeMune = $('.plateThree>ul')
let muneTemp = 1
let secmuneTemp = 1
let secTemp = '.sec' + muneTemp
function f() {
    // 首页拓展菜单显示隐藏
    indexMune.click(function () {
        $('header:first-child').hide()
        $('.headerSpan').removeClass('hide')
        $('.headSpanBox').removeClass('hide')
        $(secMune).hide()
        muneTemp = 1
        secmuneTemp = 1
        selectSecMune()
        selectThrMune()
    })
    $('.headerNavRig>img:last-child').click(function () {
        $('header:first-child').show()
        $('.headerSpan').addClass('hide')
        $('.headSpanBox').addClass('hide')
    })
    // 一级菜单选中
    for (let i = 0; i < firstMune.length; i++) {
        $(firstMune[i]).hover(function () {
            muneTemp = i + 1;
            secmuneTemp = 1
            if ($(this).hasClass('noWay')) {
                secmuneTemp = 0
            }
            selectSecMune()
            selectThrMune()
        }, function () {

        })
    }

    $('.plateTwo').hover(function () {
        for (let i = 0; i < secTempLi.length; i++) {
            $(secTempLi[i]).hover(function () {
                secmuneTemp = i + 1
                selectSecMune()
                selectThrMune()
            }, function () {
            })
        }
    }, function () {

    })


    function selectSecMune() {
        // secmuneTemp = 1
        // 二级菜单全隐藏,显示的二级菜单展示
        $(secMune).hide()
        secTemp = '.sec' + muneTemp
        secTempLi = $(secTemp).children('li')
        $(secTemp).show()
        // 一级默认第一个展示样式,余下样式清除
        for (let i = 0; i < firstMune.length; i++) {
            $(firstMune[i]).children('a').removeClass('afirhover')
            $(firstMune[i]).removeClass('actFirstLi')
        }
        $(firstMune[muneTemp - 1]).children('a').addClass('afirhover')
        $(firstMune[muneTemp - 1]).addClass('actFirstLi')

    }

    function selectThrMune() {
        // 二级菜单默认状态恢复
        let secTempLi = $(secTemp).children('li')
        for (let i = 0; i < secTempLi.length; i++) {
            $(secTempLi[i]).removeClass('actSecLi')
            $(secTempLi[i]).children('a').children('span').css('color', '#FFFFFF')
            $(secTempLi[i]).children('a').children('img:first-child').show()
            $(secTempLi[i]).children('a').children('img:last-child').addClass('hide')
            $(secTempLi[i]).children('a').removeClass('afirhover')
        }
        // 二级默认第一个展示样式
        $(secTempLi[secmuneTemp - 1]).addClass('actSecLi')
        $(secTempLi[secmuneTemp - 1]).children('a').children('span').css('color', '#666666')
        $(secTempLi[secmuneTemp - 1]).children('a').children('img:first-child').hide()
        $(secTempLi[secmuneTemp - 1]).children('a').children('img:last-child').removeClass('hide')
        $(secTempLi[secmuneTemp - 1]).children('a').addClass('afirhover')
        // 三级菜单
        if ($(this).hasClass('noWay')) {
            secmuneTemp = 0
        }
        let threeTemp = '.' + muneTemp + '-sec' + secmuneTemp
        $(threeMune).hide()
        $(threeTemp).show()
        if (secmuneTemp === 0) {
            $('.plateTwo').hide()
        } else {
            $('.plateTwo').show()
        }
    }
}
if (window.attachEvents) {
    window.attachEvents("load", f, false);
} else {
    window.addEventListener("load", f);
}
