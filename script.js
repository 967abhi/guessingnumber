'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='π Correct Number!';
// document.querySelector('.number').textContent=13;
// document.querySelector('.guess').value=28;
// console.log(document.querySelector('.guess').value);
let secretNumber =Math.trunc(Math.random() *20)+1;

let score= 20;
let highScore=0;





document.querySelector('.check').addEventListener('click', function(){

    const guess=Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    //  When there is no input

    if(!guess){
        document.querySelector('.message').textContent = 'πNo number';
        
        
        
    }
    // when player wins 
    else if(guess === secretNumber){
        document.querySelector('.message').textContent='π Correct Number!';
        
         document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score>highScore){
            highScore =score;
            document.querySelector('.highscore').textContent =highScore;
        }

    }
    // When gues is to high 
    else if(guess>secretNumber){
            if(score>1){

        document.querySelector('.message').textContent='πToo High!';
        score--;
        document.querySelector('.score').textContent = score;
    }
        else{
            document.querySelector('.message').textContent='πYou lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    // when guess is too low 
    else if(guess<secretNumber){
        if(score>1){

            document.querySelector('.message').textContent='πToo low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
            else{
                document.querySelector('.message').textContent='πYou lost the game';
                document.querySelector('.score').textContent = 0;
            }
       
    }

});
////////////////////////////////////////////////////////////////////////////////
// codding challenge #1

/*Implement a game rest  functionality,so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. in the handler function ,restore intial value of the score  and number variables 
3.Restore  the initial  conditions  of the message , number ,score and guess input field
4.also restore the original color backgroundColor (#222) and number width 15rem
*/


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber =Math.trunc(Math.random() *20)+1;
    document.querySelector('.message').textContent='Start guessing.....';  
    document.querySelector('.score').textContent = score;  
    document.querySelector('.number').textContent = '?';  
    document.querySelector('.guess').value=' ';
    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

});