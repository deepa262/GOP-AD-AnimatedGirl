 $(function(){
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
  // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  $("#pi").on("click", function(){
    console.log("pi button clicked");
          window.open("http://enstilar.com/pdf/enstilar-pi.pdf");
     WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_FPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");

  });
          
  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3200){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}

// Begin non-ISI animation code

function frame1eye1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_eye1, 1, {opacity:0} , '+=0.5')
     .to(frame1, 1, {opacity:0})
}
function frame1eye2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_eye2, 1, {opacity:0})
     .to(frame1_eye1, 1, {opacity:0})
}
function frame1eye3Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_eye3, 1, {opacity:0})
     .to(frame1_eye2, 1, {opacity:0})
}
function frame1systemAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_system, 1, {opacity:0})
     .to(frame1_eye3, 1, {opacity:0})
}
function frame1eye4Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame1_eye4, 1, {opacity:0})
     .to(frame1_system, 1, {opacity:0})
}
function frame1system11Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl  
      .from(system, 1, {opacity:0})
      .from(new1, 1, {opacity:0}, '-=2')
}
function frame1system1Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .to(frame1_eye4, 1, {opacity:0})
    .to(new1, 0.6, {left:-1080,opacity:0}, '+=0.6')
}
function frame2Appear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2, 1, {left:1080,opacity:0}, '-=0.4')
.to(frame2, 0.6, {right:1000,opacity:1}, '-=1')
}
function frame2toysAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
  .from(frame2_toy1, 1, {opacity:0}, '-=0.5')
     .from(frame2_toy2, 1, {opacity:0} , '-=0.5')
     .from(frame2_toy3, 1, {opacity:0}, '-=0.5')
     .from(frame2_toy4, 1, {opacity:0}, '-=0.5')
     .from(frame2_toy5,  1, {opacity:0}, '-=0.5')
     .from(frame2_toy6, 1, {opacity:0}, '-=0.5')
     .from(frame2_toy7,  1, {opacity:0}, '-=0.5')
     .from(frame2_toy8, 1, {opacity:0}, '-=0.5')
    
      .from(frame2_hands1, 0.5, {opacity:0})
       .from(frame2_hands2, 0.5, {opacity:0})
       .from(frame2_hands3, 0.5, {opacity:0})
       .from(frame2_hands4, 0.5, {opacity:0})
       .from(frame2_hands5, 0.5, {opacity:0})
       .from(frame2_hands6, 0.4, {opacity:0})
       .from(frame2_hands7, 0.4, {opacity:0})
}
  function textcolorAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time, repeat:10});
  tl
  .from(frame2_colortext, 1, {opacity:0})
 .to(frame2_colortext, 1, {opacity:1}, '-=1')
}
function animate(){
    frame1eye1Appear(0);
    frame1eye2Appear(3);
    frame1eye3Appear(5);
    frame1systemAppear(7);
    frame1eye4Appear(8);
    frame1system11Appear(8);
    frame1system1Appear(8);
    frame2Appear(10);
    frame2toysAppear(11);
    textcolorAppear(19);
 
}
// End non-ISI animation code

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}

animate();
