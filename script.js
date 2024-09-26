console.log("Hello")
let humanScore=0;
let computerScore = 0;

function getRandomInt()
{
    const randomNumber = Math.floor(Math.random()*3);
    //console.log("Random number:", randomNumber)

    if(randomNumber==0){
        return "rock";
    }
    else if(randomNumber==1)
    {
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getComputerChoice(){
    let c= getRandomInt();
    return c;
}


function getHumanChoice(){
    let humanchoice = prompt("Enter a number among 1, 2 and 3:")
    if (humanchoice == 1){
        return "rock";
    }
    else if (humanchoice==2){
        return "paper";
    }
    else{
        return "scissors";
    }
}



// let human = getHumanChoice();
// let computer = getComputerChoice();

// console.log("Human choice: ", human);
// console.log("Computer's choice:", computer);

function playRound(human, computer){
    
    if(human=="rock"){
        if(computer=="rock"){
            console.log("Game Draw");
        }
        else if (computer=="paper"){
            console.log("Computer wins. Paper beats rock");
            computerScore++;
        }
        else{
            console.log("Human wins, Rock beats scissors");
            humanScore++;
        }
    }

    else if (human=="scissors"){
        if(computer=="scissors"){
            console.log("Game Draw");
        }
        else if (computer=="rock"){
            console.log("Computer wins. Rock beats scissors");
            computerScore++;
        }
        else{
            console.log("Human wins, scissors beats paper");
            humanScore++;
        }
    }

    else {
        if(computer=="paper"){
            console.log("Game Draw");
        }
        else if (computer=="Scissors"){
            console.log("Computer wins. scissors beat paper");
            computerScore++;
        }
        else{
            console.log("Human wins, paper beats rock");
            humanScore++;
        }
    }

    console.log("Human Score: ", humanScore);
    console.log("computer score:", computerScore);
}

for(let i=0;i<5; i++)
{
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log("Human choice: ", human);
    console.log("computer choice:", computer);

    playRound(human, computer);
}

