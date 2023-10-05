const $ball=document.getElementsByClassName("ball")
const $teamscore1=document.getElementById("score-team1")
const $team1wickets=document.getElementById("wickets-team1")
const $team2score=document.getElementById("score-team2")
const $team2wickets=document.getElementById("wickets-team2")
const resetbutton=document.getElementById("reset")
const strikebutton=document.getElementById("strike")

var team1score = 0
var team2score = 0
var team1wickets = 0
var team2wickets = 0

var ballsfaced=0
var turn=1

function finished(){
    if(team1score>team2score) alert("India wins");
    if(team1score<team2score) alert("Pak wins");
}

const po=[0,1,2,3,4,5,6,"W"]
strikebutton.onclick = () => {
    ballsfaced++;
     if(turn===1){
         var score = po[Math.floor(Math.random()* po.length)]
         console.log(score)
        if (score=== "W"){
            team1wickets++
            $team1wickets.innerText = team1wickets
            document.querySelector(`.ball:nth-child(${ballsfaced})`).innerHTML = "W"
        }
        else{
            team1score+=score
            document.querySelector(`.ball:nth-child(${ballsfaced}`).innerHTML = score
           $teamscore1.innerText = team1score
            
        }
        if(ballsfaced==6||team1wickets==2){
            turn=2
            ballsfaced=0
         }
     }
    
    
     

     else if(turn===2){
        var score = po[Math.floor(Math.random()* po.length)]
        console.log(score)
       if (score=== "W"){
           team2wickets++;
           $team2wickets.innerHTML = team2wickets
           document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = "W"
       }
       else{
        team2score+=score
        document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
        $team2score.innerText = team2score
       }
       console.log(ballsfaced)
       if(ballsfaced==6||team2wickets==2){
        turn=3
        finished()
    }
      }
      
    }

resetbutton.onclick = () => {
    window.location.reload()
}
    
    

 


