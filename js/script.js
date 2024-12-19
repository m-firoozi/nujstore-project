/************************username(cookie)**************************/
// faUser=document.querySelector(".fa-user-o").addEventListener("click",function(event){
//     event.preventDefault();
//     checkCookie();
// });

function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires 
  }
  
  function getCookie(name) {
    let username = name + "=";    //
    var decodeCookie=decodeURIComponent(document.cookie) //get all the cookies from user 
    let cook= document.cookie.split(';');    //seperate the cookies from each other by (;) //the output is an array
    for(let i = 0; i < cook.length; i++) { //from this line we wanna access to value
      let c = cook[i];     //put each of those cookies in a c variable
      while (c.charAt(0) == ' ') {    //in c variable find space at the start of a character
        c = c.substring(i); //get part of the string and rturn it as a new string
      }
      if (c.indexOf(name + "=" == 0)) {
        return c.substring(name.length + 1, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      // alert("Welcome again " + user);
      document.getElementById("popupMessage").innerText="خوش آمدید, " + user + " عزیز  " + "!";
     document.getElementById("userName").style.display="none"
     document.getElementById("submit-btn").style.display="none"
     showPopup()
     setTimeout(hidePopup,3000)
    } else {
      // user = prompt("Please enter your name:", "");
      // if (user != "" && user != null) {
      //   setCookie("username", user, 3);
      // }
      showPopup()
    }
    
  }

  function showPopup(){
    document.getElementById("overlay1").style.display="block"
    document.getElementById("namePopup").style.display="block"
  }

  function hidePopup(){
    document.getElementById("overlay1").style.display="none"
    document.getElementById("namePopup").style.display="none"
  }

  function submitName(){
    const userName=document.getElementById("userName").value;
    if(userName){
      setCookie("username", userName, 3);
      document.getElementById("popupMessage").innerText="welcome, " + userName + "!";
      document.getElementById("userName").style.display="none"; //hide input after submit
      document.querySelector("#submit-btn").style.display="none";
      setTimeout(hidePopup,3000)
    }
  }

  window.onload=function(){
    checkCookie();
  }

/****************************dark-light-mode**********************/

document.addEventListener("DOMContentLoaded",function(){
    let darkMode=document.getElementById("Darkmode")
    let container=document.getElementsByClassName("container")[0]
    let menu=document.getElementsByClassName("menu")[0]
    darkMode.addEventListener("click",function(){
        if(darkMode.checked == true){
            container.classList.add("dark-mode")
            menu.style.backgroundColor="gray"
            menu.style.color="white"
        }else{
            container.classList.remove("dark-mode")
            menu.style.backgroundColor="white"
            menu.style.color="black"
        }
    })
})


/******************************slider***************************/
let slideIndex=4;

function showImage(number){
    let slide=document.getElementsByClassName("slides")
    let dots=document.getElementsByClassName("dots")

    if(number > slide.length){
        slideIndex=1
    }
    if(number < 1){
        slideIndex=slide.length
    }
    for( i=0; i < slide.length ; i++){
        slide[i].style.display="none"
    }
    slide[slideIndex - 1].style.display="block"

    for(i=0; i < dots.length ; i++){
        dots[i].classList.remove("active")
    }
    dots[slideIndex - 1 ].classList.add("active")

    var timer;
    timer=setTimeout(()=> plusIndex(-1),10000)
}

showImage(slideIndex)

function plusIndex(number){
    showImage(slideIndex += number)
}
function currentSlide(number){
    showImage(slideIndex = number)
}

/**************************first-banner(hover)************************************/

document.querySelectorAll(".product").forEach(product =>{
    product.addEventListener("mouseover", () =>{
        product.querySelector(".product-count").style.display="block"
    })
    product.addEventListener("mouseleave",()=>{
        product.querySelector(".product-count").style.display="none"
    })
})
/*****************************second-banner(hover) (search-heart-shopping cart icon)********************************/

document.addEventListener("DOMContentLoaded",function(){
  const productContainer=document.querySelectorAll(".product-container");
  productContainer.forEach(container=>{
    const overlay=container.querySelector(".overlay");
    container.addEventListener("mouseover",()=>{
      overlay.style.opacity="1"
      overlay.style.pointerEvents="auto"
    })
    container.addEventListener("mouseleave",()=>{
      overlay.style.opacity="0"
      overlay.style.pointerEvents="none"
    })
  })
})
/**************************second-banner(image-hover) changing the source of an image*********************/

document.addEventListener("DOMContentLoaded",function(){
  //select all product-img divs
  const productImages=document.querySelectorAll(".product-img");

  //loop through each product-img div

  productImages.forEach(function (image){
    //get the img element within the current div

    const img=image.querySelector("img");

    //store the original src value
    const originalSrc=img.src;

    //get the hover src from the data attribute 

    const hoverSrc=img.getAttribute("data-hover");
    //ad event listener for mouseover (hover in) / mouseleave(hover out)on the div

    image.addEventListener("mouseover",function(){
      img.src=hoverSrc
    })
    image.addEventListener("mouseleave",function(){
      img.src=originalSrc
    })
  })
})
/***********************add(shopping-cart icon)hover**********************/

//select all the add-to-cart elements inside the overlays
const textElements=document.querySelectorAll(".add-to-cart");

//add hover effect for each text element

textElements.forEach(textElement =>{
  textElement.addEventListener("mouseover",()=>{
    textElement.classList.add("fa-shopping-cart")
    textElement.textContent="" //clear the existing text
  })
  textElement.addEventListener("mouseleave",()=>{
    textElement.classList.remove("fa-shopping-cart")
  textElement.textContent="افزودن به سبد خرید" //revert back to orriginal text
  })
  
})

/***************************************common questions******************************************/

$(document).ready(function(){
  $(".change-icon").click(function(){                      //$(this)refers to the specific .change-icon   //.text()a method that gets the text/sets the text inside the element
    $(this).text($(this).text() =="+" ? "-" : "+");           //first gets the current text inside the clicked .change-icon then checks if the text is + or not
    $(this).closest(".common-questions").next(".answers").slideToggle(1000);  //closest()find the nearest parent element with the class common questions
    // next()find the next sibling element with the class . answers 
  })
})

/********************************************favorite-list-items*************************************************/
// $(document).ready(function(){
//   $("#heart").click(function(){
//     $("#favorite-list").toggle()
//   })
// })
/****************adding to favorite-list******** */

/*********************************************add to shopping-cart************************/
// variables
  let products=document.querySelectorAll(".product-container")  //select all product container across the page
   let shoppingCartContent = document.querySelector("#cart-content tbody")  //access shopping cart and clear cart button
   let clearCartBtn = document.querySelector("#clear-cart")

// eventListeners

  eventListeners()

  //loop through all product containers

  function eventListeners(){
    products.forEach(function(productContainer){
      productContainer.addEventListener("click",buyProduct)
      
    })  // add event listeners to each container's "add-to-cart" button

    // remove product from cart
    shoppingCartContent.addEventListener("click", removeProduct)

    // remove all products from cart
    clearCartBtn.addEventListener('click', clearCart)

    // show products from storage when loaded
    document.addEventListener("DOMContentLoaded", showProductsOnLoaded)
}

// functions

// add the product to the cart
function buyProduct(e){
    e.preventDefault()
    // use delegation for access to the product that selected
    if(e.target.classList.contains("add-to-cart")){
        // access to the card 
        let product = e.target.parentElement.parentElement.parentElement
        console.log(product)
        getProductInfo(product)
}
}
function getProductInfo(product){
    // product info
    let productInfo = {
        image: product.querySelector("img").src,
        title: product.querySelector("h3").textContent,
        price: product.querySelector(".cost").textContent,
        id: product.querySelectorAll("div")[4].getAttribute("data-id")
    }

    addToCart(productInfo)
}

// adding the product to the cart
function addToCart(productInfo){
    // create li tag
    let row= document.createElement("tr")

    // build HTML template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${productInfo.image}" width="60px"/>
            </td>
            <td>${productInfo.title}</td>
            <td>${productInfo.price}</td>
            <td>
                <a class="remove" href="#" data-id="${productInfo.id}">X</a>
            </td>
        </tr>
    `
    shoppingCartContent.appendChild(row)
    saveToStorage(productInfo)
}

// add to local storage
function saveToStorage(product){
    // get array of products from local storage
    let products = getFromStorage()

    // add the new product to the array of products
    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
}

// get content
function getFromStorage(){
    let products;

    // if products exist before
    if(localStorage.getItem("products")){
        products = JSON.parse(localStorage.getItem("products"))
    }else{
        products = []
    }
    return products
}

function removeProduct(e){
    let product, productId;


    if(e.target.classList.contains("remove")){
        e.target.parentElement.parentElement.remove()
        product = e.target.parentElement.parentElement
        productId =  product.querySelector(".add-to-cart").getAttribute("data-id")
    }
    // remove product from LS
    removeProductFromLS(productId)
}

// remove product from local storage
function removeProductFromLS(id){
    let productsLS = getFromStorage()

    productsLS.forEach(function(product, index){
        if(product.id === id){
            productsLS.splice(index, 1)
        }
    })
    localStorage.setItem("products", JSON.stringify(productsLS))
}


// remove all products from DOM
function clearCart(){
    while(shoppingCartContent.firstChild){
        shoppingCartContent.firstChild.remove()
    }
    clearCartLS()
}

// clear all products from localStorage
function clearCartLS(){
    localStorage.clear()
}

// show products when document loaded and add products info the cart
function showProductsOnLoaded(){
    let productsLS = getFromStorage();
    
    // add products into the cart
    productsLS.forEach(productInfo => {
        // create tr tag
    let row= document.createElement("tr")

    // build HTML template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${productInfo.image}" width="60px"/>
            </td>
            <td>${productInfo.title}</td>
            <td>${productInfo.price}</td>
            <td>
                <a class="remove" href="#" data-id="${productInfo.id}">X</a>
            </td>
        </tr>
    `
    shoppingCartContent.appendChild(row)
    });
}
/*****************show shopping cart-list*********************/
$(document).ready(function(){
  $("#shopping-list").click(function(){
    $("#shopping-cart").toggle()
  })
})