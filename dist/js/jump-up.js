$(function(){
    $(window).on('scroll', function(){  //on可以替換為bind,捲動scroll後有函數function
        var w = $(document),  
            hero = $('header'),
            wScrollTop = w.scrollTop(),  //距離
            heroPos = hero.height();  
//        if(hero.length != 0 &&  wScrollTop > heroPos) {  //如果header元素不為0,且捲動高度大於hero的position(高度)
//            $('#top').stop(true, true).slideDown(100);
//        } else{
//            $('#top').stop(true, true).slideUp(100);
//
//        };// if
        $(function(){
            var   a = $('article'),
                s = $('.scrollMagic'),
                p = $('#page'),
                ph = p.height(),
                sh = s.height(),
                ah = a.height(),
                aPos = a.offset().top,
                targetElm = $('.page-info');


            if(targetElm.length !== 0 ){
                /*panel 5 + header  = 6*/
                if(wScrollTop > ph - ($('body').height() + targetElm.height())){
                    targetElm.stop(true, true).addClass('slideUp').next().dequeue();
                }else{
                    targetElm.removeClass('slideUp').next().dequeue();
                }

            }else {
                // if(doc.scrollTop() > ph - ($('body').height() + targetElm.height()) && targetElm.length >= 1){
                //    targetElm.stop(true, true).addClass('slideUp').next().dequeue();
                // }else{
                //    targetElm.removeClass('slideUp').next().dequeue();
                // }
                $('*').next().dequeue(); //dequeue入列 queue排列
            };


        });
    });//on scroll
});