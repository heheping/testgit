if(!window.jQuery){
    throw new Error('carousel.js������jQuery��');
}

jQuery.fn.carousel = function(){
    var interval = 2000;    //ÿ������ֻ�һ��
    var duration = 500;     //ÿ���ֻ������ĳ���ʱ��
    var $imgList = this.children('img'); //���е�img��ɵ����������
    var cur = 0;  //��ǰ��ʾ�Ĺ������
    var next = 1; //�´μ���Ҫ��ʾ�Ĺ������
    //����һ����ʱ����ÿ��intervalʱ������һ���ֻ�
    var task=function(){lunHuan()};
    var lunbo=setInterval(task,interval);
    //���й���ֻ�
    function lunHuan(){
        //�õ�ǰ��ʾ�Ĺ�������������󻬶�������ȥ��ɾ��.active
        $imgList.eq(cur).animate({left:'-100%'},duration,function(){
            $(this).removeClass('active');
        });
        //�ü���Ҫ��ʾ����һ�Ź�����.active�����������Ҳ࣬��ʼ�����������󻬶�
        $imgList.eq(next).addClass('active').css('left','100%').animate({left: '0'},duration);
        //�޸�cur��next������ֵ,��cur�����ߺ�next������
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