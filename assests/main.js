// let btnArray = Array.from())
// document.getElementsByClassName('gameBtn').addEventListener('click', btnClick())
// let button = document.getElementsByClassName('gameBtn')
// btnArray = btnArray.forEach(el => el.addEventListener('click', btnClick()))

// function btnClick(){
//     console.log('click')
//     document.getElementsByClassName('gameBtn').innerText = 'X'
// }

// function checkWinCondition(){
//     if(document.querySelectorAll('.gameBtnRow1').innerText === 'X' || 'O'){
//         alert('Winner Winner Chicken Dinner!!')
//     }
// }


class TicTacToe {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    gameSetup(){
        this.player1 = Math.round(Math.random())
        if(this.player1){
            this.player1= 'X'
            this.player2 = 'O'
        }else {
            this.player1 = 'O'
            this.player2 = 'X'
        }
        document.querySelector('.playerOverlay h1').innerText = `Through computer wizardry Player 1 has been assigned ${this.player1} and Player 2 has been assigned ${this.player2}`

        document.querySelector('.player1Display').innerText = 'Player 1: ' + this.player1

        document.querySelector('.player2Display').innerText = 'Player 2: ' + this.player2

        setTimeout(function(){
            document.querySelector('.playerOverlay h1').innerText = ''
            document.querySelector('.playerOverlay').style.display = 'none'
        }, 4000)
        localStorage.setItem('player1Wins', 0)
        localStorage.setItem('player2Wins', 0)

    }
    
    getButtons(){
        let turn = 0
        let winner = ''
        let gameButtons = Array.from(document.querySelectorAll('.gameBtn'))
        let winConditions = ['btn1A','btn1B','btn1C','btn2A','btn2B','btn2C','btn3A','btn3B','btn3C']

        let player1 = this.player1
        let player2 = this.player2
        gameButtons.forEach(el => {el.addEventListener('click', function(e){

            if(turn % 2 == 0){
                if(e.target.innerText == ''){
                    document.getElementById(`${e.target.id}`).innerText = `${player1}`
                    winConditions[winConditions.indexOf(e.target.id)] = player1
                    turn++
                    console.log(turn)
                }

            }
            else if(turn % 2 != 0){
                if(e.target.innerText == ''){
                    document.getElementById(`${e.target.id}`).innerText = `${player2}`
                    winConditions[winConditions.indexOf(e.target.id)] = player2
                    turn++
                    console.log(turn)
                }
            }

            if(( winConditions[0] == winConditions[1] && winConditions[0] == winConditions[2] ) || 
                ( winConditions[0] == winConditions[4] && winConditions[0] == winConditions[8] ) || 
                ( winConditions[0] == winConditions[3] && winConditions[0] == winConditions[6] )){
                    winner = winConditions[0]

            }
            else if(( winConditions[8] == winConditions[5] && winConditions[8] == winConditions[2] ) || 
                ( winConditions[8] == winConditions[7] && winConditions[8] == winConditions[6])){
                    winner = winConditions[8]

            }
            else if ( ( winConditions[4] == winConditions[1] && winConditions[4] == winConditions[7]) ||
                (winConditions[4] == winConditions[3] && winConditions[4] == winConditions[5])){
                    winner = winConditions[4]

            }
            else if (winConditions[2] == winConditions[4] && winConditions[2] == winConditions[6]){
                    winner = winConditions[2]
            }


            if(winner == 'X' || winner == 'O'){

                document.querySelector('.playerOverlay').style.display = 'flex'

                if(winner == player1){
                    document.querySelector('.playerOverlay h1').innerText = 'Player 1 Wins! Congratulations!'
                    localStorage.player1Wins++
                    document.querySelector('.player1Wins span').innerText = localStorage.player1Wins
                } 
                else if(winner == player2){
                    document.querySelector('.playerOverlay h1').innerText = 'Player 2 Wins! Congratulations!'
                    localStorage.player2Wins++
                    document.querySelector('.player2Wins span').innerText = localStorage.player2Wins
                }

                setTimeout(function(){
                    document.querySelector('.playerOverlay h1').innerText = ''
                    document.querySelector('.playerOverlay').style.display = 'none'
                    gameButtons.forEach(el => el.innerText = '')
                    winConditions = ['btn1A','btn1B','btn1C','btn2A','btn2B','btn2C','btn3A','btn3B','btn3C']
                    winner = ''
                    turn = 0
                }, 4000)
            }
            else if(turn == 9){
                console.log("it's working")
                document.querySelector('.playerOverlay').style.display = 'flex'
                document.querySelector('.playerOverlay h1').innerText = 'Draw!!'
                setTimeout(function(){
                    document.querySelector('.playerOverlay h1').innerText = ''
                    document.querySelector('.playerOverlay').style.display = 'none'
                    gameButtons.forEach(el => el.innerText = '')
                    winConditions = ['btn1A','btn1B','btn1C','btn2A','btn2B','btn2C','btn3A','btn3B','btn3C']
                    winner = ''
                    turn = 0
                }, 4000)

            }
        })})
    }

    
}

let newGame = new TicTacToe
newGame.gameSetup()
newGame.getButtons()