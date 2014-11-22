var curve1 = new CurveAnimator(
  [-50,-135], [140,-135],
  [-50,-235], [140,-235]
);
var curve2 = new CurveAnimator(
  [140, -135], [380,-65],
  [140, -235], [380,-165]
);
var curve3 = new CurveAnimator(
  [380, -65], [660, -85],
  [380, -165], [660, -185]
);

var o = document.getElementsByClassName("animation-target")[0];
o.style.position = 'absolute';

curve1.animate(1, function(point,angle){
  o.style.left = point.x+"px";
  o.style.top  = point.y+"px";
  o.style.transform =
    o.style.webkitTransform =
    o.style.MozTransform =
    "rotate("+angle+"deg)";
});

setTimeout(function(){
  curve2.animate(1, function(point,angle){
  o.style.left = point.x+"px";
  o.style.top  = point.y+"px";
  o.style.transform =
    o.style.webkitTransform =
    o.style.MozTransform =
    "rotate("+angle+"deg)";
});
}, 1000);
setTimeout(function(){
  curve3.animate(1, function(point,angle){
  o.style.left = point.x+"px";
  o.style.top  = point.y+"px";
  o.style.transform =
    o.style.webkitTransform =
    o.style.MozTransform =
    "rotate("+angle+"deg)";
});
}, 2000);