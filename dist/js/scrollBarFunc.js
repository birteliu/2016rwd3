(function($){
  $('.fix-selector').click(function(e){
    $('#__fix').mCustomScrollbar({
      theme: 'light-2',
      setLeft: '10px',
      scrollInertia: 0,
      autoDraggerLength: false,

      //              alwaysShowScrollbar: 2,
      //              documentTouchScroll: true,
      //              autoExpandScrollbar: true,
      //              mouseWheel:{ enable: true },
      scrollButtons:{enable:true},
     //
      mouseWheel:{
        preventDefault: true ,
        scrollAmount: 240,

      },
      advanced:{ updateOnImageLoad: true },
      keyboard:{ enable: true },
      keyboard:{ scrollAmount: 120 },
      advanced:{
        updateOnContentResize: true,
        //updateOnSelectorChange: ".ajax",
        //extraDraggableSelectors: ""
      },

    });
    return false;
  });


  $(document).on("click", "a[href^='#']",function(e){
    var href=$(this).attr("href"),target=$(href).parents(".mCustomScrollbar");
    if(target.length){
      e.preventDefault();
      target.mCustomScrollbar("scrollTo",href);
    }
    return false;
  });
})(jQuery);
