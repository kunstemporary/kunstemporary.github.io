$(document).ready(function(){
  
  var circleSize = 100;
  
   var sounds = [
    {
      "name":"lightbulb",
      "url":"https://www.dropbox.com/s/lvgf1z5hpz94gae/lightbulb.wav?dl=1"
    },
    {
      "name":"plastic",
      "url":"https://www.dropbox.com/s/phoabkgo0ql626d/plastic.mp3?dl=1"
    },
    {
      "name":"blop",
      "url":"https://www.dropbox.com/s/01rcx9xeo9z3jzl/blop.wav?dl=1"
    },
    {
      "name":"page",
      "url":"https://www.dropbox.com/s/v9yxipzjzh4wyaz/page.wav?dl=1"
    },
    {
      "name":"buzz",
      "url":"https://www.dropbox.com/s/v3gkwjpwhvirqxn/buzz.mp3?dl=1"
    },
    {
      "name":"chrip",
      "url":"https://www.dropbox.com/s/rwf0sx885jjw14p/chirp.mp3?dl=1"
    },
    {
      "name":"sine",
      "url":"https://www.dropbox.com/s/ws4k6gwrafku8rl/sine.mp3?dl=1"
    },
    {
      "name":"clock",
      "url":"https://www.dropbox.com/s/c3xsi5zrhphqmqa/clock.mp3?dl=1"
    },
    {
      "name":"rocks",
      "url":"https://www.dropbox.com/s/36d9zfy95io53x8/rocks.mp3?dl=1"
    },{
      "name":"toilet",
      "url":"https://www.dropbox.com/s/9srmme6dx0yfp8u/toilet.mp3?dl=1"
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