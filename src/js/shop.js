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
