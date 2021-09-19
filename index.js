var readlinesync=require('readline-sync');//get the package

var score=0;//global variable
var username=readlinesync.question("What's your name ");
console.log("Welcome "+ username + " to DO YOU KNOW Abhinav");

function play(question,answer)
{
  var userAnswer= readlinesync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("RIGHT!");
    score++;
    console.log('Current score :'+ score);
  }
  else
  {
    console.log('WRONG!');
    console.log('Current score :'+ score);
  }

}
//list of objects
var questionBank=[
    {
    question:"Where do i live? ",
    answer:"motihari",
    },
    {
    question:"What's my dream company? ",
    answer:"amazon",
    },
    {
    question:"Which colour i likes most? ",
    answer:"black",
    },
    {
    question:"What's my girlfriend name? ",
    answer:"priya",
    },
    {
    question:"What's my birthday month? ",
    answer:"november",
    },

    ];

    var highScore=[
      {
       name:"Abhinav",
       score:5,
      },
      {
        name:"Bhagwaan",
        score:4,
      },
    ];

    for(var i=0;i<questionBank.length;i++)
    {
     var currentQuestion=questionBank[i];
      play(currentQuestion.question,currentQuestion.answer)
    }
  console.log('\n');
  console.log("YAY! YOU SCORED :" + score);
  console.log("-------------");
  console.log("List of top two scorers are ---");

  for(var i=0;i<highScore.length;i++)
  {
    var topScorer=highScore[i];
    if(topScorer.score < score)
    {
      console.log(username);
      console.log("score: " + score)

    }
    else
    {
    console.log(topScorer.name);
    console.log("score: " + topScorer.score);
    }
  }

