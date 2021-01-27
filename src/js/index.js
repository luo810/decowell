// 首页
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
let secTemp = '.sec' + muneTemp
// ------------------------------------------------------------
// 详情页
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
// ---------------------------------------------------
// 数据页
let datafirstMune = $('.firstMune')
let datafirstABox = $('.firstABox')
let iconJiantou = $('.icon-jiantou')
let datasecondABox = $('.secondABox')
let datasecMune = $('.secMune')
let datathrMune = $('.thrMune')
let datathirdABox = $('.thirdABox')
let datafourMune = $('.fourMune')
let dataSelectDD = $('.dataSelect>dl>dd')
let dataSelectDDFirst = $('.dataSelect>dl:first-child>dd')
let dataSelectDDEnd = $('.dataSelect>dl:last-child>dd')
let dataSelectShowTopDl = $('.dataSelectShowTopDl>dd')
let showMoreType = $('.dataSelectRig')
let datamoreType = $('.dataType>li')
let datamoreFormat = $('.dataFormat>li')
let dataMuneFirst = $('.dataMuneFirst')
let pageLi = $('.pagination>li')


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
    // -----------------详情页-----------------------------------------------------------------
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

    // -----------------数据页-----------------------------------------------------------------
    // 清除所有菜单目录的链接样式
    function clearAstyle() {
        $('.firstABox').children('a').css('color', '#000000')
        $('.secondABox').children('a').css('color', '#000000')
        $('.thirdABox').children('a').css('color', '#000000')
        $('.forthABox').children('a').css('color', '#000000')
    }

    // 默认一级菜单展开
    function selectFirstMune() {
        for (let j = 0; j < datasecMune.length; j++) {
            $(datasecMune[j]).addClass('hide')
        }
        for (let i = 0; i < datathrMune.length; i++) {
            $(datathrMune[i]).hide()
        }
        for (let j = 0; j < datafourMune.length; j++) {
            $(datafourMune[j]).hide()
        }
        for (let j = 0; j < datafirstABox.length; j++) {
            clearAstyle()
            $(iconJiantou[j]).css('color', '#666')
            $(iconJiantou[j]).css('transform', 'rotate(0deg)')
        }
        $(datasecMune[0]).removeClass('hide')
        $(datafirstABox[0]).children('a').css('color', '#33AAB3')
        $(iconJiantou[0]).css('transform', 'rotate(90deg)')
    }

    selectFirstMune()
    // 一级菜单的点击
    for (let i = 0; i < datafirstABox.length; i++) {
        $(datafirstABox[i]).click(function () {
            if ($(datasecMune[i]).hasClass('hide')) {
                for (let j = 0; j < datasecMune.length; j++) {
                    $(datasecMune[j]).addClass('hide')
                }
                for (let j = 0; j < datafirstABox.length; j++) {
                    clearAstyle()
                    $(iconJiantou[j]).css('color', '#666')
                    $(iconJiantou[j]).css('transform', 'rotate(0deg)')
                }
                $(datasecMune[i]).removeClass('hide')
                $(datafirstABox[i]).children('a').css('color', '#33AAB3')
                $(iconJiantou[i]).css('transform', 'rotate(90deg)')

            } else {
                for (let j = 0; j < datasecMune.length; j++) {
                    $(datasecMune[j]).addClass('hide')
                }
                $(datasecMune[i]).addClass('hide')
                $(iconJiantou[i]).css('transform', 'rotate(0deg)')
            }
        })
    }
    // 二级菜单点击
    for (let i = 0; i < datasecondABox.length; i++) {
        $(datasecondABox[i]).click(function () {
            if ($(datathrMune[i]).is(':hidden')) {
                for (let j = 0; j < datathrMune.length; j++) {
                    clearAstyle()
                    $(datathrMune[j]).hide()
                }
                for (let j = 0; j < datasecondABox.length; j++) {
                    if ($(datasecondABox[j]).hasClass('noChildren')) {

                    } else {
                        let datasecondABoxI = $(datasecondABox[j]).children('i')
                        $(datasecondABoxI).addClass('icon-yuanhuan-zeng')
                        $(datasecondABoxI).removeClass('icon-yuanhuan-jian')
                    }

                }
                $(this).siblings('.thrMune').show()
                let datasecondABoxI = $(datasecondABox[i]).children('i')
                if ($(datasecondABox[i]).hasClass('noChildren')) {

                } else {
                    $(datasecondABoxI).addClass('icon-yuanhuan-jian')
                    $(datasecondABoxI).removeClass('icon-yuanhuan-zeng')
                }
                $(this).children('a').css('color', '#33AAB3')

            } else {
                $(this).children('i').removeClass('icon-yuanhuan-jian')
                $(this).children('i').addClass('icon-yuanhuan-zeng')
                $(this).siblings('.thrMune').hide()
                clearAstyle()
                // for (let j = 0; j < datathrMune.length; j++) {
                //     clearAstyle()
                //     $(datathrMune[j]).hide()
                // }
                $(this).children('a').css('color', '#33AAB3')
            }

        })
    }
    // 三级菜单点击
    for (let i = 0; i < datathirdABox.length; i++) {
        $(datathirdABox[i]).click(function () {
            if ($(this).siblings('.fourMune').is(':hidden')) {
                for (let j = 0; j < datafourMune.length; j++) {
                    $(datafourMune[j]).hide()
                    clearAstyle()
                }

                for (let j = 0; j < datathirdABox.length; j++) {
                    if ($(datathirdABox[j]).hasClass('noChildren')) {

                    } else {
                        let datathirdABoxI = $(datathirdABox[j]).children('i')
                        $(datathirdABoxI).addClass('icon-yuanhuan-zeng')
                        $(datathirdABoxI).removeClass('icon-yuanhuan-jian')
                    }

                }
                $(this).siblings('.fourMune').show()
                let datathirdABoxI = $(datathirdABox[i]).children('i')
                if ($(datathirdABox[i]).hasClass('noChildren')) {
                } else {
                    $(datathirdABoxI).addClass('icon-yuanhuan-jian')
                    $(datathirdABoxI).removeClass('icon-yuanhuan-zeng')
                }
                $(this).children('a').css('color', '#33AAB3')
            } else {
                for (let j = 0; j < datafourMune.length; j++) {
                    $(datafourMune[j]).hide()
                    clearAstyle()
                }
                if ($(this).hasClass('noChildren')) {

                } else {
                    $(this).children('i').removeClass('icon-yuanhuan-jian')
                    $(this).children('i').addClass('icon-yuanhuan-zeng')
                }
                $(this).children('a').css('color', '#33AAB3')


            }

        })
    }
    // 四级菜单点击
    for (let i = 0; i < datafourMune.length; i++) {
        $(datafourMune[i]).click(function () {
            clearAstyle()
            $(this).children('.forthABox').children('a').css('color', '#33AAB3')
        })
    }

    // 是否显示已选
    function showSelect() {
        if ($('.dataSelectShowTopDl').children('dd').length <= 0) {
            $('.dataSelectShowTop').addClass('hide')
        } else {
            $('.dataSelectShowTop').removeClass('hide')
        }
    }

    // 更多类型的点击
    $(showMoreType).click(function () {
        let spandis = $(this).children('span').text()
        let expendText = $(this).attr('data-expend-text')
        let unexpendText = $(this).attr('data-unexpend-text')
        $(this).children('i').css('display', 'incline-block')
        for (let i = 4; i < datamoreType.length; i++) {
            $(datamoreType[i]).toggleClass('hide')
        }
        if (spandis === expendText) {
            $(this).children('span').text(unexpendText)
            $(this).children('i').css('transform', 'rotate(180deg)')
        } else {
            $(this).children('span').text(expendText)
            $(this).children('i').css('transform', 'rotate(0deg)')
        }
    })
    // 已选类型部分
    for (let i = 0; i < datamoreType.length; i++) {
        $(datamoreType[i]).children('label').children('input').click(function (event) {
            let typeTemp = $(this).siblings('span').text()
            let typeText = "<span data-chname=' " + typeTemp + " '>" + typeTemp + "</span>";
            typeText += "<i class='iconfont icon-cross-fill' style='font-size: 14px;color: #33AAB3 '></i>"
            event.stopPropagation()
            if ($(this).is(':checked')) {
                $("<dd></dd>")
                    .insertBefore(".dataSelectShowTopDl>dt")
                    .html(typeText)
            } else {
                let al = $(this).siblings('span').text()
                for (let j = 0; j < dataSelectShowTopDl.length; j++) {
                    let a = $(dataSelectShowTopDl[j]).children('span').text()
                    if (a.trim() === al.trim()) {
                        $(dataSelectShowTopDl[j]).remove()
                    }
                }
            }
            showSelect()
            dataSelectShowTopDl = $('.dataSelectShowTopDl>dd')
        })
    }
    // 已选格式
    for (let i = 0; i < datamoreFormat.length; i++) {
        $(datamoreFormat[i]).children('label').children('input').click(function (event) {
            let typeTemp = $(this).siblings('span').text()
            let typeText = "<span data-chname=' " + typeTemp + " '>" + typeTemp + "</span>";
            typeText += "<i class='iconfont icon-cross-fill' style='font-size: 14px;color: #33AAB3 '></i>"
            event.stopPropagation()
            if ($(this).is(':checked')) {
                $("<dd></dd>")
                    .insertBefore(".dataSelectShowTopDl>dt")
                    .html(typeText)
            } else {
                let al = $(this).siblings('span').text()
                for (let j = 0; j < dataSelectShowTopDl.length; j++) {
                    let a = $(dataSelectShowTopDl[j]).children('span').text()
                    if (a.trim() === al.trim()) {
                        $(dataSelectShowTopDl[j]).remove()
                    }
                }
            }
            showSelect()
            dataSelectShowTopDl = $('.dataSelectShowTopDl>dd')
        })
    }

    // 点击关闭选项
    $('.dataSelectShowTop').hover(function () {
        for (let i = 0; i < dataSelectShowTopDl.length; i++) {
            $(dataSelectShowTopDl[i]).children('i').click(function (event) {
                event.stopPropagation()
                let selectFormat = $(this).siblings('span').data('chname')
                for (let j = 0; j < datamoreType.length; j++) {
                    let a = $(datamoreType[j]).children('label').children('span').text()
                    if (a.trim() === selectFormat.trim()) {
                        $(datamoreType[j]).children('label').children('input').prop("checked", false)
                        $(this).parent('dd').remove()
                    }
                }

                for (let j = 0; j < datamoreFormat.length; j++) {
                    let a = $(datamoreFormat[j]).children('label').children('span').text()
                    if (a.trim() === selectFormat.trim()) {
                        $(datamoreFormat[j]).children('label').children('input').prop("checked", false)
                        $(this).parent('dd').remove()
                    }
                }

            })
            showSelect()
        }
    })

    // 清除全部
    $('.dataSelectShowTopDl>dt').click(function (event) {
        event.stopPropagation()
        for (let j = 0; j < datamoreType.length; j++) {
            let a = $(datamoreType[j]).children('label').children('span').text()
            $(datamoreType[j]).children('label').children('input').prop("checked", false)
        }
        for (let j = 0; j < datamoreFormat.length; j++) {
            let a = $(datamoreFormat[j]).children('label').children('span').text()
            $(datamoreFormat[j]).children('label').children('input').prop("checked", false)
        }
        $(dataSelectShowTopDl).remove()
        showSelect()
    })
    // 分页
    // 判断是否显示分页
    pageNumShow()
    // 上一页
    $('.toPrev').click(function (event) {
        pageLi = $('.pagination>li')
        event.stopPropagation()
        if($('.pagination>li:nth-child(2)').hasClass('activePage')){
            $(pageLi[1]).removeClass('activePage')
            $(pageLi[pageLi.length - 2]).addClass('activePage')
        }else{
            let temp;
            for(let j = 0; j < pageLi.length; j++){
                if($(pageLi[j]).hasClass('activePage')){
                    temp = j;
                }
            }
            $(pageLi[temp]).removeClass('activePage')
            $(pageLi[temp-1]).addClass('activePage')
        }
    })
    // 下一页
    $('.toNext').click(function (event) {
        pageLi = $('.pagination>li')
        event.stopPropagation()
        if($('.pagination>li:nth-last-child(2)').hasClass('activePage')){
            $('.pagination>li:nth-last-child(2)').removeClass('activePage')
            $('.pagination>li:nth-child(2)').addClass('activePage')
        }else{
            let temp;
            for(let j = 0; j < pageLi.length; j++){
                if($(pageLi[j]).hasClass('activePage')){
                    temp = j;
                }
            }
            $(pageLi[temp]).removeClass('activePage')
            $(pageLi[temp+1]).addClass('activePage')
        }
    })
    // 选择页码
    $('.pagination').hover(function () {
        pageLi = $('.pagination>li')
        for(let j = 1; j < pageLi.length - 1; j++){
            $(pageLi[j]).click(function (event) {
                event.stopPropagation()
                console.log('ddd')
                for(let k = 1; k < pageLi.length - 1; k++){
                    $(pageLi[k]).removeClass('activePage')
                }
                $(pageLi[j]).addClass('activePage')
            })
        }
    })


    // 判断有几页
    function pageNumShow() {
        let total =  $('.dataPagination>li')
        let pageNum
        if(total.length >= 10){
            pageNum = total.length / 10
            if(total.length%10 === 0){

            }else{
                pageNum += 1
            }
            for(let i = 1;i <= pageNum;i++){
                let innerBox = "<span>" + i + "</span>"
                $("<li></li>")
                    .insertBefore('.toNext')
                    .html(innerBox)
            }
        $('.pagination>li:nth-child(2)').addClass('activePage')
        }else{
            $('.page').hide()
        }
        pageLi = $('.pagination>li')

    }

}


if (window.attachEvents) {
    window.attachEvents("load", f, false);
    // window.attachEvents("resize", f, false);
} else {
    window.addEventListener("load", f);
    // window.addEventListener("resize", f);
}