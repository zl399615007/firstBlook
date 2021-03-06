$(function (){
    var $li=$('#list').find('>li');
    var viewHeight=$(window).height();
    $('#main').css('height',viewHeight);
    slidePage();
    function slidePage(){
        var nowIndex=0;
        var nextprevIndex=0;
        var step=1/4;
        var bBtn=true;
        $li.on('touchstart',function (ev){
            if(!bBtn)return;
            bBtn=false;
            var touch=ev.originalEvent.changedTouches[0];
            var downY=touch.pageY;
            nowIndex=$(this).index();
            $li.on('touchmove.move',function (ev){
                var touch=ev.originalEvent.changedTouches[0];
                $(this).siblings().hide();
                if(touch.pageY<downY){
                    nextprevIndex=nowIndex==$li.length-1?0:nowIndex+1;
                    $li.eq(nextprevIndex).css('transform','translate(0,'+(viewHeight+touch.pageY-downY)+'px)');

                }else if(touch.pageY>downY){
                    nextprevIndex=nowIndex==0?$li.length-1:nowIndex-1;
                    $li.eq(nextprevIndex).css('transform','translate(0,'+(-viewHeight+touch.pageY-downY)+'px)');
                }else {
                    bBtn=true;
                }
                $(this).css('transform','translate(0,'+(touch.pageY-downY)*step+'px) scale('+(1-Math.abs((touch.pageY-downY))/viewHeight*step)+')');
                $li.eq(nextprevIndex).show().addClass('zIndex');
                ev.preventDefault();

            });
            $li.on('touchend.move',function (ev){
                var touch=ev.originalEvent.changedTouches[0];
                if(touch.pageY<downY){
                    $(this).css('transform','translate(0,'+(-viewHeight*step)+'px) scale('+(1-step)+')');
                }else if(touch.pageY>downY){
                    $(this).css('transform','translate(0,'+(viewHeight*step)+'px)  scale('+(1-step)+')');
                }
                $(this).css('transition','0.3s');
                $li.eq(nextprevIndex).css('transform','translate(0,0)');
                $li.eq(nextprevIndex).css('transition','.3s');
                $li.off('.move');

            })

        });
        $li.on('transitionEnd webkitTransitionEnd',function (ev){
            if(!$li.is(ev.target))return;

            resetFn();
        });
        function resetFn(){
            $li.eq(nextprevIndex).removeClass('zIndex').siblings().hide();
            $li.css('transition','');
            $li.css('transform','');
            
            bBtn=true;
        }

    }


})