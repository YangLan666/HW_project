
    // 最顶部广告图片
    $(function () {
        $('#btn').click(function () {
            $('#tp').hide();
            $('#btn').hide();
        })
    });
//    nav导航
    $(function(){
        //鼠标经过
        $('#nav1>li').mouseover(function(){
            // $(this) jQuery 当前元素 this不要加引号
            //show() 显示元素
            $(this).children('dl').show();
            
        });
        //鼠标离开
        $('#nav1>li').mouseout(function(){
            $(this).children('dl').hide();
        });
    })