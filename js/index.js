(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //立即订购
    $('.submit').on('click',function () {
        if($(this).hasClass('active')){
            $('.queryBox').slideDown();
            showMask();
            //确认上拉框中手机号绑定
            $('#phoneNum').text();
            //确认上拉框中QQ号码绑定
            $('#qqNum').text($('#secondInput').val());
        }
    });
    //上拉框确认开通按钮
    $('.queryBtn').on('click',function () {
        window.location.href = '';
    });
    //点击上拉框外隐藏遮罩
    $('#mask').on('click',function () {
        $('.queryBox').slideUp();
        hideMask();
    });
    //用户输入验证交互
    $('#secondInput').on('input',function () {
        if($(this).val() == $('#firstInput').val() && $('#firstInput').val() != ''){
            $('.submit').addClass('active');
            $('#wron').hide();
            $('#yes').show();
        }else if($('#firstInput').val() == '' && $(this).val() == ''){
            $('#yes').hide();
            $('#wron').hide();
            $('.submit').removeClass('active');
        }
        else{
            $('#yes').hide();
            $('.submit').removeClass('active');
        }
    });
    $('#secondInput').on('blur',function () {
        $(this).val() == '' ? $(this).context.placeholder = '请再次输入您的QQ号码':null;
        if($(this).val() != $('#firstInput').val()){
            $('.wraning').fadeIn().delay(800).fadeOut();
            $('#wron').show();
        }else{
            $('#wron').hide();
        }
    });
    $('#firstInput').on('input',function () {
        if($(this).val() == $('#secondInput').val() && $('#secondInput').val() != ''){
            $('.submit').addClass('active');
            $('#wron').hide();
            $('#yes').show();
        }else if($(this).val() != $('#secondInput').val() && $('#secondInput').val() != ''){
            $('.submit').removeClass('active');
            $('#wron').show();
        }else if($(this).val() == ''){
            $('#yes').hide();
            $('#wron').hide();
            $('.submit').removeClass('active');
        }else if($(this).val() == '' && $('#secondInput').val() == ''){
            $('#yes').hide();
            $('#wron').hide();
            $('.submit').removeClass('active');
        }else{
            $('#yes').hide();
            $('.submit').removeClass('active');
        }
    });
    $('#firstInput').on('blur',function () {
        $(this).val() == '' ? $(this).context.placeholder = '请输入您的QQ号码':null;
        if($(this).val() != $('#secondInput').val()){

        }else{
            $('#wron').hide();
        }
    });
    
    //input获取焦点隐藏placeholder内容
    $('input[type=text]').on('focus',function () {
        $(this).context.placeholder = '';
    });

    //点击加载更多
    $('.more').on('touchend',function () {
        $(this).hide();
        $('.moreList').slideDown(500);
    });

    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }

    //成功页确认按钮
    $('#sucBtn').click(function () {
        window.location.href = '';
    });
    //失败页确认按钮
    $('#failBtn').click(function () {
        window.location.href = '';
    });
});
