    var $imgList = $("#picblock2").children('img'); //���е�img��ɵ����������
    var cur = 0;  //��ǰ��ʾ�Ĺ������
    var next = 1; //�´μ���Ҫ��ʾ�Ĺ������
    var prev=$imgList.length-1;
    //����һ����ʱ����ÿ��intervalʱ������һ���ֻ�
    var task=function(){lunHuan()};
    var lunbo=setInterval(task,2500);
    //���й���ֻ�
    function lunHuan(){
        //�õ�ǰ��ʾ�Ĺ�������������󻬶�������ȥ��ɾ��.active
        $imgList.eq(cur).animate({left:'-100%'},400,function(){
            $(this).removeClass('active');
        });
        //�ü���Ҫ��ʾ����һ�Ź�����.active�����������Ҳ࣬��ʼ�����������󻬶�
        $imgList.eq(next).addClass('active').css('left','100%').animate({left: '28px'},400);
        //�޸�cur��next������ֵ,��cur�����ߺ�next������
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