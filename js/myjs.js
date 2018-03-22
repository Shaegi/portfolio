$(window).on('load', function () {
  document.getElementById("loading").style.display="none";
    $('#welcomeText').typeIt({
         strings: ["<span class='typerText webdesign'>Webdesigner</span>", "<span class='typerText artist'>3D-Artist</span>","<span class='typerText programmer'>Video-Editor</span>","<span class='typerText medieninformatiker'>Medieninformatiker.</span>"],
         speed: 100,
         breakLines: false,
         autostart:false
    });
});
$(document).bind('mousewheel', function(e){
  var delta = e.originalEvent.wheelDelta;
  if(delta > 0){
    changeSlide(currentSlide-1,"down");
  }
  else{
    changeSlide(currentSlide+1, "up");
  }
});
var currentSlide=0;
var scrollable=false;
var tl = new TimelineLite();
function changeSlide(id, direction){
  if(currentSlide == id ||id <0 || id >3 || tl.isActive() || scrollable){
    return false;
  }
  resetSlide();
  if(direction == "up"){
    tl.to("#container"+currentSlide, .7, {autoAlpha:0, x:"-150vw" ,ease: Circ.easeIn});
    tl.to("#container"+id, 0.3, {autoAlpha:1, x:0, ease: Circ.easeIn});
  }
  else{
    tl.to("#container"+currentSlide, .7, {autoAlpha:0, x:"150vw",ease: Circ.easeIn });
    tl.to("#container"+id, 0.3, {autoAlpha:1, x:0,ease: Circ.easeIn});
  }
  for(i = 0; i<=id;i++){
    document.getElementById("slide"+i).className+=" slideactive";
    if(i > 0)
    document.getElementById("slideline"+i).className+=" slidelineactive";
  }
  currentSlide=id;
}
function resetSlide(){
  for(i = 0; i<=currentSlide; i++){
    if(i>0)document.getElementById("slideline"+i).className="slideLine";
    document.getElementById("slide"+i).className="slide";
  }
}
function showSlideDescription(id){
  var slidePos = document.getElementById("slide"+id).getBoundingClientRect();
  var des = document.getElementById("des"+id)
  var desPos = des.getBoundingClientRect();
  des.style.left = (slidePos.left-desPos.width/2+slidePos.width/2)+"px";
  des.style.top = (slidePos.top-(desPos.height+10))+"px";
  des.style.opacity="1";
}
function hideSlideDescription(id){
  var des = document.getElementById("des"+id);
  des.style.opacity="0";
}
function expandProjectDescription(id){
  scrollable=true;
  document.getElementById('proj'+id).style.display="block";
  document.getElementById('projectList').style.display="none";
  document.getElementById('slider').style.display="none";
  document.getElementById('logo').style.display="none";
  document.getElementById('logo').style.display="none";
  document.getElementById('projHeadline').style.display="none";
}
function closeProjectDescription(id){
  scrollable=false;
  document.getElementById('projectList').style.display="block";
  document.getElementById('proj'+id).style.display="none";
  document.getElementById('slider').style.display="block";
  document.getElementById('logo').style.display="block";
  document.getElementById('projHeadline').style.display="block";
}
