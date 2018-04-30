 ;(function($){



        $(function(){

          $('.fix-selector').each(function(i, el){
            var elm = $(el),// arguments
                elmUrl = elm.attr('href'), // out of website url
                elmParent = elm.parents('.section-wrap'), // find tree top parents
                elmImgFill = elm.children('.images-fill'), // get bg elm
                bgUrl = elm.attr('data-bg-url'), // bg css url
                bgPos = elm.attr('data-pos'), // bg elm background position
                classItem = elm.attr('class').split(' '), // do text split to array
                //bgOri = classList.split(' '),
                loadStatusElm = $("<div>", {class: "load-status"}), // create element
                overlay = $('.panel-overlay'),
                hoverEffect = elm.attr('data-hover');// brhavior change bg color

              elmImgFill.css({
                backgroundImage: 'url('+bgUrl+')',
                backgroundPosition: ''+bgPos+''
                //backgroundColor: 'black',
              });//css
              elm.hover(function(i, el){
                elm.toggleClass(''+classItem[1]+' '+hoverEffect+'')
              }, function(){
                elm.toggleClass(' '+hoverEffect+' '+classItem[1]+'')
              });


            elm.click(function(e){
              var project = $('.section-project'),
                  loadingElm = project.find('.__load'),
                  ajaxElm = elm.next('a'),
                  ajaxStatus = elm.children('.load-status'),
                  ajaxUrl = ajaxElm.attr('data-load-url'),
                  scrollId = ajaxUrl.split(' ');
              project.find('a.ui-btn').attr('href', scrollId[1]).next().dequeue();
              e.preventDefault();
              function overlayHide() {
                $('body').css('overflow-y', 'auto').end();
                  overlay.fadeOut('300', function(){
                  project.mCustomScrollbar("scrollTo","top",{
                 scrollInertia: 300
                 });
                }).end();//fade func
                             }


              if(elm.next(ajaxElm).length > 0) {
               elm.append(loadStatusElm);
               loadStatusElm.fadeIn();
               setTimeout(function(){
               overlay.fadeIn(100);
                 loadingElm.load(ajaxUrl, function(){
                   project.toggleClass('in');
                   $('body').css('overflow-y', 'hidden');
                   loadStatusElm.fadeOut(100);

                });
                }, 400);
               overlay.click(function(e){

                project.scrollTop(0).removeClass('in');
                loadingElm.find('.ajax').detach(' > *');
                 overlayHide();

              });//next click
                project.find('i.close').click(function(e){
                overlayHide();
                 project.scrollTop(0).delay(1000).removeClass('in');
                 loadingElm.find('.ajax').detach(' > *');


              });//next click
             }else{
               setTimeout(function(){
                 location.assign(elmUrl);
               }, 400);
             }
             return false;


            }); //elm.click

          });//each func



          $(".images-fill").smoove({
          perspective: 600,
          offset: '15%',
          moveY: '15%',
            transformOrigin: '0% 50%',
            //rotate3d: '1, 0, 0, 180deg'

        });
        return false();
        });

      })(jQuery);
