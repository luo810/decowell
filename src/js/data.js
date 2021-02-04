// 数据页
let datafirstMune = $('.firstMune')
let datafirstABox = $('.firstABox')
let iconJiantou = $('.icon-jiantou')
let datasecondABox = $('.secondABox')
let datasecMune = $('.secMune')
let datathrMune = $('.thrMune')
let datathirdABox = $('.thirdABox')
let datafourMune = $('.fourMune')
let datafourMuneABox = $('.forthABox')
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
let total = $('.dataPagination>li') //总共append结果数量
let totalLiNum = total.length //总共筛选结果数量
let dataLeftMune = $('.dataLeft')
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
for (let i = 0; i < datafourMuneABox.length; i++) {
    $(datafourMuneABox[i]).click(function () {
        clearAstyle()
        $(this).children('a').css('color', '#33AAB3')
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
// $('.dataFixBox').mouseenter(function (event) {
//     console.log('8')
//     event.stopPropagation()
//
// })
for (let i = 0; i < datamoreType.length; i++) {
    $(datamoreType[i]).children('label').children('input').on('click', function (event) {
        event.stopPropagation()
        let typeTemp = $(this).siblings('span').text()
        let cataTemp = cata_array[i]
        let typeText = "<span data-chname='" + typeTemp + "' data-id='" + cataTemp + "'>" + typeTemp + "</span>";
        typeText += "<i class='iconfont icon-cross-fill' style='font-size: 14px;color: #33AAB3 '></i>"
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
        showcurPage(pageSize, pageLi.length - 2)
    } else {
        let temp;
        for (let j = 0; j < pageLi.length; j++) {
            if ($(pageLi[j]).hasClass('activePage')) {
                temp = j;
            }
        }
        $(pageLi[temp]).removeClass('activePage')
        $(pageLi[temp - 1]).addClass('activePage')
        showcurPage(pageSize, temp - 1)
    }
})
// 下一页
$('.toNext').click(function (event) {
    pageLi = $('.pagination>li')
    event.stopPropagation()
    if ($('.pagination>li:nth-last-child(2)').hasClass('activePage')) {
        $('.pagination>li:nth-last-child(2)').removeClass('activePage')
        $('.pagination>li:nth-child(2)').addClass('activePage')
        showcurPage(pageSize, 1)
    } else {
        let temp;
        for (let j = 0; j < pageLi.length; j++) {
            if ($(pageLi[j]).hasClass('activePage')) {
                temp = j;
            }
        }
        $(pageLi[temp]).removeClass('activePage')
        $(pageLi[temp + 1]).addClass('activePage')
        showcurPage(pageSize, temp + 1)
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
            showcurPage(pageSize, curPage)
        })
    }
})

// 显示对应页码的内容[数据全加载完毕]
function showcurPage(pageSize, curPage) {
    $(total).hide()
    let itemStart = pageSize * (curPage - 1)
    let itemEnd = pageSize * curPage
    for (let i = itemStart; i < itemEnd; i++) {
        $(total[i]).show()
    }
}

// 后台返回单页内容
function showcurPageSingle(pageSize, curPage) {
    $(total).remove()
    for (let i = 0; i < pageSize; i++) {
        // $(total[i]).show()
        // 将返回的数组内容挂载到右侧
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
        for (let i = 1; i < pageLi.length - 1; i++) {
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
    $('.materDropdown>input').attr('value', pageSize)
}

let leftMuneTop = $('.dataLeft').offset().top //左侧目录距顶高度
let rightMuneHeight = $('.dataBoxRig').innerHeight() //右侧目录高度,会变
let rightMuneTop = $('.dataBoxRig').offset().top //右侧 目录距顶高度
let tabHei = $('.headerBox').innerHeight() //头部固定定位导航栏的高度
// let rigTrueTop = $('.dataSelectShow').offset().top //右侧目录列表距顶部高度
let rightMuneWid = $('.dataBoxRig').innerWidth()
$(this).scroll(function () {
    let finMaxHei = $(window).height() - tabHei
    let leftMarTop = rightMuneHeight - finMaxHei
    rightMuneHeight = $('.dataBoxRig').innerHeight()
    if ($(this).scrollTop() < leftMuneTop) {
        //未滚到左侧时下方最大高度为页面可视区度-左侧上方高度
        //左侧上方高度为左侧目录距顶部距离减去滚动高度
        let tempMaxHei = $(window).height() + $(this).scrollTop() - leftMuneTop
        $('.dataLeft').css({'max-height': tempMaxHei + 'px', 'position': 'static', 'top': '0px'})
    } else {
        rightMuneHeight = $('.dataBoxRig').innerHeight()
        leftMarTop = rightMuneHeight - finMaxHei
        $('.dataLeft').css({
            'max-height': finMaxHei + 'px',
            'position': 'fixed',
            'top': tabHei + 'px',
            'margin-top': '0px'
        })
    }
    rightMuneHeight = $('.dataBoxRig').innerHeight()
    //触发条件为右侧目录滚动结束,即右侧目录底部距页面顶部距离减去已经滚动距离
    // 比较结果与页面可视区高度比较,小于说明滚上来了
    if (rightMuneHeight + rightMuneTop - $(this).scrollTop() < $(window).height()) {
        leftMarTop = rightMuneHeight - finMaxHei
        if (leftMarTop > 0) {
            $('.dataLeft').css('margin-top', leftMarTop + 'px')
            $('.dataLeft').css('max-height', finMaxHei + 'px')

        } else {
            $('.dataLeft').css('margin-top', '0px')
            let tempMaxHei = $(window).height() + $(this).scrollTop() - leftMuneTop
            $('.dataLeft').css('max-height', tempMaxHei + 'px')
        }
        $('.dataLeft').css({'max-height': finMaxHei + 'px', 'position': 'static', 'top': '0px'})
    }
    // 筛选出现在可视区
    let selectSpanTop = $('.dataSelectResult').offset().top
    let selectSpanHei = $('.dataSelectResult').innerHeight()
    let selectCli = selectSpanTop + selectSpanHei - $(this).scrollTop()
    let rigMuneLeft = $('.dataBoxRig').offset().left
    if ((selectCli < $(window).height()) && (rightMuneHeight + rightMuneTop - $(this).scrollTop() - 200 > $(window).height())) {
        $('.materEveryNumBox').addClass('on')
        $('.materEveryNumBox').css({'width': rightMuneWid + 'px', 'left': rigMuneLeft + 'px', 'margin-left': '0px'})
    } else if (rightMuneHeight + rightMuneTop - $(this).scrollTop() - 200 < $(window).height()) {
        $('.materEveryNumBox').removeClass('on')
        $('.materEveryNumBox').css({'width': rightMuneWid + 'px', 'left': '0px', 'margin-left': '-25px'})
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
for (let i = 0; i < pageSizeSelect.length; i++) {
    $(pageSizeSelect[i]).click(function (event) {
        event.stopPropagation()
        let valueTemp = $(this).children('a').data('value')
        $(this).parent('ul').siblings('input').attr('value', valueTemp)
        $(this).parent('ul').siblings('span').text(valueTemp)
        pageSize = valueTemp
        curPage = 1 //重置页码
        pageNumShow()
        firstPageShow()
        $(this).parent('ul').css('display', 'none')
    })
}

// 显示第一页
function firstPageShow() {
    $(total).hide()
    for (let i = 0; i < pageSize; i++) {
        $(total[i]).show()
    }
    $('.dataSelectResult>span:first-child').text("筛选(" + totalLiNum + "条结果)")
}

if (totalLiNum <= 0) {
    $('.dataPagination').append("<div>暂无检索结果</div>")
    $('.dataPagination').children('div').css({
        'width': '100%',
        'text-align': 'center',
        'padding': '100px 0',
        'font-size': '16px'
    })

}

