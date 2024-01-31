function loader (){
  var tl = gsap.timeline();
tl.to("#loader #yellow1",{
 top: "-100%",

 duration:1,
})
tl.to("#loader video",{
  top: "-100%",
  delay:1,
  duration:1,
 })
 tl.to("#loader #yellow2",{
  top: "-100%",
  duration:1,
 })
 tl.to("#loader",{
  top: "-100%",
  display:"none",
  opacity: 0
 })
}

loader()


function loco(){
  gsap.registerPlugin(ScrollTrigger);

  
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


  document.querySelector("#rap").addEventListener("click",()=>{
    locoScroll.scrollTo(0);
  })

}
loco();

function imgchan(){
  
let page_two = document.querySelector("#page_two");
let elems_heading = document.querySelectorAll("#elems");
elems_heading.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var img = e.getAttribute("data-image");
    page_two.style.backgroundImage =  `url(${img})`;
  })    
 
})
}
imgchan();


function menu(){
  var upper = document.querySelector("#upper");
var flag = true;
var sqr = document.querySelector("#square img").addEventListener('click', function(){
if(flag == true){
  gsap.to("#square img",{
    rotate:"-45deg"
  })
  gsap.to("#nav_sec>div a h3",{
    x:0,
    stagger:.2,
    duration:1
  })
  gsap.to("#upper",{
    y:"0%"
  })
 flag = false;

 gsap.to("#page_one #upper a h3",{
  opacity:1,
  duration: 2,
  stagger:0.5
 })

 }
 else{
  gsap.to("#square img",{
    rotate:"0deg"
  })

  gsap.to("#nav_sec>div a h3",{
    x:150,
    stagger:.1
  })
  flag = true;
  gsap.to("#upper",{
    y:"-100%"
  })

  gsap.to("#page_one #upper a h3",{
    opacity:0,
    duration: 0,
   })

 }

});
}
menu();

