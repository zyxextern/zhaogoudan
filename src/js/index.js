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

// 轮播图数据
var str = "";
var pointer = "";
$("#banner_ul").css({
    "width":date.length*1060+"px"
})
date.forEach(item =>{
    str += ` 
    <li class="clear banner_li">
        <div class="banner_img">
            <img src="${item.big}" alt="">
        </div>
        <div class="banner_right">
            <div class="info">${item.name}</div>
            <div class="right_img clear">
                <div style="background-image: url(${item.small_1});"></div>
                <div style="background-image: url(${item.small_2});"></div>
                <div style="background-image: url(${item.small_3});"></div>
                <div style="background-image: url(${item.small_4});"></div>
            </div>
            <div class="right_text">热销售卖</div>
        </div>
    </li>
    `;
    pointer +=`
    <div class="pointer"></div>
    `
})
document.querySelector("#banner_ul").innerHTML = str;
document.querySelector("#pointer_box").innerHTML = pointer;
document.querySelectorAll(".pointer")[0].className = 'pointer active'; 
// 轮播图
let index = 0;
var timer = setInterval(righthandler,3000);
$('.banner').mouseenter(function() {
    clearInterval(timer);
});
$('.banner').mouseleave(function() {
    timer = setInterval(righthandler,3000);
});
$('.right').click(righthandler);
function righthandler(){
    $('.banner_ul').stop(true,true).animate({"marginLeft":"-1060px"},400,()=>{
        $('.banner_li').first().appendTo( $('.banner_ul') )
        $('.banner_ul').css("marginLeft","0px")
        index++;
        if( index > 4 ){
            index = 0
        }
        $('.pointer').eq(index).addClass('active').siblings().removeClass('active');
    })
}
$('.left').click(()=>{
    $('.banner_li').last().prependTo( $('.banner_ul') )
    $('.banner_ul').css("marginLeft","-1060px")
    $('.banner_ul').stop(true,false).animate({"marginLeft":"0px"},400,function(){
        index--;
        if( index<0 ){
            index = 4
        }
        $('.pointer').eq(index).addClass('active').siblings().removeClass('active');
    })
})

// tab选项卡
$('.title').click(function(){
    $(this).addClass('title_active').siblings().removeClass('title_active')
    $('.content').eq( $(this).index() ).addClass('content_show').siblings().removeClass('content_show')
})

// var xhr = new XMLHttpRequest();
// xhr.open('GET','/gx?query&start=50&count=50&dynamic_data=&sort_by=_ASC&snr=1_7_7_topsellers_7&filter=topsellers&infinite=1')
// xhr.onload = function(){
//     console.log(JSON.parse(xhr.responseText));
//     var a = JSON.parse(xhr.responseText);
//     console.log(a.results_html);
    
//     $("#content").append(a.results_html)
//     // console.log(JSON.parse(xhr.responseText.result_html));
    
// }
// xhr.send();

var str2 = "";
date_two.forEach(item =>{
    str2 += `
    <a href="#" class="clear">
        <div class="content_logo">
            <img src="${item.img}" alt="">
        </div>
        <div class="contenttext">
            <p>${item.name}</p>
            <p>现已推出</p>
        </div>
    </a>
    `
})
document.querySelectorAll('.content')[0].innerHTML = str2;
var str3 = "";
date_three.forEach(item =>{
    str3 += `
    <a href="#" class="clear">
        <div class="content_logo">
            <img src="${item.img}" alt="">
        </div>
        <div class="contenttext">
            <p>${item.name}</p>
            <p>现已推出</p>
        </div>
    </a>
    `
})
document.querySelectorAll('.content')[1].innerHTML = str3;
document.querySelectorAll('.content')[2].innerHTML = str2;
document.querySelectorAll('.content')[3].innerHTML = str3;





