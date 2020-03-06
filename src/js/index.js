







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




// 轮播图
let index = 0;
var timer = setInterval(righthandler,5000);
$('.banner').mouseenter(function() {
    clearInterval(timer);
});
$('.banner').mouseleave(function() {
    timer = setInterval(righthandler,3000);
});
$('.right').click(righthandler);
function righthandler(){
    $('.banner_ul').stop(true,true).animate({"marginLeft":"-1060px"},500,()=>{
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
    $('.banner_ul').stop(true,false).animate({"marginLeft":"0px"},500,function(){
        index--;
        if( index<0 ){
            index = 4
        }
        $('.pointer').eq(index).addClass('active').siblings().removeClass('active');
    })
})



// 轮播图数据
var str = "";
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
    `
})
document.querySelector("#banner_ul").innerHTML = str;













