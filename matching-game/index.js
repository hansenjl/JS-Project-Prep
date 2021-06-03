document.addEventListener('DOMContentLoaded', init)
let numOfClicks = 0
let checkingMatches = false
let firstImage
let secondImage


function init(){
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => createCards(data))
}

function createCards(data){
    // randomize data 
    data.sort(() => (Math.random() > .5) ? 1 : -1)
    // select the same 5 cards twice  
    let cards = [...data.slice(0,5), ...data.slice(0,5)]
    //randomize cards 
    cards.sort(() => (Math.random() > .5) ? 1 : -1)
    const board = document.getElementById('board')
    cards.forEach((element, index) => {
        const card = document.createElement('div')
        card.dataset.id = index
        card.classList.add('card') 
        const img = document.createElement('img') 
        img.src = element.image
  
      
        board.append(card)
        card.addEventListener('click', (e) => showImage(e, img))
    });
}

function showImage(e, imgElement){
    // skip this function if the image has been found. 
 
    if(imgElement.className.includes("found")){ return }
    if(!firstImage){
        firstImage = imgElement
        e.target.append(imgElement)
    } else if(!secondImage && !imgElement.parentElement){
        secondImage = imgElement
        e.target.append(imgElement)
    }

    if(firstImage && secondImage && !checkingMatches){
        checkingMatches = true
        checkForMatch()
    }
}

function checkForMatch(){
    if(firstImage.src !== secondImage.src){
        // not a match
        setTimeout(() => hideImages(), 2000)
    }else{
        // it is a match
        firstImage.classList.add('found')
        secondImage.classList.add('found')
        // firstImage.removeEventListener('click', (e) => showImage(e, img))
        // secondImage.removeEventListener('click', (e) => showImage(e, img))
        resetGlobals()
    }
    
   
}

function resetGlobals() {
    firstImage = undefined
    secondImage = undefined
    checkingMatches = false
}

function hideImages(){
    firstImage.remove()
    secondImage.remove() 
    resetGlobals()
    
}