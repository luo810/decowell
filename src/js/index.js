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
let indexMune = $(".navLeftBox>li:first-child")
let firstMune = $(".current>li")
let secMune = $(".currentSec")
let threeMune = $('.plateThree>ul')
let muneTemp = 1
let secmuneTemp = 1
// ------------------------------------------------------------
let singleGoodNum = $('#goodNum')
let singleTotalPrice = $('.totalPrice')
let priceNumSingle = parseFloat($('.priceNum').text())
let singleproductNum = parseInt(singleGoodNum.val())
let singleGoodPrice = priceNumSingle * singleproductNum
let otherGoodPrice = $('.otherGoodPrice')
let otherGoodNum = $('.otherGoodNum')
let totalMoney = 0
let totalNum = 0
let totalPriceTemp = 0
let totalNumTemp = 0
let addSingle = $('.addSingle')
let otherSub = $('.otherSub')
let otherAdd = $('.otherAdd')
let detailtab = $('.tabSelectUl>li')
let tabSelectShow = $('.tabSelectShow')

function f() {
    // 首页拓展菜单显示隐藏
    indexMune.click(function () {
        $('header:first-child').hide()
        $('.headerSpan').removeClass('hide')
        $('.headSpanBox').removeClass('hide')
        $(secMune).hide()
        muneTemp = 1
        secmuneTemp = 1
        selectMu()
        // var setTimer =  setInterval(function () {
        //     selectMu()
        // },200)
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
            selectMu()
        }, function () {

        })
    }
    function selectMu(){
        $(secMune).hide()
        let secTemp = '.sec' + muneTemp
        $(secTemp).show()
        let secTempLi = $(secTemp).children('li')
        $(firstMune).children('a').removeClass('afirhover')
        $(secTempLi).children('a').removeClass('afirhover')
        $(firstMune).removeClass('actFirstLi')
        $(secTempLi).removeClass('actSecLi')
        $(secTempLi).children('a').children('span').css('color', '#FFFFFF')
        $(secTempLi).children('a').children('img:first-child').show()
        $(secTempLi).children('a').children('img:last-child').addClass('hide')
        $(firstMune[muneTemp - 1]).children('a').addClass('afirhover')
        $(firstMune[muneTemp - 1]).addClass('actFirstLi')
        $(secTempLi[secmuneTemp - 1]).addClass('actSecLi')
        $(secTempLi[secmuneTemp - 1]).children('a').children('span').css('color', '#666666')
        $(secTempLi[secmuneTemp - 1]).children('a').children('img:first-child').hide()
        $(secTempLi[secmuneTemp - 1]).children('a').children('img:last-child').removeClass('hide')
        $(secTempLi[secmuneTemp - 1]).children('a').addClass('afirhover')
        let chooseSecLi = $(secTemp).children('li')
        for (let i = 0; i < chooseSecLi.length; i++) {
            $(chooseSecLi[i]).hover(function () {
                secmuneTemp = i + 1
            }, function () {

            })
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
    // 二级菜单li色号调整
    $('.currentSec>li').hover(function () {
        selectMu()
        $(this).children('a').children('span').css('color', '#666666')
        $(this).children('a').children('img:first-child').hide()
        $(this).children('a').children('img:last-child').removeClass('hide')

    }, function () {
        // selectMu()
        $(this).children('a').children('span').css('color', '#FFFFFF')
        $(this).children('a').children('img:first-child').show()
        $(this).children('a').children('img:last-child').addClass('hide')

    })

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
                    console.log('dddd')
                    $(productChild[m]).css("margin-right", "0")
                }
            }

            $(itemName[i]).addClass('itemNameActOne')
            $(itemDesc[i]).addClass('itemDescActOne')
        })
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
            $(botArticleBoth[i * 3]).css('width', '55%')

        })
    }
    // 首页底部文章展示切换
    for (let i = 0; i < botArticleBoth.length; i++) {
        $(botArticleBoth[i]).hover(function () {
            for (let j = 0; j < botArticleBoth.length; j++) {
                $(articleBig[j]).addClass('hide')
                $(articleSmall[j]).removeClass('hide')
                $(botArticleBoth[j]).css('width', '20%')
            }
            $(articleBig[i]).removeClass('hide')
            $(articleSmall[i]).addClass('hide')
            $(botArticleBoth[i]).css('width', '55%')
        })
    }

    // 详情页价格计算
    function calSingle() {
        singleproductNum = parseInt(singleGoodNum.val())
        singleGoodNum.val(singleproductNum)
        if(singleproductNum < 0){
            alert('请输入合理购买的数量')
            singleGoodNum.val(1)
            singleproductNum = parseInt(singleGoodNum.val())
            singleGoodPrice = singleproductNum * priceNumSingle
            $('.totalPrice').text(singleGoodPrice.toFixed(2))
            return
        }
        singleGoodPrice = singleproductNum * priceNumSingle
        singleTotalPrice.text(singleGoodPrice.toFixed(2))
    }
    function calTotal() {
        totalNum = totalNumTemp
        totalMoney = totalPriceTemp
        for(let j = 0; j < otherGoodNum.length ; j++){
            if($(otherGoodNum[j]).val() < 0){
                alert('请输入合理购买的数量')
                $(otherGoodNum[j]).val(0)
            }
            if($(otherGoodNum[j]).val() === ''){
                $(otherGoodNum[j]).val(0)
            }
            $(otherGoodNum[j]).val(parseInt($(otherGoodNum[j]).val()))
            totalMoney += parseInt($(otherGoodNum[j]).val()) * parseFloat($(otherGoodPrice[j]).text())
            totalNum += parseInt($(otherGoodNum[j]).val())
            $('.totalNum').text(totalNum)
            $('.totalMoney').text(totalMoney.toFixed(2))
        }
    }
    // 详情页头部价格计算
    singleTotalPrice.text(singleGoodPrice.toFixed(2))
    $('#goodNum').bind('keypress', function (event) {
        if (event.keyCode === 13) {
            calSingle()
        }
    });
    $(addSingle).click(function () {
        calSingle()
        totalNumTemp = parseInt(singleGoodNum.val())
        totalPriceTemp = parseFloat(singleGoodPrice)
        calTotal()

    })
    // 详情页其他型号价格计算
    for(let i = 0; i < otherGoodNum.length ; i++){
        $(otherGoodNum[i]).bind('keypress',function (event) {
            if (event.keyCode === 13){
                calTotal()
            }

        })
    }
    for(let i = 0 ; i < otherSub.length; i++){
        $(otherSub[i]).click(function () {
           let newotherGoodNum =  parseInt($(otherGoodNum[i]).val())
            if(newotherGoodNum !== 0){
                $(otherGoodNum[i]).val(newotherGoodNum - 1)
                calTotal()
            }else{
                alert('请输入合理的购买数量')
            }
        })
    }
    for(let i = 0 ; i < otherAdd.length; i++){

        $(otherAdd[i]).click(function () {
            let newotherGoodNum =  parseInt($(otherGoodNum[i]).val())
            $(otherGoodNum[i]).val(newotherGoodNum + 1)
            calTotal()
        })
    }
    // 详情页下方tab
    for(let i = 0; i < detailtab.length ; i++){
        $(detailtab[i]).click(function () {
            for(let j = 0;j < detailtab.length; j++){
                $(detailtab[j]).removeClass('tabSelectAct')
                $(tabSelectShow[j]).addClass('hide')
            }
            $(this).addClass('tabSelectAct')
            $(tabSelectShow[i]).removeClass('hide')
        })
    }


}


if (window.attachEvents) {
    window.attachEvents("load", f, false);
    // window.attachEvents("resize", f, false);
} else {
    window.addEventListener("load", f);
    // window.addEventListener("resize", f);
}