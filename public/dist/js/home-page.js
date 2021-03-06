var lastY = 0;

window.addEventListener('scroll', function(){

  var nav = document.getElementById('MainNav');
  var yPosition = window.pageYOffset;

  if(yPosition > 100 && yPosition > lastY){
    nav.style.display='none';
    lastY = yPosition;
  }else if(yPosition <= lastY){
    nav.style.display='block';
    lastY = yPosition;
  }

});


document.getElementById('ShowMainNav').addEventListener('click',function(){

  var nav = document.querySelector('nav#MainNav ul');

  if (nav.style.display === "block") {
      nav.style.display = "none";
  } else {
      nav.style.display = "block";
  }

});

/*
var media = window.matchMedia("screen and (max-device-width : 450px)");
media.addEventListener('change',function(){

  var nav = document.querySelector('nav#mainNav ul');

  if(media.matches===false){
    nav.style.display = "block";
  }else{
    nav.style.display = "none";
  }

});
*/
/* Load Defered styles */
/*
var loadDeferredStyles = function() {
   var addStylesNode = document.getElementById("deferredStyles");
   var replacement = document.createElement("div");
   replacement.innerHTML = addStylesNode.textContent;
   document.body.appendChild(replacement)
   addStylesNode.parentElement.removeChild(addStylesNode);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame ||
  webkitRequestAnimationFrame || msRequestAnimationFrame;

if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
else window.addEventListener('load', loadDeferredStyles);
*/

/*window.addEventListener('scroll', function(){

  var nav = document.getElementById('MainNav');
  var yPosition = window.pageYOffset;

  if(yPosition > 10) {
    nav.style.display='none';
  }else{
    nav.style.display='block';
  }

});*/

//On scroll stop show nav?

document.getElementById('ToAbout').addEventListener(
  'click',
  function(e) {


    var el = document.getElementById('About');
    var rect = el.getBoundingClientRect();
    window.scrollTo({
      top: (rect.top + window.pageYOffset) - 60,
      behavior: "smooth"
    });

    history.pushState(null, null, '#ToAbout');
    e.preventDefault();
  }
);

document.getElementById('ToAboutNext').addEventListener(
  'click',
  function(e) {


    var el = document.getElementById('About');
    var rect = el.getBoundingClientRect();

    window.scrollTo({
      top: (rect.top + window.pageYOffset) - 60,
      behavior: "smooth"
    });

    history.pushState(null, null, '#ToAbout');
    e.preventDefault();
  }
);
/*
document.getElementById('ToProject').addEventListener(
  'click',
  function(e) {


    var el = document.getElementById('Project');
    var rect = el.getBoundingClientRect();
    window.scrollTo({
      top: (rect.top + window.pageYOffset) - 60,
      behavior: "smooth"
    });

    history.pushState(null, null, '#ToProject');
    e.preventDefault();
  }
);
*/

