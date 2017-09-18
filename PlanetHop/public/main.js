//Site url:https://planethop-b319a.firebaseapp.com

'use strict';

var database = firebase.database();
var stage;
var circle;

window.onload = function() {

  //alert('Hello');
  //enterScore(2000, 'skyguy');
  //enterScore(2400, 'skyguy');
  init();

};

function init() {
  var stage = new createjs.Stage("demoCanvas");
  var circle = new createjs.Shape();
  createjs.Ticker.addEventListener("tick", handleTick);
  window.circle = circle;
  window.stage = stage;

  circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);
   stage.update();
  // createjs.Tween.get(circle, {loop: true})
  //   .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
  //   .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
  //   .to({alpha: 0, y: 125}, 100)
  //   .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
  //   .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
  // createjs.Ticker.setFPS(60);
  // createjs.Ticker.addEventListener("tick", stage);
    }

function enterScore(score, userName) {
  firebase.database().ref('highscores/' + userName).set({
    score: score
  });
}

function removeAllData() {
// deletes all data pushed so far
  var ref = new Firebase("myfirebase.com");
  ref.child(key).remove();
}
function pushData() {
  ref.push({key:val}, function(error){
  //do stuff after push completed
});
}
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('highscores/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
