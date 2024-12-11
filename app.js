const nextBtn = document.querySelector('.nextBtn');
const introEl = document.querySelector('.first');
const playerNameEl = document.querySelector('.second');
const thirdEl = document.querySelector('.third');

const playerCountVal = document.getElementById('playerCount');
const playerDivEl = document.querySelector('.players')

const startBtn = document.querySelector('.startBtn');
const backBtn = document.querySelector('.backBtn');

const actualPlayersEl = document.querySelector('.actualPlayers');


const audioElement = document.getElementById('audioElement'); 
const gameOverSound = document.getElementById('gameOverSound'); 
const killaSound = document.getElementById('killaSound'); 
let firstClick = 0;


const shuffleBtnDivEl = document.querySelector('.shuffleBtnDiv');
const shuffleBtn = document.querySelector('.shuffleBtn');
const resetBtn = document.querySelector('.resetBtn');

const singlePlayerRowDiv = document.querySelector('.wasabi');




// Add an event listener to the button playButton.addEventListener('click', function() { audioElement.play(); // Play the audio });


let playerCount = 0;
let playersArray = [];

function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements 
    } 
    return array; 
} 





nextBtn.addEventListener('click', () => {
    audioElement.play();
    introEl.classList.toggle('hide');
    playerNameEl.classList.toggle('hide');
    playerCount = parseInt(playerCountVal.value, 10);

    for ( let i = 0; i < playerCount ; i++ ){
        // LET PUT A BORDER AROUND THIS -------DONE ( RED )
        let singlePlayerDiv = document.createElement('div');
        singlePlayerDiv.classList.add('thirdly');
        
        // let div = document.createElement('div');
        // div.innerHTML = `${i + 1}. `

        let input = document.createElement('input');
        input.classList.add(`player${i}`);
        input.classList.add('playa');

        let dropdown = document.createElement('select');
        dropdown.id = 'numberDropdown';
        // dropdown.text = dropdown[i].value;


        // Populate the dropdown with numbers 1 to 20 
        for (let i = 1; i <= 20; i++) { 
            const option = document.createElement('option'); 
            option.value = i; 
            option.textContent = i; 
            dropdown.appendChild(option); 
        }

        // dropdown.innerHTML = i;
        console.log(dropdown[i].value);
        // console.log(dropdown.value);
        

        
        // singlePlayerDiv.appendChild(div);
        singlePlayerDiv.appendChild(input);
        singlePlayerDiv.appendChild(dropdown);
        playerDivEl.appendChild(singlePlayerDiv);

        
        startBtn.addEventListener('click', () => {
            audioElement.play();
            let playerName = input.value.toUpperCase();
            let playerNumber = dropdown.value;
            let finalPlayer = playerName + ' ' + playerNumber;
            playersArray.push(finalPlayer);
            

            if ( i === playerCount - 1 ){
                playerNameEl.classList.toggle('hide');
                thirdEl.classList.toggle('hide');

                for (let i = 0; i < playersArray.length; i++){
                    let totalDivEl = document.createElement('div');
                    totalDivEl.classList.add('wasabi');
                    let plusBtn = document.createElement('button');
                    plusBtn.classList.add('scoreBtn');

                    let minusBtn = document.createElement('button');
                    minusBtn.classList.add('scoreBtn');

                    let divEl = document.createElement('div');
                    let numberEl = document.createElement('div');
                    


                    let scoreEl = document.createElement('div');
                    scoreEl.classList.add('scoreEl');
                    let playerScore = 0;

                    // Split the string by space 
                    let parts = playersArray[i].split(' '); 
                    // Assign the parts to variables         
        
                    minusBtn.textContent = '-';
                    divEl.textContent = parts[0];
                    numberEl.textContent = parseInt(parts[1]);
                    plusBtn.textContent = '+';
                    scoreEl.textContent = '';
        
                    minusBtn.addEventListener('click', () => {
                        playerScore--;
                        audioElement.play();
                        console.log(playerScore);
                        if (playerScore <= -1){
                            playerScore = -1;
                            gameOverSound.play();
                            totalDivEl.classList.add('gameOver');   
                            // minusBtn.classList.toggle('hide');
                            numberEl.classList.toggle('hide');
                        } else if (playerScore === 0){
                            audioElement.play();
                            scoreEl.textContent = '';
                        } else if (playerScore === 1){
                            audioElement.play();
                            scoreEl.textContent = '|';
                        } else if (playerScore === 2) {
                            // plusBtn.classList.toggle('hide');
                            audioElement.play();
                            scoreEl.textContent = '| |';
                            totalDivEl.classList.remove('killa');
                        } else if (playerScore === 3) {
                            scoreEl.textContent = 'dgsdfbsfdbds';
                        }
                     })
        
                    plusBtn.addEventListener('click', () => {
                        if(firstClick === 0){
                            shuffleBtn.classList.toggle('hide');
                            resetBtn.classList.toggle('hide');
                        }
                        firstClick++;
                        playerScore++;
                        audioElement.play();
                        if (playerScore === 0){
                            numberEl.classList.toggle('hide');
                            totalDivEl.classList.remove('gameOver');
                            divEl.textContent = parts[0];
                        }else if (playerScore === 1){
                            scoreEl.textContent = '|';
                        } else if (playerScore === 2) {
                            scoreEl.textContent = '| |';
                        } else if (playerScore >= 3) {
                            playerScore = 3;
                            scoreEl.textContent = '| | |';
                            totalDivEl.classList.add('killa');
                            // plusBtn.classList.toggle('hide');

                            killaSound.play();
                        }
                    })

                    shuffleBtn.addEventListener('click', () => {
                        if ( i === playersArray.length - 1){
                            shuffleArray(playersArray);
                            console.log(playersArray);
                            for ( let i = 1; i < playerCount; i ++){
                            let parts = playersArray[i].split(' '); 
                            divEl.textContent = parts[0];
                            numberEl.textContent = parseInt(parts[1]);
                            }
                            // ITS WORKING
                            // HOW DO I RE INSERT
                            
                        }
                    })

                    resetBtn.addEventListener('click', ()=> {
                        shuffleBtn.classList.toggle('hide');
                        resetBtn.classList.toggle('hide');
                        console.log('reset clicked!');
                        scoreEl.textContent = '';
                        totalDivEl.classList.remove('gameOver');
                        totalDivEl.classList.remove('killa');
                        firstClick = 0;
                        console.log(playersArray);
                        playerScore = 0;
                        // plusBtn.classList.toggle('hide');
                        // minusBtn.classList.toggle('hide');

                    })
        
                    totalDivEl.appendChild(minusBtn);
                    totalDivEl.appendChild(divEl);
                    totalDivEl.appendChild(numberEl);
                    totalDivEl.appendChild(plusBtn);
                    totalDivEl.appendChild(scoreEl);
                    actualPlayersEl.appendChild(totalDivEl);
        
        
                }
            }
            
            
    
            
        })
        

    }

   

    
    


    
    backBtn.addEventListener('click', ()=> {
        playerDivEl.removeElement;
        playersArray = [];
        playerDivEl.textContent = '';
        introEl.classList.toggle('hide');
        playerNameEl.classList.toggle('hide');
        playerCount = 0;
    })
})




