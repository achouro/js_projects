console.log("Rock Paper Scissors")

function get_computer_choice(){
  var choice="";
  var nb= Math.random()*3;

  if(nb>=0 &&nb<1){ choice="Rock";}
  if(nb>=1 &&nb<2){ choice="Paper";}
  if(nb>=2 &&nb<3){ choice="Scissors";}
 

  return choice;
}


function get_human_choice(){

  var choice=prompt("Please input your choice:");

  choice= choice?.charAt(0).toUpperCase() + choice?.slice(1).toLowerCase();  
  
  return choice;

}



function play_round(human_selection, computer_selection){
  
  let winner="";
  
  if(human_selection===computer_selection){ winner="No one";}

  if(human_selection==="Rock"){
    if (computer_selection==="Scissors"){ winner="Human"; }
    else if (computer_selection==="Paper"){ winner="Computer";}
  }

  else if(human_selection==="Paper"){
    if(computer_selection==="Rock"){ winner="Human"; }
    else if(computer_selection==="Scissors"){winner="Computer";}
  }

  else if(human_selection==="Scissors"){
    if(computer_selection==="Paper"){winner="Human"; } 
    else if(computer_selection==="Rock"){ winner="Computer";}
  }
  
  return winner;
}

function play_game(){

  var computer_score=0;
  var human_score=0;
  var round_winner="";
  
  for(i=1; i<=5;i++){ 
    var  computer_selection=get_computer_choice();
    var human_selection=get_human_choice();
    console.log(human_selection, computer_selection);
  
    round_winner = play_round(human_selection, computer_selection);
    //console.log(round_winner)

    if(round_winner==="Human"){
      human_score+=1;
    }
    else if(round_winner==="Computer"){
      computer_score+=1;
    }  
   
    console.log(round_winner ," wins round!")
    console.log(` Human: ${human_score} | Computer: ${computer_score} `)

  }
  
  console.log(`Final Score: Human: ${human_score} | Computer: ${computer_score} `)
  if(human_score> computer_score){ console.log("Human wins game!")}
  if(human_score< computer_score){ console.log("Computer wins game!")}
  if(human_score===computer_score){ console.log("Game ends in a Draw!")}
}

console.log(play_game())
