(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //一键QQ登录
    $('#entryForQQ').on('touchend',function () {
        window.location.href = '';
    });
    //立即订购
    $('.submit').on('touchend',function () {
        window.location.href = '';
    });
    //用户输入验证交互
    $('#secondInput').on('input',function () {
        if($(this).val() == $('#firstInput').val()){
            $('#wron').hide();
            $('#yes').show();
        }else{
            $('#yes').hide();
        }
    });
    $('#secondInput').on('blur',function () {
        if($(this).val() != $('#firstInput').val()){
            $('.wraning').fadeIn().delay(800).fadeOut();
            $('#wron').show();
        }else{
            $('#wron').hide();
        }
    });
    //点击加载更多
    $('.more').on('touchend',function () {
        $(this).hide();
        $('.moreList').slideDown(500);
    });
});
