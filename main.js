let myScore = 0;
let computerScore = 0;
let count = 0;

//generate computer choice
function computerChoice(){
    let choices =['rock' , 'paper' , 'scissor'];
    let i = Math.floor(Math.random()*3);
    return choices[i]
 }
  //shows play between computer and player
 function buttnClick(valuegiveninvaluee){
    count++ 
  let value = valuegiveninvaluee
  if( (value==='rock' && computerChoice()==='scissor')||(value==='paper'&& computerChoice()==="rock") || (value==='scissor'&& computerChoice()==="paper") ){
      console.log('you win')
    myScore++  
  }
  else if ((computerChoice()==='rock' && value ==='scissor')||(computerChoice() ==='paper'&& value ==="rock") || (computerChoice() ==='scissor'&& value ==="paper")){
      console.log('computer wins')
      computerScore++
  }
  else if((value===computerChoice()));{
     console.log('its a draw')
 }
 }
 

let buttons = document.getElementById('numbers'); //getting the div with all the buttons
buttons.addEventListener('click',function(e){ //Adding an event listener to listen when a button has been clicked
    const valuee=e.target.dataset.target     //this lines displays what user has selected e.g rock or paper or scissor
    let compDisplay=document.getElementById('computer-choice');
    compDisplay.innerHTML=`Computer choose:    ${computerChoice()}`
    let userDisplay= document.getElementById('your-choice');
    userDisplay.innerHTML = ` You Choose: ${valuee} `
    let results = document.getElementById('result');
    result.innerHTML = `computer: ${computerScore}, your score: ${myScore}`

     buttnClick(valuee)
     if(count===5){
            if(computerScore>myScore){
                
                console.log('computer takes it')
            
            }
            else if (myScore>computerScore){
                console.log('the player wins')
            }
            else{
                console.log('its a tie')
            }
            console.log(`computer: ${computerScore}, your score: ${myScore}`)
    count =0;
    computerScore=0;
    myScore=0;
    
 }

})


 
 
 

