$(document).ready(function () {
    
    //HEADER
    var pos = 0;
    var header = $('.header');
  
    $(window).on('scroll', function(){
        if($(this).scrollTop() < pos ){
            //上スクロール時の処理
            header.removeClass('hide');
            header.css('background-color','rgba(0,0,0,0.7)')
        } else{
            //下スクロール時の処理
            header.addClass('hide');
        }
        pos = $(this).scrollTop();
    });

    $('.link').click(function() {
        // スクロールの速度
        var speed = 400;// ミリ秒

        // アンカーの値取得
        var href = $(this).attr('href');

        // 移動先を取得
        var target = $(href == '#' || href == '' ? 'html' : href);

        // 移動先を数値で取得
        var position = target.offset().top;

        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');

        // URLにアンカーリンクを付加させない
        return false;
    });

    //ページトップへ
    $(window).scroll( function() {
        if ($(this).scrollTop() > 100 ) {
            $('.floating').show();
        } else {
            $('.floating').hide();
        }
    });
    $('.floating').click( function() {
        $('body,html').animate( {
            scrollTop: 0
        }, 500);
        return false;
    });

    $(window).scroll(function (){
        $('.skill_item').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            } else {
                $(this).css('opacity','0');
            }
        });
        $('.service_box').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            } else {
                $(this).css('opacity','0');
            }
        });
    });

});













