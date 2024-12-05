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



// Add an event listener to the button playButton.addEventListener('click', function() { audioElement.play(); // Play the audio });


let playerCount = 0;
let playersArray = [];





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

        // Populate the dropdown with numbers 1 to 20 
        for (let i = 1; i <= 20; i++) { 
            const option = document.createElement('option'); 
            option.value = i; 
            option.textContent = i; 
            dropdown.appendChild(option); 
        }

        
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

            // Create an img element 
            let oneImg = document.createElement('img'); 
            // Set the source of the image 
            oneImg.src = 'assets\pics\one.png'; 
            // Replace with the actual path to your image 
            // Optionally, you can set the alt attribute for accessibility 
            oneImg.alt = 'One Score'; 
            // Clear the existing text content 
            // scoreEl.textContent = ''; 
            // Append the img element to scoreEl 
            // scoreEl.appendChild(img);

            if ( i === playerCount - 1 ){
                playerNameEl.classList.toggle('hide');
                thirdEl.classList.toggle('hide');
                console.log(playersArray);
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
                    let playerScore = 0;

                    console.log(playersArray);
                    console.log(playersArray[i]);

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
                            divEl.classList.add('gameOver');    
                        } else if (playerScore === 0){
                            audioElement.play();
                            scoreEl.textContent = '';
                        } else if (playerScore === 1){
                            audioElement.play();
                            scoreEl.textContent = '/';
                        } else if (playerScore === 2) {
                            audioElement.play();
                            scoreEl.textContent = 'X';
                            divEl.classList.remove('killa');
                        } else if (playerScore === 3) {
                            scoreEl.textContent = 'dgsdfbsfdbds';
                        }
                     })
        
                    plusBtn.addEventListener('click', () => {
                       playerScore++;
                       audioElement.play();
                       console.log(playerScore);
                       if (playerScore === 0){
                        divEl.classList.remove('gameOver');
                        divEl.textContent = playersArray[i];
                       }else if (playerScore === 1){
                        // scoreEl.appendChild(oneImg);
                        scoreEl.textContent = '/';
                       } else if (playerScore === 2) {
                        scoreEl.textContent = 'X';
                       } else if (playerScore >= 3) {
                        playerScore = 3;
                        scoreEl.textContent = '(X)';
                        divEl.classList.add('killa');
                        killaSound.play();
                       }
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




