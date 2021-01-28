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
    $(addSingle).click(function () {
        calSingle()
        totalNumTemp = parseInt(singleGoodNum.val())
        totalPriceTemp = parseFloat(singleGoodPrice)
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


}

if (window.attachEvents) {
    window.attachEvents("load", f, false);
} else {
    window.addEventListener("load", f);
}