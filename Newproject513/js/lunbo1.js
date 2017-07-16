    var $imgList = $("#picblock2").children('img'); //所有的img组成的类数组对象
    var cur = 0;  //当前显示的广告的序号
    var next = 1; //下次即将要显示的广告的序号
    var prev=$imgList.length-1;
    //开启一个定时器，每隔interval时长启动一次轮换
    var task=function(){lunHuan()};
    var lunbo=setInterval(task,2500);
    //进行广告轮换
    function lunHuan(){
        //让当前显示的广告启动动画向左滑动，滑出去后，删除.active
        $imgList.eq(cur).animate({left:'-100%'},400,function(){
            $(this).removeClass('active');
        });
        //让即将要显示的下一张广告添加.active，出现在最右侧，开始动画慢慢向左滑动
        $imgList.eq(next).addClass('active').css('left','100%').animate({left: '28px'},400);
        //修改cur和next变量的值,第cur张移走后next张移入
        prev=cur;
        cur = next;  //<=0     <=1
        next++;
        if(next>=$imgList.length){
            next = 0;
        }
    }
    function lunhuanx(){
        $imgList.eq(cur).css('left','28px').animate({left:'100%'},400, function () {
            $(this).removeClass('active');
        });
        $imgList.eq(prev).addClass('active').css('left','-100%').animate({left: '28px'},400);
        cur=prev;
        next=cur+1;
        if(next>=$imgList.length){
            next = 0;
        }
        prev--;
        if(prev==-1){
            prev = $imgList.length-1;
        }
    }
    var $cimgList = $("#control").children('img');
    $($cimgList).mouseover(function () {
        clearInterval(lunbo);
        lunbo=null;
    });
    $($cimgList).mouseout(function () {
        lunbo=setInterval(task,2500);
    });
    $cimgList.first().click(function () {
        lunHuan();
        console.log(prev,cur,next);
    });
    $cimgList.first().next().click(function () {
        lunhuanx();
        console.log(prev,cur,next);
    });