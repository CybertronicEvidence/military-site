// Slideshow

let i = 0;
let image = []
let time = 5000

image[0] = './img/2c2c593f-dbf9-4ba0-9994-45794924924f.jpeg'
image[1] = './img/307c8564-8512-45fa-a8c5-acab0f6a5c76.jpeg'
image[2] = './img/a0e33c37-359d-4ff5-b951-99c6392cf6ba.jpeg'

let slide = document.querySelector('.banner')
// slide.img.setAttribute('src', 'image[]')
// slide.innerHTML = `<img src='./img/cat-1.jpg'> `

function changeImg() {
    // slide.slides.src = image[i]
    slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image[i]})`

    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg

// Product Slide

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Mobile Menu

let menu = document.querySelector("#MenuItems");

menu.style.maxHeight = "0px";

function menutoggle() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "200px"
    }
    else {
        menu.style.maxHeight = "0px"
    }
}

let bars = document.querySelector('.fa-bars')
let cancel = document.querySelector('.fa-x')

bars.addEventListener('click', () => {
    cancel.style.visibility = 'visible'
    bars.style.visibility = 'hidden'
})

cancel.addEventListener('click', () => {
    cancel.style.visibility = 'hidden'
    bars.style.visibility = 'visible'
})