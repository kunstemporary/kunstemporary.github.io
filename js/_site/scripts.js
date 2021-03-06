$(document).ready(function(){
  
  var circleSize = 100;
  
   var sounds = [
    {
      "name":"lightbulb",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/lightbulb.wav"
    },
    {
      "name":"plastic",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/plastic.mp3"
    },
    {
      "name":"blop",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/blop.wav"
    },
    {
      "name":"page",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/page.wav"
    },
    {
      "name":"buzz",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/buzz.mp3"
    },
    {
      "name":"chrip",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/chirp.mp3"
    },
    {
      "name":"sine",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/sine.mp3"
    },
    {
      "name":"clock",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/clock.mp3"
    },
    {
      "name":"rocks",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/rocks.mp3"
    },{
      "name":"toilet",
      "url":"https://dl.dropboxusercontent.com/u/41962190/sounds/toilet.mp3"
    }
   ];
  
  var audioObjects = [];
  
  $.each(sounds,function(i,v) {
       var $t = $(this)[0];
      
       var name = $t.name;
       var url = $t.url;
       audioObjects[i] = new Audio(url);
    
  } );
  
  
  
  
  $('.circle').each(function(){
    $(this).css('left',Math.floor( (Math.random() * $('.mycanvas').width()-circleSize)  + 1) );
    $(this).css('top',Math.floor( (Math.random() * $('.mycanvas').height()-circleSize)  + 1) );
    
    var randomSound = sounds[Math.floor(Math.random() * audioObjects.length)];
    console.log(randomSound);
    var mySound = new Audio(randomSound.url);
    
    $(this).on('click',function(){
      mySound.play();
    });
    
  })
  
  $('.draggable').draggable();
  
  //$('.fit-text').fitText();

  
});