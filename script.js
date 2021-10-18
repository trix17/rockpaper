 
const game = function(){
    let playerscore = 0 ;
    let computerscore = 0;
    let moves = 0;




    const playgame = function(){
        const rockbtn = document.querySelector('.rock');
        const paperbtn = document.querySelector('.paper');
        const scissorbtn = document.querySelector('.scissor');
        const playeroptions = [rockbtn, paperbtn,scissorbtn]
        const computeroptions = ['rock','paper','scissor']



        //Function to start playing the game 
        playeroptions.forEach(option => {
            option.addEventListener('click',function(){
                const movesleft = document.querySelector('.movesleft')
                moves++
                movesleft.innerText = `Moves Left:${10-moves}`;




                const choicenumber = Math.floor(Math.random()*3);
                const computerchoice= computeroptions[choicenumber];

                //F tocheck who wins
                winner(this.innerText, computerchoice)

                //10 moves game is over
                if(moves == 10){
                    gameover(playeroptions,movesleft)
                }




            })

        })

    }


    // Function to choose winnner

    const winner = function(player, computer){
        const result = document.querySelector('.result');
        const playerscoreboard = document.querySelector('.p-count');
        const computerscoreboard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player ==computer){
            result.textContent = "Tie"
        
        }
        else if (player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerscore++
                computerscoreboard.textContent = computerscore;

            }
            else{
                result.textContent = 'Player Won'
                playerscore++
                playerscoreboard.textContent = playerscore;
            }
        }


        else if (player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerscore++
                computerscoreboard.textContent = computerscore;

            }
            else{
                result.textContent = 'Player Won'
                playerscore++
                playerscoreboard.textContent = playerscore;
            }
        }


        else if (player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerscore++
                computerscoreboard.textContent = computerscore;

            }
            else{
                result.textContent = 'Player Won'
                playerscore++
                playerscoreboard.textContent = playerscore;
            }
        }
    }


    //Function when game is over 

    const gameover = function(playeroptions, movesleft){

        const choosemove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadbtn = document.querySelector('.reload');

        playeroptions.forEach(option => {
            option.style.display = 'none';
        })

        choosemove.innerText = 'Game Over'
        movesleft.style.display = 'none';


        if (playerscore > computerscore){
            result.style.fontSize = '2rem';
            result.innerText = 'You win the game'
            result.style.color = '#308D46';
        }
        else if (playerscore < computerscore){

            result.style.fontSize = '2rem';
            result.innerText = 'You lost the game'
            result.style.color = 'blue';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = ' Gmae tied '
            result.style.color = 'blue';
        }

        reloadbtn.innerText = 'Restart';
        reloadbtn.style.display = 'flex';
        reloadbtn.addEventListener('click',() => {
            window.location.reload();
        })
    }

    playgame();

}

game();





