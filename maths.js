var answer;
var score;
var backgroundImages= [];

function nextQuestion() {
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById('n1').innerHTML = n1;
  const n2 = Math.floor(Math.random() * 6);
  document.getElementById('n2').innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer(){

  const prediction = predictImage();
  console.log(`answer : ${answer}, prediction : ${prediction}`);

  if (prediction == answer){
    score++;
    console.log(`Correct. Score ${score}`);
    if(score <=6){
    backgroundImages.push(`url('images/background${score}.svg')`);
    document.body.style.backgroundImage = backgroundImages;
  }

    else{
      alert('Jawaban telah terisi semua, yeayy. Ingin mengulang??')
      score = 0;
      backgroundImages = [];
      document.body.style.backgroundImage = backgroundImages;
    }
  }else{
    if(score != 0){score--;}

    score--;
    console.log(`Wrong. Score ${score}`);
    alert('Yah gagal semua, dicoba lagi ya')
    setTimeout(function(){
      backgroundImages.pop();
      document.body.style.backgroundImage = backgroundImages;
    }, 1000);
  }
}
