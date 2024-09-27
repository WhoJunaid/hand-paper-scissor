let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper" ,"scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("draw");
    msg.innerText = "Game was Draw! Play Again"
    
    msg.style.backgroundColor ="#081b31"
}
let scoreOfUser = document.querySelector("#user-score");
let scoreOfComp = document.querySelector("#comp-score");

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    const showWinner =(userwin) => {
        if (userwin == true) {
            
            msg.innerText = (`You win! your ${userChoice} beats computers ${compChoice} `);
            msg.style.backgroundColor ="green";
            userScore ++;
            console.log(userScore);
            scoreOfUser.innerText = userScore;

        } else {
            console.log("you lose!");
            msg.innerText = (`You Lose! computers ${compChoice} beats your ${userChoice
            }`)
            compScore++;
            scoreOfComp.innerText = compScore;
            
            msg.style.backgroundColor ="red"

            
        }
    }



if (userChoice===compChoice) {
    drawGame ();

    
} else {
    let userWin = true ;
     if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
        
     } else if (userChoice === "paper") {

        userWin = compChoice === "scissors" ? false : true;
     }else {
       userWin =  compChoice === "rock" ? false :true;
     }
     showWinner(userWin)

}

}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("Id");

       

        playGame(userChoice);
    })
})