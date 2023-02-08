let body = document.querySelector('body');
let price = document.getElementById('price');
let addCart = document.getElementById('addToCartButton')
let img = document.getElementById('img');
let rightArrow = document.getElementById('right');
let leftArrow = document.getElementById('left');
let likeIcon = document.getElementById('likeIcon');
let title = document.getElementById('title');
let form = document.querySelector('form');
let counter =  document.getElementById('counter');
let cart = document.getElementById('cart');
let cartTitle = document.getElementById('cartTitle');
let checkoutBtn = document.getElementById('checkoutBtn');
let cartDisplayPane = document.getElementById('cartDisplay');

cart.style.left = "-100%"
cartDisplayPane.innerText = "NO ITEMS"



rightArrow.addEventListener('click', ()=>{

    pizzaPageStyle()
})


const burgerPageStyle = () =>  {
  
        addCart.style.background = ""
        price.style.color = "";
        likeIcon.style.color = ""
        img.style.backgroundImage = ""
        title.innerText = "Meaty Burger"
        form.style.background = ""
        body.style.background = ""
        rightArrow.style.color = ""
        leftArrow.style.color = ""
        leftArrow.id = ""
        rightArrow.id = ""
}

const pizzaPageStyle = () =>{
    addCart.style.background = "#b33232"
    price.style.color = "#b33232";
    price.innerText = "R107"
    likeIcon.style.color = "#b33232"
    img.style.backgroundImage = "url('imgs/pizza.png')"
    title.innerText = "Creamy Pizza"
    rightArrow.id = "rightPizza"
    leftArrow.id = "leftPizza"
    form.style.background = "white"
    body.style.background = "#b33232"
    rightArrow.style.color = "white"
    leftArrow.style.color = "white"
    cartTitle.style.background = 'white'
    cartTitle.style.color = "#b33232"
    checkoutBtn.style.background = "white"
    checkoutBtn.style.color = "#b33232"
    


    let leftPizzaArrow = document.getElementById('leftPizza')
    let rightPizzaArrow = document.getElementById('rightPizza')
    leftArrow.addEventListener("click", ()=>{
  
        burgerPageStyle()
        
    })

    rightPizzaArrow.addEventListener('click',()=>{
      
      pastaPageStyle();

    })

}

const pastaPageStyle = () =>{
    addCart.style.background = "#b39232"
    price.style.color = "#b39232"
    price.innerText = "R80"
    likeIcon.style.color = "#b39232"
    img.style.backgroundImage = "url('imgs/pasta.png')"
    title.innerText = "Cheesy Pasta"
    rightArrow.id = "rightPasta"
    leftArrow.id = "leftPasta"
    form.style.background = "white"
    body.style.background = "#b39232"
    rightArrow.style.color = "white"
    leftArrow.style.color = "white"
    cartTitle.style.background = 'white'
    cartTitle.style.color = "#b39232"
    checkoutBtn.style.background = "white"
    checkoutBtn.style.color = "#b39232"
    
    let leftPastaArrow = document.getElementById('leftPasta')
    let rightPastaArrow = document.getElementById('rightPasta')

    leftPastaArrow.addEventListener("click", ()=>{
      
        pizzaPageStyle();
        
    })

    
    rightPastaArrow.addEventListener("click", ()=>{
      wrapPageStyle();
        
    })
}

const wrapPageStyle = () =>{
    add.style.background = "#186b13"
    price.style.color = "#186b13"
    likeIcon.style.color = "#186b13"
    img.style.backgroundImage = "url('imgs/chickenWrap.png')"
    title.innerText = "Chicken Wrap"
    price.innerText = "R65"
    rightArrow.id = "rightWrap"
    leftArrow.id = "leftWrap"
    form.style.background = "white"
    body.style.background = "#186b13"
    rightArrow.style.color = "white"
    leftArrow.style.color = "white"

    let leftWrapArrow = document.getElementById('leftWrap')
    let rightWrapArrow = document.getElementById('rightWrap')

    leftWrapArrow.addEventListener("click", ()=>{
       pastaPageStyle();
          
      })

      rightWrapArrow.addEventListener("click", ()=>{
        burgerPageStyle();
           
       })
}

//function to store and display

addCart.addEventListener("click", ()=>{
  
    cart.style.left = "5%"
  cartDisplayPane.innerText = " "
  cartDisplayPane.style.border = "solid black 1px"
  cartDisplayPane.append(title.innerText)
  cartDisplayPane.append(price.innerText)

})


