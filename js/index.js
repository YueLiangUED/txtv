(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {

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
