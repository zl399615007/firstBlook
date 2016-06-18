var main=document.getElementById("main");
var oLis=document.querySelectorAll("#main>ul>li");
var desw=640;
var desh=960;
var winw=document.documentElement.clientWidth;
var winh=document.documentElement.clientHeight;
if(winw/winh<desw/desh){
    main.style.webkitTransform="scale("+winh/desh+")";
}else {
    main.style.webkitTransform="scale("+winw/desw+")";
};
[].forEach.call(oLis,function (){
   var oLi=arguments[0];
    oLi.index=arguments[1];
    oLi.addEventListener("touchstart",start,false);
    oLi.addEventListener("touchmove",move,false);
    oLi.addEventListener("touchend",end,false);
});
function start(e){
    this.startY=e.changedTouches[0].pageY;

};
function move(e){
    this.flag=true;
    var moveY=e.changedTouches[0].pageY;
    var movePos=moveY-this.startY;
    var index=this.index;//当前这张的索引；
    var lastItem=oLis.length-1;
    [].forEach.call(oLis,function (){
        if(index!=arguments[1]){
            arguments[0].style.display="none";
        }
        arguments[0].className="";
    });
    if(movePos>0){//下
        this.prevsIndex=index==0?lastItem:index-1;//获得上一张的索引

        var duration=-480+movePos;
        oLis[this.prevsIndex].style.webkitTransform="translate(0,"+duration+"px)";



    }else if(movePos<0){//上
        this.prevsIndex=index==lastItem?0:index+1;//获得下一张的索引
        var duration=480+movePos;
        oLis[this.prevsIndex].style.webkitTransform="translate(0,"+duration+"px)";

    }
    oLis[this.prevsIndex].className="zindex";
    oLis[this.prevsIndex].style.display="block";

    this.style.webkitTransform="scale("+(1-Math.abs(movePos/winh)*1/2)+") translate(0,"+movePos+"px)"

};
function end(e){
    if(this.flag) {
        oLis[this.prevsIndex].style.webkitTransform = "translate(0,0)";
        oLis[this.prevsIndex].style.webkitTransition="0.5s";
        oLis[this.prevsIndex].addEventListener("webkitTransitionEnd",function (){
            this.style.webkitTransition="";
        })
        this.flag=false;
    }
};
document.addEventListener("touchmove",function (e){

})