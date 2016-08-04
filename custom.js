function heroHeight(){
viewportHeight=$(window).height();
$('#heroImage').css({'height':viewportHeight});
}
$(function(){
heroHeight();
});
window.onresize=function(){
heroHeight();
}
