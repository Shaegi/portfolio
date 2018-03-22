$(document).bind('mousewheel', function(e){
  var delta = e.originalEvent.wheelDelta;
  if(delta > 0){
    changeSlide(state["currentSlide"]-1,"down");
  }
  else{
    changeSlide(state["currentSlide"]+1, "up");
  }
});


var state = {
  "currentSlide" : 0,
  "scrollable": false
}

var elements = [
  {"name":"Start","link":"start"},
  {"name":"Projekte","link" :"projects"},
  {"name":"Über mich","link":"about"},
  {"name":"Meilensteine","link":"milestones"}
];

var tl = new TimelineLite();

createSlider();
setSlideActive();
getAnchor();

function getAnchor(){
  let url = window.location.hash.substring(1);
  switch(url){
    case "start":
      changeSlide(0,"up");
      break;
    case "projects":
      changeSlide(1,"up");
      break;
    case "about":
      changeSlide(2,"up");
      break;
    case "milestones":
      changeSlide(3,"up");
      break;
    default:
      changeSlide(0,"up");
      break;
  }
}

function createSlider(){
  let slider = document.getElementById("slider");
  for(let i = 0, iMax = elements.length; i < iMax; i++){
      let ele = elements[i];
      let slide = document.createElement("div");
      slide.className = "slide";
      slide.dataset.slideId = i;
      slider.append(slide);
      createSlideEvents(slide,i);
      if(i < (iMax-1)){
        let slideLine = document.createElement("div");
        slideLine.className = "slideLine";
        slideLine.dataset.slideLineId = i;
        slider.append(slideLine);
      }
  }
}

function setSlideActive(){
  let start = state["currentSlide"]
  let slideEle = $(".slide");
  let slideLineEle = $(".slideLine");
  for(let i = 0, iMax = start; i <= iMax; i++){
    $(slideEle[i]).addClass("slide--active");
    $(slideLineEle[i-1]).addClass("slideline--active");
    if(i+1 == iMax || i == iMax){
      repositionSlideDescriptionActive(slideEle[i],elements[i].name);
    }
  }
}

function createSlideEvents(slide, id){
  $(slide).click(function(){
    if(state.currentSlide < id){
      changeSlide(id,"up");
    }else{
      changeSlide(id,"down");
    }
  });
  $(slide).hover(function(){
    showSlideDescription(slide,elements[id].name);
  });
  $(slide).mouseleave(function(){
    hideSlideDescription();
  });
}


function changeSlide(id, direction){
  let currentSlide = state["currentSlide"];
  if(currentSlide == id ||id < 0 || id > 3 || tl.isActive() || state.scrollable){
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
  state["currentSlide"] = id;
  let url = window.location.pathname;
  self.location.href = url + "#" + elements[id].link;
  setSlideActive();
}
function resetSlide(){
  for(i = 0; i<=state["currentSlide"]; i++){
    $(".slideLine").removeClass("slideline--active");
    $(".slide").removeClass("slide--active");
  }
}

function showSlideDescription(slide, descriptionText){
  var slidePos = slide.getBoundingClientRect();
  var des = document.getElementById("slidedescription");
  des.innerHTML = descriptionText;
  var desPos = des.getBoundingClientRect();
  des.style.left = (slidePos.left-desPos.width/2+slidePos.width/2)+"px";
  des.style.top = (slidePos.top-(desPos.height+10))+"px";
  des.style.opacity="1";
}

function repositionSlideDescriptionActive(slide,descriptionText){
  var slidePos = slide.getBoundingClientRect();
  var des = document.getElementById("slidedescription--active");
  des.innerHTML = descriptionText;
  var desPos = des.getBoundingClientRect();
  des.style.left = (slidePos.left-desPos.width/2+slidePos.width/2)+"px";
  des.style.top = (slidePos.top-(desPos.height+10))+"px";
}

function hideSlideDescription(){
  var des = document.getElementById("slidedescription");
  des.style.opacity="0";
}
