;(function($){
   var push = $('#push'),
       menu = $('.fd-menu');
  var overlay = $('<div></div>', {class: 'menu-overlay'});
  overlay.css({
    position: 'fixed',
    width: '100%',
    minHeight: '100vmin',
    //display: 'none',
   top:0,
    right:0,
    left: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: '0',
    pointerEvents: 'painted',
    zIndex: '-1',
   });

  push.bind('click', function(e){
    e.preventDefault();
     
      push.stop(true, true).toggleClass('close');
    if(push.is('.close')){
      openMenu();
    }else{
      closeMenu();
    }
    if(menu.is('.open')){
      overlay.click(function(){
        $('body').css('overflow-y', 'auto');
       menu.removeClass('open').addClass('close'); 
      push.removeClass('close');
      overlay.fadeOut();
        
      });//menu click
      menu.find('li a').click(function(){
        e.preventDefault();
        setTimeout(function(){
        $('body').css('overflow-y', 'auto');
       menu.removeClass('open').addClass('close'); 
      push.removeClass('close');
      overlay.fadeOut();
      }, 400);//timeout   
      });//menu click
    }
   return false;
  });
   
  function openMenu(){
       overlay.prependTo(menu).fadeIn();
       menu.stop(true, true).toggleClass('open').after(function(){
         $('body').css('overflow-y', 'hidden'); 
         
       });
       
  }
  
  function closeMenu(){
    overlay.fadeOut();
     menu.removeClass('open').addClass('close').after(function(){
         $('body').css('overflow-y', 'auto'); 
       });
  }
      

})(jQuery);