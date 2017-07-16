$(".information").blur(function () {
    $(this).next("span").remove();
    $(this).parent().children("img").next().remove();
    var reg=/^\w{1,10}$/;
    if(reg.test($(this).val())){
        $(this).parent().children("div").last().addClass("err_info");
        $(this).parent().children("img").removeClass("agrument");
        $(this).parent().children("img").attr("src","../imgs/2.png");
    }else{
        $(this).parent().children("div").last().removeClass("err_info");
        $(this).parent().children("img").removeClass("agrument");
    }
});