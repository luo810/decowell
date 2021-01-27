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
let indexTabFirst = $('.tabFirst .indexArticle')
let indexTabSecond = $('.tabSecond .indexArticle')
let indexTabThird = $('.tabThird .indexArticle')
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
let dataSelectShowTopDl = $('.dataSelectShowTopDl>dd')
let showMoreType = $('.dataSelectRig')
let datamoreType = $('.dataType>li')
let datamoreFormat = $('.dataFormat>li')
let pageLi = $('.pagination>li')

let typeInput = $('.dataType>li label>input')
let formatInput = $('.dataFormat>li label>input')


// 将获取的格式id数组放入cata及type input标签的data-id中
let cata_array = [1, 3, 45, 6, 47, 11, 4, 44, 56, 43, 67, 56]
let type_array = ['doc', 'excel', 'pdf', 'ppt']
let cata_array_handle = [] //选择的目录int
let type_array_handle = [] //选择的文件类型string
let pageSizeSelect = $('.materDropdownUl>li')
let pageSize = 10 //每页显示几个
let totalPage //总共有几页
let curPage = 1 //当前页码
let total = $('.dataPagination>li') //总共筛选结果数量
let totalLiNum = total.length //总共筛选结果数量
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
    // 首页底部文章展示切换
    articleChange(indexTabFirst)
    articleChange(indexTabSecond)
    articleChange(indexTabThird)

    function articleChange(pageArr) {
        for (let i = 0; i < pageArr.length; i++) {
            $(pageArr).hover(function (event) {
                event.stopPropagation()
                for (let j = 0; j < pageArr.length; j++) {
                    $(pageArr[j]).parent('.indexArticleBox').removeClass('articleAct')
                    $(pageArr[j]).removeClass('artAct')
                    $(pageArr[j]).children('.titleBox').removeClass('titleAct')
                }
                $(this).addClass('artAct')
                $(this).children('.titleBox').addClass('titleAct')
                $(this).parent('.indexArticleBox').addClass('articleAct')
            })
        }
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


    for (let i = 0; i < cata_array.length; i++) {
        let arrTemp = cata_array[i]
        $(typeInput[i]).attr('data-id', arrTemp)
    }
    for (let i = 0; i < type_array.length; i++) {
        let arrTemp = type_array[i]
        $(formatInput[i]).attr('data-id', arrTemp)
    }


    // 已选类型部分 添加span标签上data-id的补充
    for (let i = 0; i < datamoreType.length; i++) {
        $(datamoreType[i]).children('label').children('input').click(function (event) {
            let typeTemp = $(this).siblings('span').text()
            let cataTemp = cata_array[i]
            let typeText = "<span data-chname='" + typeTemp + "' data-id='" + cataTemp + "'>" + typeTemp + "</span>";
            typeText += "<i class='iconfont icon-cross-fill' style='font-size: 14px;color: #33AAB3 '></i>"

            event.stopPropagation()
            if ($(this).is(':checked')) {
                $("<dd>" + typeText + "</dd>").insertBefore(".dataSelectShowTopDl>dt")
                cata_array_handle.push(cataTemp)
            } else {
                let al = $(this).siblings('span').text()
                let idTemp = $(this).data('id')
                for (let j = 0; j < dataSelectShowTopDl.length; j++) {
                    let a = $(dataSelectShowTopDl[j]).children('span').text()
                    if (a.trim() === al.trim()) {
                        $(dataSelectShowTopDl[j]).remove()
                    }
                }
                cata_array_handle.splice(cata_array_handle.indexOf(idTemp), 1)
            }
            showSelect()
            dataSelectShowTopDl = $('.dataSelectShowTopDl>dd')
        })

    }
    // 已选格式
    for (let i = 0; i < datamoreFormat.length; i++) {
        $(datamoreFormat[i]).children('label').children('input').click(function (event) {
            let typeTemp = $(this).siblings('span').text()
            let typeNewTemp = type_array[i]
            let typeText = "<span data-chname='" + typeTemp + "' data-id='" + typeNewTemp + "'>" + typeTemp + "</span>"
            typeText += "<i class='iconfont icon-cross-fill' style='font-size: 14px;color: #33AAB3 '></i>"
            event.stopPropagation()
            if ($(this).is(':checked')) {
                $("<dd>" + typeText + "</dd>").insertBefore(".dataSelectShowTopDl>dt")
                type_array_handle.push(typeNewTemp)
            } else {
                let al = $(this).siblings('span').text()
                for (let j = 0; j < dataSelectShowTopDl.length; j++) {
                    let a = $(dataSelectShowTopDl[j]).children('span').text()
                    if (a.trim() === al.trim()) {
                        $(dataSelectShowTopDl[j]).remove()
                    }
                }
                type_array_handle.splice(type_array_handle.indexOf(typeNewTemp), 1)

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
        cata_array_handle = [] //置空数组
        type_array_handle = []
    })

    // 分页部分
    // 判断是否显示分页
    pageNumShow()
    //默认加载第一页内容
    firstPageShow()
    // 上一页
    $('.toPrev').click(function (event) {
        pageLi = $('.pagination>li')
        event.stopPropagation()
        if ($('.pagination>li:nth-child(2)').hasClass('activePage')) {
            $(pageLi[1]).removeClass('activePage')
            $(pageLi[pageLi.length - 2]).addClass('activePage')
            showcurPage(pageSize,pageLi.length - 2)
        } else {
            let temp;
            for (let j = 0; j < pageLi.length; j++) {
                if ($(pageLi[j]).hasClass('activePage')) {
                    temp = j;
                }
            }
            $(pageLi[temp]).removeClass('activePage')
            $(pageLi[temp - 1]).addClass('activePage')
            showcurPage(pageSize,temp - 1)
        }
    })
    // 下一页
    $('.toNext').click(function (event) {
        pageLi = $('.pagination>li')
        event.stopPropagation()
        if ($('.pagination>li:nth-last-child(2)').hasClass('activePage')) {
            $('.pagination>li:nth-last-child(2)').removeClass('activePage')
            $('.pagination>li:nth-child(2)').addClass('activePage')
            showcurPage(pageSize,1)
        } else {
            let temp;
            for (let j = 0; j < pageLi.length; j++) {
                if ($(pageLi[j]).hasClass('activePage')) {
                    temp = j;
                }
            }
            $(pageLi[temp]).removeClass('activePage')
            $(pageLi[temp + 1]).addClass('activePage')
            showcurPage(pageSize,temp + 1)
        }
    })
    // 选择页码
    $('.pagination').hover(function () {
        pageLi = $('.pagination>li')
        for (let j = 1; j < pageLi.length - 1; j++) {
            $(pageLi[j]).click(function (event) {
                event.stopPropagation()
                for (let k = 1; k < pageLi.length - 1; k++) {
                    $(pageLi[k]).removeClass('activePage')
                }
                $(pageLi[j]).addClass('activePage')
                curPage = j //设置当前页码
                showcurPage(pageSize,curPage)
            })
        }
    })
    // 显示对应页码的内容
    function showcurPage(pageSize,curPage) {
        $(total).hide()
        let itemStart = pageSize*(curPage-1)
        let itemEnd = pageSize*curPage
        for(let i = itemStart; i < itemEnd ; i++){
            $(total[i]).show()
        }
    }

    // 判断有几页
    function pageNumShow() {
        total = $('.dataPagination>li')
        if (total.length >= pageSize) {
            totalPage = total.length / pageSize
            if (total.length % pageSize === 0) {

            } else {
                totalPage += 1
            }
            for(let i = 1; i < pageLi.length - 1; i++){
                $(pageLi[i]).remove()
            }
            for (let i = 1; i <= totalPage; i++) {
                let innerBox = "<span>" + i + "</span>"
                $("<li></li>")
                    .insertBefore('.toNext')
                    .html(innerBox)
            }
            $('.page').show()
            $('.pagination>li:nth-child(2)').addClass('activePage')
        } else {
            $('.page').hide()
        }
        pageLi = $('.pagination>li')
        $('.materDropdown>span').text(pageSize)
        $('.materDropdown>input').attr('value',pageSize)
    }


    let dataLeftMune = $('.dataLeft')
    let temp = $(dataLeftMune).offset().top
    $(document).scroll(function () {
        let PageWidth = $('.dataPagination').innerWidth()
        $('.materEveryNumBox').css('width',PageWidth + 'px')
        if (temp <= $(this).scrollTop()) {
            $(dataLeftMune).css('position', 'fixed')
            $(dataLeftMune).css('top', '0')
            $('.materEveryNumBox').addClass('on')

        } else {
            $(dataLeftMune).css('position', 'static')
            $(dataLeftMune).css('top', '0')
            $('.materEveryNum').css('position', 'static')
            $('.materEveryNumBox').css('position','static')

        }
        if($('footer').offset().top - 1000 <= $(this).scrollTop()){
            $('.materEveryNumBox').removeClass('on')
        }

    })
    // 显示页码选择
    $('.materDropdown').click(function (event) {
        event.stopPropagation()
        if ($(this).children('ul').is(':hidden')) {
            $(this).children('ul').css('display', 'block')
        } else {
            $(this).children('ul').css('display', 'none')
        }
    })
    // 选择pageSize
    for (let i = 0; i < pageSizeSelect.length; i++){
        $(pageSizeSelect[i]).click(function (event) {
            event.stopPropagation()
            let valueTemp =  $(this).children('a').data('value')
            $(this).parent('ul').siblings('input').attr('value',valueTemp)
            $(this).parent('ul').siblings('span').text(valueTemp)
            pageSize = valueTemp
            curPage = 1 //重置页码
            pageNumShow()
            firstPageShow()
            $(this).parent('ul').css('display','none')
        })
    }
    // 显示第一页
    function firstPageShow() {
        $(total).hide()
        for(let i = 0; i < pageSize ; i++){
            $(total[i]).show()
        }
        $('.dataSelectResult>span:first-child').text("筛选(" + totalLiNum + "条结果)")
    }
}


if (window.attachEvents) {
    window.attachEvents("load", f, false);
} else {
    window.addEventListener("load", f);
}