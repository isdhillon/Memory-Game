//declarttions
let startBtn= document.querySelector('.start');
let winBtn=document.querySelector(".win-btn");
let winMsg=document.querySelector(".win-msg");
let text=document.querySelector(".text");
let moves=document.querySelector(".moves");
let gameBox=document.querySelector(".game-box");
//cards array 
let cardArray=[
{   //name of the card
    //color of the card
    //two cards have same name so that they can be matched
    name:'1',
    backgroundColor: 'red'
},
{name:'1',
    backgroundColor: 'red'
},
{name:'2',
    backgroundColor: 'yellow'
},
{name:'2',
    backgroundColor: 'yellow'
},
{name:'3',
    backgroundColor: 'pink'
},
{name:'3',
    backgroundColor: 'pink'
},
{name:'4',
    backgroundColor: 'purple'
},
{name:'4',
    backgroundColor: 'purple'
},
{name:'5',
    backgroundColor: 'orange'
},
{name:'5',
    backgroundColor: 'orange'
},
{name:'6',
    backgroundColor: 'green'
},
{name:'6',
    backgroundColor: 'green'
},
{name:'7',
    backgroundColor: 'cyan'
},
{name:'7',
    backgroundColor: 'cyan'
},
{name:'8',
    backgroundColor: 'coral'
},
{name:'8',
    backgroundColor: 'coral'
},
]
//cards choosen array
let cardsChosen=[]
//card choosen array id
let cardChosenID=[]
//cards won array
let cardsWon=[];
//win btn 
winBtn.addEventListener("click",function(){
    //reload the page
    location.reload()
})

//start button
startBtn.addEventListener("click",createBoard);

//creating the board
function createBoard(){
        //card array loop
        for(let i=0;i<cardArray.length;i++){
            //make a div
            let card=document.createElement('div');
            //adding class
            card.setAttribute('class','box');
            //setting index
            card.setAttribute('id',i)
            //setting background color
            card.setAttribute("style", "background-color: #111111")
            //adding flip card event listener when it is clicked
            card.addEventListener('click',flipcard)
            //appending card
            gameBox.appendChild(card)
            //hiding the start button
            startBtn.style.display="none";
    }
}
//changing the order of the array shuffle for next game
cardArray.sort(()=>0.5 -Math.random())
//check for match
function checkForMatch(){
    //selecting the cards
    let cards=document.querySelectorAll(".box");
    //getting the first card from card choosen array
    let optionOneId=cardChosenID[0]
    //gettting the second card form choosen array
    let optionTwoId=cardChosenID[1]
    //if the card name is same
    if(cardsChosen[0]===cardsChosen[1]){
        //adding the same background color as parent so that it hides
        cards[optionOneId].setAttribute("style", "background-color: #555555")
        cards[optionTwoId].setAttribute("style", "background-color: #555555")
        //pushing the cards in the win array
        cardsWon.push(cardsChosen)
    }
    else{
        //adding back black color if not matched
        cards[optionOneId].setAttribute("style", "background-color: #111111")
        cards[optionTwoId].setAttribute("style", "background-color: #111111")
    }
    //empty the array
    cardsChosen=[]
    cardChosenID=[]
    //update the score
    moves.innerText=cardsWon.length;
    //if cards array /2 equal to win array (bcz in win array we pushed the pairs)
    if(cards.length/2===cardsWon.length){
        //hide the game display the win msg
        gameBox.style.display="none"
        text.innerText=`You Won Score:${cardsWon.length}`
        winMsg.style.display="block"
        
    }
    
}
//flip card function
function flipcard(){
    //get the id of the card clicked
    let cardId=this.getAttribute('id');
    //push the card name in cards choosen array
    cardsChosen.push(cardArray[cardId].name)
    //push the id in cardschoosen id array
    cardChosenID.push(cardId)
    //adding color from the cards array
    this.setAttribute("style", `background-color: ${cardArray[cardId].backgroundColor}`)
    //if there are two cards in cards choosen array check if they match
    if(cardsChosen.length==2){
        //set timeout is used to see this in effect
        setTimeout(checkForMatch,500)
    }
}


