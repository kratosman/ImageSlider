var imageSlide = document.getElementsByClassName("slider__item");
var navigation = document.getElementsByClassName("nav");
var indicator = document.getElementsByClassName("indicator");
var nxtButton = document.querySelector(".slider__button--next");
var prevButton = document.querySelector(".slider__button--prev");

let imageIndex = 0;
let maxSlide = imageSlide.length;


//shorthand of loop
function updateSlider(){
    for (let slide of imageSlide){
        slide.classList.remove('slider__item--visible');
        slide.classList.add('slider__item--block');
    }

    imageSlide[imageIndex].classList.add('slider__item--visible');
}

// to navigate image next or previous
function navImage() {
    for (let navs of navigation) {
        navs.classList.remove('active');

    }
    navigation[imageIndex].classList.add("active");
}
// same to the navigation to navigate image slider
function indicatorLocations() {
    for (let indi of indicator) {
        indi.classList.remove('activeShow');

    }
    indicator[imageIndex].classList.add("activeShow");
}

//next button 
nxtButton.addEventListener('click', () =>{
    // since imageIndex set to zero and maxslide is a number of images you slide
    // if the condition of imageindex is equal to maxslide and minus to one then the imageindex is set to zero, will back to the zero number of images 
    if(imageIndex === maxSlide - 1){
        imageIndex = 0;
        
    }else {
        imageIndex++;
    }
    updateSlider();
    navImage();
    indicatorLocations();
})


//opposite of next button
prevButton.addEventListener('click', () =>{
    if(imageIndex === 0) {
        imageIndex = maxSlide -1;
    }else {
        imageIndex--;
    }
    updateSlider();
    navImage();
    indicatorLocations();
})

