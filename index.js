let body = document.querySelector('body');
let price = document.getElementById('price');
let button = document.getElementById('button')
let img = document.getElementById('img')
let rightArrow = document.getElementById('right')
let leftArrow = document.getElementById('left')
let likeIcon = document.getElementById('likeIcon')
let title = document.getElementById('title')
let form = document.querySelector('form')
let counter =  document.getElementById('counter')


rightArrow.addEventListener("click", ()=>{
  
    pizzaPageStyle()
    
})

const pizzaPageStyle = () =>{
    button.style.background = "#b33232"
    price.style.color = "#b33232"
    likeIcon.style.color = "#b33232"
    img.style.backgroundImage = "url('imgs/pizza.png')"
    title.innerText = "Creamy Pizza"
    rightArrow.id = "rightTwo"
    form.style.background = "white"
    body.style.background = "#b33232"
    rightArrow.style.color = "white"
    leftArrow.style.color = "white"

    rightArrow.addEventListener("click", ()=>{
  
        pastaPageStyle()
        
    })

}

const pastaPageStyle = () =>{
    button.style.background = "#b39232"
    price.style.color = "#b39232"
    likeIcon.style.color = "#b39232"
    img.style.backgroundImage = "url('imgs/pasta.png')"
    title.innerText = "Cheesy Pasta"
    rightArrow.id = "rightTwo"
    form.style.background = "white"
    body.style.background = "#b39232"
    rightArrow.style.color = "white"
    leftArrow.style.color = "white"

    rightArrow.addEventListener("click", ()=>{
  
        wrapPageStyle()
        
    })

}

const wrapPageStyle = () =>{
    button.style.background = "#186b13"
    price.style.color = "#186b13"
    likeIcon.style.color = "#186b13"
    img.style.backgroundImage = "url('imgs/chickenWrap.png')"
    title.innerText = "Chicken Wrap"
    rightArrow.id = "rightThree"
    form.style.background = "white"
    body.style.background = "#186b13"
    rightArrow.style.color = "white"
    leftArrow.style.color = "white"


}