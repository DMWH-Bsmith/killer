////////////////////////////////////////////////////////////////////////
// ELEMENTS ///////////////////////////////////////////////////////////
const introEl = document.querySelector('.first');
const playerNameEl = document.querySelector('.second');
const thirdEl = document.querySelector('.third');
const playerDivEl = document.querySelector('.players')
const shuffleBtnDivEl = document.querySelector('.shuffleBtnDiv');
const actualPlayersEl = document.querySelector('.actualPlayers');
const singlePlayerRowDiv = document.querySelector('.wasabi');
////////////////////////////////////////////////////////////////////////
// SOUNDS /////////////////////////////////////////////////////////////
const audioElement = document.getElementById('audioElement'); 
const gameOverSound = document.getElementById('gameOverSound'); 
const killaSound = document.getElementById('killaSound'); 
const playerCountVal = document.getElementById('playerCount');
////////////////////////////////////////////////////////////////////////
// BUTTONS ////////////////////////////////////////////////////////////
const backBtn = document.querySelector('.backBtn');
const addBtn = document.querySelector('.addBtn');
const shuffleBtn = document.querySelector('.shuffleBtn');
const resetBtn = document.querySelector('.resetBtn');
const nextBtn = document.querySelector('.nextBtn');
////////////////////////////////////////////////////////////////////////
// ARRAYS /////////////////////////////////////////////////////////////
let playersArray = [];
let bakArray =[];
let optionArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

////////////////////////////////////////////////////////////////////////
// VALUES /////////////////////////////////////////////////////////////
let playerCount = 0;
let x = 1;
let input;
let dropdown;
//////////////////////////////////////////////////////////////////////




function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
} 





nextBtn.addEventListener('click', () => {
    audioElement.play();
    introEl.classList.toggle('hide');
    playerNameEl.classList.toggle('hide');
    playerCount = parseInt(playerCountVal.value, 10);


    let singlePlayerDiv = document.createElement('div');
    singlePlayerDiv.classList.add('thirdly');

    input = document.createElement('input');
    input.classList.add(`player${x}`);
    input.classList.add('playa');


    dropdown = document.createElement('select');
    dropdown.id = 'numberDropdown';

    if ( x === 1) {
        console.log(x);
        for (let i = 1; i <= optionArray.length; i++) { 
            const option = document.createElement('option'); 
            option.value = i; 
            option.textContent = i; 
            dropdown.appendChild(option); 
        }
    }
    
    

    
    singlePlayerDiv.appendChild(input);
    singlePlayerDiv.appendChild(dropdown);
    playerDivEl.appendChild(singlePlayerDiv);
    input.focus();


   
        
     

   

    
    


    
    backBtn.addEventListener('click', ()=> {
        playerDivEl.removeElement;
        bakArray = [];
        playerDivEl.textContent = '';
        introEl.classList.toggle('hide');
        playerNameEl.classList.toggle('hide');
        playerCount = 0;
    })
})

