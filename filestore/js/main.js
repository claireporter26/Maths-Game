//v1.1
//define variables

let playerLevelElement = document.getElementById('playerLevel');
let playerScoreElement = document.getElementById('playerScore');
let operatorElement = document.getElementById('operator');
let numx = document.getElementById('numx');
let numy = document.getElementById('numy');
let numz = document.getElementById('numz');
let tryCount = 0;


let x = 0;
let y = 0;
let z = 0;
numz.innerText = '?';
let operators = ['+', '-','*', '/'];
let levelOperators = ['+'];
let operator;

let answerOptions = [];

let playerLevel = 1;
let playerScore = 0;

const level1MaxNum = 10;
 
//set level and player score on page
playerLevelElement.innerText = playerLevel;
playerScoreElement.innerText = playerScore;



function setEquation(){
//set equation values
//random generate x,y and operator
    answerOptions = [];

    x = (Math.floor(Math.random() * 10));
    y = (Math.floor(Math.random() * 10));

    numz.innerText = '?';

    let operatorLength = levelOperators.length;

    operator = levelOperators[(Math.floor(Math.random() * (operatorLength - 1)))];

    operatorElement.innerText = operator;

    //calculate correct answer
    if(operator === '+'){
        
        z = x + y;
        console.log('z = ' + z);
    }

    numx.innerText = x;
    numy.innerText = y;
    console.log('z = ' + z);

    answerOptions.push(z);

    while(answerOptions.length < 4){
        
        let option = Math.floor(Math.random() * 20);
        if(!answerOptions.includes(option)){
            answerOptions.push(option);
        }

    }

    // for(i = 0; answerOptions.length === 4; i++){
    //     let option = Math.floor(Math.random() * 20);
    //     if(!answerOptions.includes(option)){
    //         answerOptions.push(option);
    //     }
        
    // }
    //randomiseAnswerOptions();
    setOptionBtns();

}

    //randomise answerOptions array

    let answerOptionsRandom = [];

    //check if number is in random array
    // function randomiseAnswerOptions(){
    //     while(answerOptionsRandom.length < 5){
    //         let j = Math.floor(Math.random() * 4);
    //         answerOptionsRandom.push[answerOptions[j]];    
    //     }
    //     //console.log(answerOptionsRandom);
    // }

    function setOptionBtns(){
        console.log('answerOptions test = ' + answerOptions)
        let answerOptionsRemaining = answerOptions;
        let optionSlot = 0;
        let optionSlotsRemaining = [0, 1, 2, 3];
        let optionId = '';
        let optionNextIndex;
        console.log('answerOptions = ' + answerOptions);
        for(i = 0; i < 4; i++){
            //console.log('start of loop i = ' + i);
            // console.log('answeroptionslength = ' + answerOptions.length);
            // console.log('answerOptionsRemaininglength = ' + answerOptionsRemaining.length);
            //console.log(answerOptionsRandom);
            optionNextIndex = Math.floor(Math.random() * (optionSlotsRemaining.length));
            // console.log('optionNextIndex = ' + optionNextIndex);
            optionSlot = optionSlotsRemaining[optionNextIndex];
            // console.log('optionSlot = ' + optionSlot);
            //optionSlot = Math.floor(Math.random() * (optionSlotsRemaining.length));
           
            
            //console.log('optionSlot = ' + optionSlot);
            optionId = `answer-option-${optionSlot}`;
            console.log(optionId);
           

            
            
            let answerOption = answerOptions[0];
            $('#' + optionId).text(answerOption);
            $('#' + optionId).val(answerOption);
            //console.log('i = ' + i);
            // console.log('end-answeroptionslength = ' + answerOptions.length);
            optionSlotsRemaining.splice(optionSlotsRemaining.indexOf(optionSlot), 1);
            answerOptionsRemaining.splice(0, 1);
            //  console.log('answerOptionsRemaining = ' + answerOptionsRemaining);
            // console.log('optionSlotsRemaining = ' + optionSlotsRemaining);
            // if(answerOption.value == null){
            //     $('#' + optionId).text(answerOption);
            //     $('#' + optionId).val(answerOption);
            // }     
        }
    }

    // function setOptionBtns(){
    //     for(i = 0; i < 4; i++){
    //         console.log(answerOptions);
    //         console.log(answerOptionsRandom);
    //         let optionId = `answer-option-${i}`;
    //         let answerOption = answerOptionsRandom[i];
    //         if(answerOption.value == null){
    //             $('#' + optionId).text(answerOption);
    //             $('#' + optionId).val(answerOption);
    //         }     
    //     }
    // }


function setNewEquation(){
    //reset values
    tryCount = 0;
    $('#equationDiv').css('color', 'inherit');
    $('.answerButton').css('background-color', '#3a86ff');
    z = 0;
    //answerOptions = [];
    setEquation();
}


$('.answerButton').on('click', function(e){
    tryCount = tryCount + 1;
    console.log(tryCount);
    let clickedBtn = e.target;
    let buttonVal = clickedBtn.value;
    if(buttonVal == z){
        console.log('true')
        numz.innerText = z;
        $('#equationDiv').css('color', 'lightGreen');
        clickedBtn.style.backgroundColor = 'lightGreen';
        if(tryCount > 1){
            playerScore = playerScore + 1;
        }else{
            playerScore = playerScore + 2;
        }
        playerScoreElement.innerText = playerScore;
        setTimeout(setNewEquation, 2000);
    }else{
        console.log(buttonVal)
        clickedBtn.style.backgroundColor = 'red';
    }
})

setEquation();
//setOptionBtns();
//randomiseAnswerOptions();




    




//ramdomly generate 3 alternate answers

//set x, y, operator and all four answer options into the page

