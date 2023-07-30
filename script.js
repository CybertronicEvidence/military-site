AOS.init({
    "duration": 1000,
    disable: window.innerWidth < 450
});

// // Slideshow

// let i = 0;
// let image = []
// let time = 5000

// image[0] = './img/IMG_20230729_204507_183.jpg'
// image[1] = './img/IMG_20230729_204507_336.jpg'

// let slide = document.querySelector('.banner')
// // slide.img.setAttribute('src', 'image[]')
// // slide.innerHTML = `<img src='./img/cat-1.jpg'> `

// function changeImg() {
//     // slide.slides.src = image[i]
//     slide.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image[i]})`

//     if (i < image.length - 1) {
//         i++
//     } else {
//         i = 0
//     }

//     setTimeout('changeImg()', time);
// }

// window.onload = changeImg

window.addEventListener('scroll', reveal);

function reveal() {
    let reveal = document.querySelector('.reveal')

    for (let i = 0; i < reveal.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add('active');
        } else {
            reveal[i].classList.remove('active')
        }
    }
}


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