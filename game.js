let buttons=document.querySelectorAll(".button")
let output=document.getElementById("output")
let resetBut=document.querySelectorAll(".reset-but")
let count =0;
const draw=()=>{
  
  output.innerText="Game is Draw";
}
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turnx=true
output.innerText="Turn of X"
const disable=()=>{
  buttons.forEach((button)=>{
    button.disabled=true
  }
  )
}
const resetGame=()=>{
  enable();
}
resetBut.forEach((reset)=>{
  reset.addEventListener("click",()=>{
    resetGame();
  }
  )
}
)
const showWin=(winner)=>{
  disable()
  output.innerText=`The Winner is ${winner}`
}
const enable=()=>{
  buttons.forEach((button)=>{
    button.disabled=false;
    button.innerText="";
    output.innerText="Turn of X"
    turnx=true
    count=0
  }
    
  )
}
buttons.forEach((button)=>{
  button.addEventListener("click",()=>{
    console.log("clicked ");
    if (turnx){
      output.innerText="turn of O"
    }else{
     output.innerText="Turn of X"

    }
    if(turnx){
      button.innerText="x";
      turnx=false;
      
    }else{
    button.innerText="o";
    turnx=true;
    }
    button.disabled=true;
  
    count++;
    if (!(checkWin())){
      
    
    if (count===9){
      draw();
    }
    }
    
  
  }
  )
}
)

const checkWin=()=> {
  for (pattern of winPatterns){
    let pos1=buttons[pattern[0]].innerText;
    let pos2=buttons[pattern[1]].innerText;
    let pos3=buttons[pattern[2]].innerText;
    if (pos1!=""&& pos2!=""&& pos3!=""){
      if (pos1===pos2 && pos2===pos3){
      showWin(pos1);
      return true;
    };
    }

  }
  return false;
}