// 导航栏
$("#btn").click(function(){
    if( !$('.nav').is($('.right_run')) ){
        $('.nav').addClass('right_run');
        $('#btn').addClass('scroe');
    }else{
        $('.nav').removeClass('right_run');
        $('#btn').removeClass('scroe');
    }
})
// 商品
var str = "";
date_four.forEach(item => {
    str += `
    <a href="./shop_go.html" class="clear show_a" id="show_a" index = "${item.index}">
        <div class="show_img">
            <img src="${item.img}" alt="">
        </div>
        <div class="show_txt">
            <p>${item.name}</p>
            <p>现已推出</p>
        </div>
        <div class="sale">
            <p>${item.sale}￥</p>
        </div>
    </a>
    `;
});
$('#show').html(str);
var index = 0;
$('.show_a').click(function(){
    // 将被点击的元素的index传入localstorage，方便其他页面调用
    index = localStorage.setItem("index",$(this).attr("index")); 
})

var cpage = 1;
function showList(page) {
    var perPage = 4;
    var $lis = $('.show_a');
    var total = $lis.length;
    var totalPage = Math.ceil(total / perPage);
    if (page > totalPage) {
        cpage = page = page - 1;
    }
    var start = (page - 1) * perPage;
    var end = start + perPage;
    $lis.hide().slice(start, end).show();
    $('#pager').empty(); //清空
    if (page > 1) {
        $('<button>上一页</button>').appendTo('#pager').click(function() {
            cpage = cpage - 1;
            showList(cpage);
        });
    }
    //绘制页码
    for (var p = 1; p <= totalPage; p++) {
        var activeClass = (p == page ? 'active' : '');
        $('<button class="' + activeClass + '">' + p + '</button>').appendTo('#pager').click(function() {
            cpage = Number($(this).text());
            showList(cpage);
        });

    }
    if (total && page != totalPage) {
        $('<button>下一页</button>').appendTo('#pager').click(function() {
            cpage = cpage + 1;
            showList(cpage);
        });
    }
}

$(function() {
    showList(cpage);
})