addBtn.addEventListener('click', () => {
    x++;
    audioElement.play();
    input.focus();
    let playerName = input.value.toUpperCase();
    let playerNumber = dropdown.value;

    let index = optionArray.indexOf(playerNumber); 
    if (index !== -1) { 
        optionArray.splice(index, 1); 
        // Remove the element at the found index 
        }

        console.log(optionArray);
    
    for (let i = 1; i <= optionArray.length; i++) { 
        // console.log(optionArray.length);
        const option = document.createElement('option'); 
        option.value = optionArray[i];
        // console.log(optionArray[i]); 
        option.textContent = optionArray[i]; 
        dropdown.appendChild(option); 
        
    }

    let finalPlayer = playerName + ' ' + playerNumber;
    bakArray.push(finalPlayer);
    input.value = '';
    dropdown.value = x;
    if(playerCount === bakArray.length){

            playerNameEl.classList.toggle('hide');
            thirdEl.classList.toggle('hide');

            for (let i = 0; i < bakArray.length; i++){
                let totalDivEl = document.createElement('div');
                totalDivEl.classList.add('wasabi');
                

                let minusBtn = document.createElement('button');
                minusBtn.classList.add('scoreBtn');

                let divEl = document.createElement('div');
                let numberEl = document.createElement('div');
                numberEl.classList.add('numbino');
                
                let plusBtn = document.createElement('button');
                plusBtn.classList.add('scoreBtn');

                let scoreEl = document.createElement('div');
                scoreEl.classList.add('scoreEl');
                let playerScore = 0;

                let parts = bakArray[i].split(' '); 
    
                minusBtn.textContent = '-';
                divEl.textContent = parts[0];
                numberEl.textContent = parseInt(parts[1]);
                plusBtn.textContent = '+';
                scoreEl.textContent = '';
    
                minusBtn.addEventListener('click', () => {
                    shuffleBtn.classList.add('hide');
                    // resetBtn.classList.remove('hide');
                    playerScore--;
                    console.log(playerScore);
                    if (playerScore === -1){
                        gameOverSound.play();
                        totalDivEl.classList.add('gameOver');   
                        minusBtn.classList.toggle('grey');
                        plusBtn.classList.toggle('grey');
                    } else if (playerScore === 0){
                        audioElement.play();
                        scoreEl.textContent = '';
                    } else if (playerScore === 1){
                        audioElement.play();
                        scoreEl.textContent = '|';
                    } else if (playerScore === 2) {
                        audioElement.play();
                        scoreEl.textContent = '||';
                        totalDivEl.classList.remove('killa');
                        minusBtn.classList.remove('grey');
                    } else if (playerScore === -2) {
                        playerScore = -1;
                    }
                    })
    
                plusBtn.addEventListener('click', () => {
                    shuffleBtn.classList.add('hide');
                    // resetBtn.classList.remove('hide');
                    playerScore++;
                    audioElement.play();
                    if (playerScore === 0){
                        minusBtn.classList.toggle('grey');
                        plusBtn.classList.toggle('grey');
                        totalDivEl.classList.remove('gameOver');
                        divEl.textContent = parts[0];
                    }else if (playerScore === 1){
                        scoreEl.textContent = '|';
                    } else if (playerScore === 2) {
                        scoreEl.textContent = '||';
                    } else if (playerScore >= 3) {
                        playerScore = 3;
                        scoreEl.textContent = '|||';
                        totalDivEl.classList.add('killa');
                        killaSound.play();
                    }
                })

                shuffleBtn.addEventListener('click', () => {
                    actualPlayersEl.textContent = '';
                    if ( i === bakArray.length - 1){
                        shuffleArray(bakArray);
                        for ( let i = 1; i < playerCount; i ++){
                        let parts = bakArray[i].split(' '); 
                        divEl.textContent = parts[0];
                        numberEl.textContent = parseInt(parts[1]);
                        }
                        console.log(bakArray);
                        for (let i = 0; i < bakArray.length; i++){
                            let totalDivEl = document.createElement('div');
                            totalDivEl.classList.add('wasabi');
                            
                            let minusBtn = document.createElement('button');
                            minusBtn.classList.add('scoreBtn');
        
                            let divEl = document.createElement('div');
                            let numberEl = document.createElement('div');
                            numberEl.classList.add('numbino');
                            
                            let plusBtn = document.createElement('button');
                            plusBtn.classList.add('scoreBtn');
        
                            let scoreEl = document.createElement('div');
                            scoreEl.classList.add('scoreEl');
                            let playerScore = 0;
        
                            let parts = bakArray[i].split(' '); 
                
                            minusBtn.textContent = '-';
                            divEl.textContent = parts[0];
                            numberEl.textContent = parseInt(parts[1]);
                            plusBtn.textContent = '+';
                            scoreEl.textContent = '';


                            minusBtn.addEventListener('click', () => {
                                shuffleBtn.classList.add('hide');
                                // resetBtn.classList.remove('hide');
                                
                                playerScore--;
                                console.log(playerScore);
                                if (playerScore === -1){
                                    gameOverSound.play();
                                    totalDivEl.classList.add('gameOver');   
                                    minusBtn.classList.toggle('grey');
                                    plusBtn.classList.toggle('grey');
                                } else if (playerScore === 0){
                                    audioElement.play();
                                    scoreEl.textContent = '';
                                } else if (playerScore === 1){
                                    audioElement.play();
                                    scoreEl.textContent = '|';
                                } else if (playerScore === 2) {
                                    audioElement.play();
                                    scoreEl.textContent = '| |';
                                    totalDivEl.classList.remove('killa');
                                    minusBtn.classList.remove('grey');
                                } else if (playerScore === -2) {
                                    playerScore = -1;
                                }
                                })

                            plusBtn.addEventListener('click', () => {
                                shuffleBtn.classList.add('hide');
                                // resetBtn.classList.remove('hide');
                                // firstClick++;
                                playerScore++;
                                audioElement.play();
                                if (playerScore === 0){
                                    minusBtn.classList.toggle('grey');
                                    plusBtn.classList.toggle('grey');
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
                                    killaSound.play();
                                }
                            })

                            resetBtn.addEventListener('click', ()=> {
                                shuffleBtn.classList.remove('hide');
                                // resetBtn.classList.add('hide');
                                console.log('reset clicked!');
                                scoreEl.textContent = '';
                                totalDivEl.classList.remove('gameOver');
                                totalDivEl.classList.remove('killa');
                                plusBtn.classList.remove('grey');
                                minusBtn.classList.remove('grey');
                                // firstClick = 0;
                                playerScore = 0;
        
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

                resetBtn.addEventListener('click', ()=> {
                    x = 1;
                    dropdown.value = x;
                    console.log(bakArray);
                    let parts = bakArray[i].split(' '); 
                    console.log(parts[0]);
                    playerNameEl.classList.toggle('hide');
                    thirdEl.classList.toggle('hide');
                    shuffleBtn.classList.remove('hide');
                    resetBtn.classList.add('hide');
                    addBtn.textContent = 'Confirm';
                    console.log('reset clicked!');
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





