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
let secTempLi = []
let addSingle = $('.addSingle')
let otherSub = $('.otherSub')
let otherAdd = $('.otherAdd')
let detailtab = $('.tabSelectUl>li')
let tabSelLeft = $('.tabSelLeft')
let bottomTab = $('.tabBox')
function f() {
    // 详情页价格计算
    function calSingle() {
        singleproductNum = parseInt(singleGoodNum.val())
        singleGoodNum.val(singleproductNum)
        if (singleproductNum < 0) {
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
        for (let j = 0; j < otherGoodNum.length; j++) {
            if ($(otherGoodNum[j]).val() < 0) {
                alert('请输入合理购买的数量')
                $(otherGoodNum[j]).val(0)
            }
            if ($(otherGoodNum[j]).val() === '') {
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
    $(addSingle).click(function (event) {
        event.stopPropagation()
        alert('已加入购物车')
        $(singleGoodNum).val(1)
        calSingle()
        // totalNumTemp = parseInt(singleGoodNum.val())
        // totalPriceTemp = parseFloat(singleGoodPrice)
        // calTotal()
    })
    $('.addAlltoBuy').click(function (event) {
        event.stopPropagation()
        alert('已加入购物车')
        for(let i = 0; i < otherGoodNum.length; i++){
            $(otherGoodNum[i]).val(0)
        }
        calTotal()

    })
    // 详情页其他型号价格计算
    for (let i = 0; i < otherGoodNum.length; i++) {
        $(otherGoodNum[i]).bind('keypress', function (event) {
            if (event.keyCode === 13) {
                calTotal()
            }

        })
    }
    for (let i = 0; i < otherSub.length; i++) {
        $(otherSub[i]).click(function () {
            let newotherGoodNum = parseInt($(otherGoodNum[i]).val())
            if (newotherGoodNum !== 0) {
                $(otherGoodNum[i]).val(newotherGoodNum - 1)
                calTotal()
            } else {
                alert('请输入合理的购买数量')
            }
        })
    }
    for (let i = 0; i < otherAdd.length; i++) {

        $(otherAdd[i]).click(function () {
            let newotherGoodNum = parseInt($(otherGoodNum[i]).val())
            $(otherGoodNum[i]).val(newotherGoodNum + 1)
            calTotal()
        })
    }
    // 详情页下方tab
    for (let i = 0; i < detailtab.length; i++) {
        $(detailtab[i]).click(function () {
            for (let j = 0; j < detailtab.length; j++) {
                $(detailtab[j]).removeClass('tabSelectAct')
                $(tabSelLeft[j]).addClass('hide')
            }
            $(this).addClass('tabSelectAct')
            $(tabSelLeft[i]).removeClass('hide')
        })
    }
    let bottomTabHeight = $(bottomTab).offset().top
    $(document).scroll(() => {
        if (bottomTabHeight <= $(this).scrollTop()) {
            $('.tabSelectBox').css('position', 'fixed')
            $('.tabSelectBox').css('top', 20 + 'px')
            $('.tabSelectBox').css('z-index','99')
            $('.tabSelLeft').css('padding-top',35 + 'px')
            // $('.materEveryNumBox').addClass('on')

        } else {
            $('.tabSelectBox').css('position', 'static')
            $('.tabSelectBox').css('top', 0 + 'px')
            $('.tabSelLeft').css('padding-top',0 + 'px')

        }
    })
    $('.productLearnMore').hover(function () {
        $(this).children('p').css('color','#33AAB3')
        $(this).children('i:last-child').css('transform','translateX(10px)')
        $(this).children('i').css('color','#33AAB3')
    },function () {
        $(this).children('p').css('color','#333333')
        $(this).children('i:last-child').css('transform','translateX(0)')
        $(this).children('i').css('color','#333333')
    })
    $('.detailScaleBox').hover(function () {
        $(this).children('.detailImgBox').children('img').css('transform','matrix(1.06,0,0,1.06,0,0)')
    } ,function () {
        $(this).children('.detailImgBox').children('img').css('transform','matrix(1,0,0,1,0,0)')
    })
    // 右侧型号对应小图
    let typeChooseBut = $('.typeChooseBut>button')
    let proDetImgBox = $('.proDetImgBox')
    $(typeChooseBut[0]).css('border-color','#33AAB3')
    $(typeChooseBut[0]).css('color','#33AAB3')
    for(let i = 0 ; i < typeChooseBut.length;i++){
        $(typeChooseBut[i]).click(function(){
            for(let j = 0 ; j < typeChooseBut.length;j++){
                $(typeChooseBut[j]).css('border-color','rgba(0,0,0,0.6)')
                $(typeChooseBut[j]).css('color','rgba(0,0,0,0.6)')
                $(proDetImgBox[j]).removeClass('proDetImgAct')
            }
            $(this).css('border-color','#33AAB3')
            $(this).css('color','#33AAB3')
            $(proDetImgBox[i]).addClass('proDetImgAct')
            if(proDetImgBox.length === 1){
                $(proDetImgBox[0]).addClass('proDetImgAct')
            }
        })
    }
    // 左侧小图对应型号
    for(let i = 0 ; i < proDetImgBox.length;i++){
        $(proDetImgBox[i]).click(function(){
            for(let j = 0 ; j < proDetImgBox.length;j++){
                $(typeChooseBut[j]).css('border-color','rgba(0,0,0,0.6)')
                $(typeChooseBut[j]).css('color','rgba(0,0,0,0.6)')
                $(proDetImgBox[j]).removeClass('proDetImgAct')
            }
            $(typeChooseBut[i]).css('border-color','#33AAB3')
            $(typeChooseBut[i]).css('color','#33AAB3')
            $(this).addClass('proDetImgAct')
            if(proDetImgBox.length === 1){
                $(proDetImgBox[0]).addClass('proDetImgAct')
            }
        })
    }

}

if (window.attachEvents) {
    window.attachEvents("load", f, false);
} else {
    window.addEventListener("load", f);
}