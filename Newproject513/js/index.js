//当页面距离顶部多少时发生图片变换
window.onscroll=function () {
    var top=document.body.scrollTop;
    if(top>1700){
        $("#box-office li:first>div").children("div").css('width',0).animate({
            width:'800px'
        },2000);
        var txt1=$("#box-office li:first>div").children("span").text();
        if(txt1<100.5){
            var timer1=setInterval(function () {
                txt1++;
                if(txt1>=100.5){
                    clearInterval(timer1);
                    timer1=null;
                }
                $("#box-office li:first>div").children("span").text(txt1);
            },20)
        }

        $("#box-office li:eq(1)>div").children("div").css('width',0).animate({
            width:'200px'
        },2000);
        var txt2=$("#box-office li:eq(1)>div").children("span").text();
        if(txt2<100.5){
            var timer2=setInterval(function () {
                txt2++;
                if(txt2>=80.5){
                    clearInterval(timer2);
                    timer2=null;
                }
                $("#box-office li:eq(1)>div").children("span").text(txt2);
            },20)
        }
        $("#box-office li:eq(2)>div").children("div").css('width',0).animate({
            width:'100px'
        },2000);
        var txt3=$("#box-office li:eq(2)>div").children("span").text();
        if(txt3<100.5){
            var timer3=setInterval(function () {
                txt3++;
                if(txt3>=80.5){
                    clearInterval(timer3);
                    timer3=null;
                }
                $("#box-office li:eq(2)>div").children("span").text(txt3);
            },20)
        }
    }
    if(top<500){
        $("body>img").attr("src","imgs/01.jpg");
    }else if(top>=500&&top<1000){
        $("body>img").attr("src","imgs/02.jpg");
    }else if(top>=1000&&top<1800){
        $("body>img").attr("src","imgs/03.jpg");
    }else if(top>=1500&&top<2200){
        $("body>img").attr("src","imgs/01.jpg");
    }else{$("body>img").attr("src","");}
};
