// 获取到localstorage中的index，传入js中
var index = localStorage.getItem("index")
// 当页面加载完毕后清除localstorage中的index数据
$(document).ready(function(){
    localStorage.removeItem("index");
})
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