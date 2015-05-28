var scoresList = [];
var topFive = [];

function compareNumbers(a, b){
  return b - a;
}

var scores = document.getElementsByClassName("score");

for (var i = 0; i < scores.length; i++){
  var value = Number(scores[i].innerHTML.split(" ")[0]);
  scoresList.push(value);
}
//Sort the array of scores in descending order
scoresList.sort(compareNumbers);

//Put the top five scores in the topFive array
for(var i = 0; i < 5; i++){

  topFive.push(scoresList[i]);
 
}

//If a score is in the top five, color it red so that it can be obvious on the page
for (var i = 0; i < scores.length; i++){
  var value = Number(scores[i].innerHTML.split(" ")[0]);
  if (topFive.indexOf(value) != -1){
      scores[i].style.color = "red";
      scores[i].style.fontWeight = "bold";
  }
}


