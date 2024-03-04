const winpatterns=[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];



let btn=document.querySelectorAll(".box");
let winner=document.querySelector(".winner");
let reset=document.querySelector(".reset");
let turnX=true;
let gameOver=false;


const showwinner=(pos)=>{
    btn[pos[0]].style.backgroundColor="#38b000";
    btn[pos[1]].style.backgroundColor="#38b000";
    btn[pos[2]].style.backgroundColor="#38b000";
    gameOver=true;
    winner.innerHTML=" Winner is "+btn[pos[0]].innerHTML;
}

const checkwin = () =>{ 
    for(let x of winpatterns)
    {
        let val1=btn[x[0]].innerHTML;
        let val2=btn[x[1]].innerHTML;
        let val3=btn[x[2]].innerHTML;
        if(val1===val2 && val2==val3 && val3!="")
        {
            // console.log(x[0] , x[1] , x[2]); 
            // console.log(val1,val2,val3);
            // console.log("win");
            showwinner(x);
            break;
        }
    }
}

const draw=()=>{
    for(let i=0;i<btn.length;i++)
    {
        if(btn[i].innerHTML=="")return false;
    }
    return true;
}


btn.forEach( (box) =>{
    box.addEventListener("click" , () =>{
        if(gameOver)return;
        
        
        if(turnX)
        {
            box.innerHTML="X";
            turnX=!turnX;
            box.style.color="#8338ec";
        }
        else{
            box.innerHTML="O";
            turnX=!turnX;
            box.style.color="#dc2f02";
        } 


        box.disabled=true;
        checkwin(); 

        if(draw())
        {
            winner.innerHTML="Match is Draw";
            return;
        }
    });
});


//reset game

reset.addEventListener( "click" , ()=>{
    gameOver=false;
    turnX=true;
    winner.innerHTML="";
    
    
    btn.forEach( (box) =>{
        box.innerHTML="";
        box.disabled=false;
        box.style.backgroundColor="white";
    })
})



