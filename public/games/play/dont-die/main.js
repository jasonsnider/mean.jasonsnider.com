var dontDie = (function(){

  //Scoring and spawning stops on true
  var gameOver=true;

  //var domain='http://localhost:3000';
  //var domain='https://jasonsnider.com';


  //Locks controls when true
  var waiting=true;

  var canvas=document.getElementById('game');
  var ctx=canvas.getContext('2d');
  var body=document.querySelector('body');
  canvas.height=Math.max(body.scrollHeight, body.offsetHeight);
  canvas.width=Math.max(body.scrollWidth, body.offsetWidth);

  //Set the players initial direction
  var score = 0;
  var scoreText = 'Score: ' + score;
  var splashText=null;
  var isSplash=true;

  //player
  var player={
    color:'#ffffff',
    interval:null,
    h:25,
    w:25,
    x:0,
    y:0,
    dir: 'right'
  };
  player.y = (canvas.height - (player.h + 160));

  //evil spawns
  var spawns = {}
  var evil={
    x:0,
    y:20,
    w:5,
    h:5
  };

  var spawns=[];
  var speeds = [2, 1.1, 1, .9, .8, .7, .6, .5, .4, .3, .1];
  var lastThousand = 0;

  function postScore(score){

    var url = domain + '/api/scores/dont-die';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    //Be sure to add a json header to form, otherwise body parser will freak out
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    //Convert formData to JSON
    var object = {};
    object['score'] = score;

    xhr.send(JSON.stringify(object));
    xhr.onload = function(){
      //let data = JSON.parse(xhr.response);
      //console.log(data);

      writeGameOver();
      //setTimeout(function(){splashScreen()}, 8000);
      setTimeout(canvas.addEventListener('click', function(){location.reload()}), 1000);
      setTimeout(function(){location.reload()}, 8000);
    }

  }

  function getScores(){
    
    var url = domain + '/api/scores/dont-die';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = function(){

      var data = JSON.parse(xhr.response);
      var defaultScores = [10000,9000,8000,7000,6000,5000,4000,3000,2000,1000];
      var scores = [];

      for(var i=0; i<data['scores'].length; i++){
        if(data['scores'][i].score!==undefined){
          scores.push(data['scores'][i].score);
        }
      }

      for(var x=0; x<defaultScores.length; x++){
        scores.push(defaultScores[x]);
      }

      scores.sort(function(a, b){return b - a});

      var scoreList = '<div class="color:#FFF;"><ul>';
      for(var i=0; i<10; i++){
        scoreList = scoreList + '<li>' + scores[i]+ '</li>';
      }
      scoreList = scoreList + '</ul></div>';

      var splashText = '<h1>Don\'t Die</h1>' +
      '<h2>Top Scores</h2>' +
      scoreList +
      '<div class="to-start">Touch the screen to play</div>';

      document.getElementById('score').innerHTML = splashText;
    }

  }


  //Pick a random hex color
  function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  //change the players color every 1000 points or so
  function setPlayerColor(){
    if(score < 1000 ){
       player.color= '#ffffff';
    }else if(score > (lastThousand+1000)){
      lastThousand = score;
      player.color = randomColor();
    }
  }

  function splashScreen(){
    isSplash=true;
    //getScores();
    document.getElementById('score').style.display = 'block';
    document.getElementById('game').style.display = 'none';

    /*
    score = score + 10;
    scoreText = 'Score: ' + score;
    writeScore();

    canvas.width = canvas.width;
    setTimeout(function(){
      waiting=false;
    },2000);

    ctx.font="50px monospace";
    // Print game over as a gradient
    var gradient=ctx.createLinearGradient(0,0, canvas.width ,0);

    gradient.addColorStop("0","white");
    gradient.addColorStop("0.5","yellow");
    gradient.addColorStop("1.0","red");

    // Fill with gradient
    ctx.fillStyle=gradient;
    ctx.textAlign="center";
    ctx.fillText("Don't Die",(canvas.width/2),200);

    splashText = setInterval(function(){

      if(ctx.fillStyle==='#000000'){
        ctx.fillStyle = '#ffffff';
      }else{
        ctx.fillStyle = '#000000';
      }

      ctx.font="25px monospace";
      ctx.fillText("Touch the screen",(canvas.width/2),260);
      ctx.fillText("or any key to play",(canvas.width/2),295);

      ctx.fillText("Touch the screen",(canvas.width/2),350);
      ctx.fillText("or any key to",(canvas.width/2),385);
      ctx.fillText("change direction",(canvas.width/2),420);

    },700);
    */

  }

  //Create a spawn at a random x-coord
  //This spawn will move along the y-coord
  function spawn(theSpawn){
    spawns[theSpawn]={};
    spawns[theSpawn].rect={
      x:Math.floor(Math.random()*canvas.width),
      y:0,
      w:evil.w,
      h:evil.h
    };
    spawns[theSpawn].y=0;

    var speed = [Math.floor(Math.random() * speeds.length)];

    //store each spawn in a master spawn object, kill off
    //each spawn when it (a) reaches the bottom of the
    //canvas or (b) collides with the player
    //A playre collision ends the game
    spawns[theSpawn].interval = setInterval(()=>{

        //clear the spawns previous position
        //and redraw at +1px
        ctx.clearRect(
          spawns[theSpawn].rect.x,
          spawns[theSpawn].rect.y,
          spawns[theSpawn].rect.w,
          spawns[theSpawn].rect.h
        );

        ctx.fillStyle = "yellow";

        spawns[theSpawn].rect={
          x:spawns[theSpawn].rect.x,
          y:(spawns[theSpawn].y++),
          w:spawns[theSpawn].rect.w,
          h:spawns[theSpawn].rect.h
        };

        ctx.fillRect(
          spawns[theSpawn].rect.x,
          spawns[theSpawn].rect.y,
          spawns[theSpawn].rect.w,
          spawns[theSpawn].rect.h
        );

        //If the spawn crosses the height of the canvas the
        //the player's score will increment and the spawn's
        //timer will clear
        if(spawns[theSpawn].rect.y>=canvas.height){

          if(gameOver === false){
              ctx.fillStyle = '#000';
              ctx.fillText(scoreText, canvas.width, 30);
              ctx.clearRect(canvas.width-200, 0, 200, 30);

              score = score + 10;
              scoreText = 'Score: ' + score;
              writeScore();
            }

            //clearInterval(window[theSpawn]);
            clearInterval(spawns[theSpawn].interval);
          }

          //Collision detection, adapted from
          //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
          if (
            player.x < spawns[theSpawn].rect.x + spawns[theSpawn].rect.w &&
            spawns[theSpawn].rect.x > player.x && spawns[theSpawn].rect.x < (player.x + player.w) &&
            player.y < spawns[theSpawn].rect.y + spawns[theSpawn].rect.h &&
            player.y + player.h > spawns[theSpawn].rect.y
          ) {

            waiting=true;

            //On collision clear the player's and colliding spawn's timers
            //set game over to true and print game over to the canvas
            clearInterval(player.interval);
            clearInterval(spawns[theSpawn].interval);
            gameOver = true;

            ctx.font="30px monospace";
            // Print game over as a gradient
            var gradient=ctx.createLinearGradient(0,0, canvas.width ,0);

            gradient.addColorStop("0","white");
            gradient.addColorStop("0.5","yellow");
            gradient.addColorStop("1.0","red");

            // Fill with gradient
            ctx.fillStyle=gradient;
            ctx.textAlign="center";
            ctx.fillText("Game Over!", (canvas.width/2) ,200);

            setTimeout(()=>{
              splashScreen();
            },5000);
            
            //postScore(score);
          }
      }, speed);
  }

  //Start the game
  function startGame(){
    isSplash=false;
    waiting=false;
    document.getElementById('score').style.display = 'none';
    document.getElementById('game').style.display = 'block';


    clearInterval(splashText);
    canvas.width = canvas.width;
    score=0;
    scoreText = 'Score: ' + score;
    writeScore();

    player.interval = setInterval(()=>{

      ctx.clearRect(player.x, player.y, player.w, player.h);

      if(player.x >= (canvas.width - player.w)){
        player.dir = 'left';
      }else if(player.x <= 0){
        player.dir = 'right';
      }

      if(player.x<(canvas.width - player.w) && player.dir=='right'){
        player.x++;
      }else{
        player.x--;
      }

      setPlayerColor();
      ctx.strokeStyle = player.color;
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.w, player.h);

    }, 6);

    //Create a new spawn every 400ms
    var spawner = setInterval(()=>{

      //Use psuedo-random strings to name the new spawns
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz";

      for (var i = 0; i < 10; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      //Play until game over then clear
      //the spawner
      if(gameOver===false){
        spawn(text);
      }else{
        clearInterval(spawner);
      }

    }, 400);
  }

  function writeGameOver(){

    ctx.font="40px monospace";
    // Print game over as a gradient
    var gradient=ctx.createLinearGradient(0,0, canvas.width ,0);

    gradient.addColorStop("0","white");
    gradient.addColorStop("0.5","yellow");
    gradient.addColorStop("1.0","red");

    // Fill with gradient
    ctx.fillStyle=gradient;
    ctx.textAlign="center";
    ctx.fillText("Game Over!", (canvas.width/2) ,200);

    ctx.font="20px monospace";
    ctx.fillText(score + ' pts' , (canvas.width/2) ,250);
    //document.getElementById('Start').style.display='inline-block';
  }

  //Writes the score back to the canvas
  function writeScore(){
    ctx.font="30px monospace";
    ctx.fillStyle="#fff";
    ctx.textAlign="end";
    ctx.fillText(scoreText, canvas.width , 30);
  }

  return {

    setGameOver: function(go){
      gameOver = go;
    },

    getGameOver: function(){
        return gameOver;
    },

    //Controls - change direction on keyup
    changeDir: function(){
      if(player.dir === 'left'){
        player.dir = 'right';
      }else if(player.dir === 'right'){
        player.dir = 'left';
      }
    },

    splash: function(){
      splashScreen();
    },

    startGame: function(){
      startGame();
    },

    controls: function(){


      //console.log(
      //  'splash = ' + isSplash +
      //  ' waiting = ' + waiting +
      //  ' gameOver = ' + this.getGameOver()
      //);

      if(isSplash===true){
        this.startGame();
        return this.setGameOver(false);
      }

      if(waiting === false){
        if(this.getGameOver() === true){
          this.startGame();
          return this.setGameOver(false);
        }else{
          return this.changeDir();
        }
      }
    }
  }

})();

window.addEventListener('keyup', function(){
  dontDie.controls();
});

window.addEventListener('touchstart', function(){
  dontDie.controls();
});

window.addEventListener('load', function(){
  dontDie.splash();
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}