if(!window.jQuery){
    throw new Error('carousel.js依赖于jQuery！');
}

jQuery.fn.carousel = function(){
    var interval = 2000;    //每隔多久轮换一张
    var duration = 500;     //每次轮换动画的持续时间
    var $imgList = this.children('img'); //所有的img组成的类数组对象
    var cur = 0;  //当前显示的广告的序号
    var next = 1; //下次即将要显示的广告的序号
    //开启一个定时器，每隔interval时长启动一次轮换
    var task=function(){lunHuan()};
    var lunbo=setInterval(task,interval);
    //进行广告轮换
    function lunHuan(){
        //让当前显示的广告启动动画向左滑动，滑出去后，删除.active
        $imgList.eq(cur).animate({left:'-100%'},duration,function(){
            $(this).removeClass('active');
        });
        //让即将要显示的下一张广告添加.active，出现在最右侧，开始动画慢慢向左滑动
        $imgList.eq(next).addClass('active').css('left','100%').animate({left: '0'},duration);
        //修改cur和next变量的值,第cur张移走后next张移入
        cur = next;  //<=0     <=1
        next++;
        if(next>=$imgList.length){
            next = 0;
        }
    }
    $($imgList).mouseover(function () {
        clearInterval(lunbo);
        lunbo=null;
    });
    $($imgList).mouseout(function () {
        lunbo=setInterval(task,interval);
    });
};