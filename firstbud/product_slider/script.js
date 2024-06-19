let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');
let backButton=document.getElementById('back');
let seeMoreButtons=document.querySelector('.seeMore');
let carousel=document.querySelector('.carousel');
let listHTML=document.querySelector('.carousel .list');

nextButton.onclick=function () {
    showSlider('next');
}
prevButton.onclick=function () {
    showSlider('prev');
}
let unAcceptClick;
const showSlider=(type)=>{
    nextButton.style.pointerEvents='none'
    prevButton.style.pointerEvents='none'
    carousel.classList.remove('prev','next')
    let items=document.querySelectorAll('.carousel .list .item')
    if(type=='next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next')
    }
    else{
        let positionLast=items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev')
    }
    clearTimeout(unAcceptClick);
    unAcceptClick=setTimeout(() => {
    nextButton.style.pointerEvents='auto'
    prevButton.style.pointerEvents='auto'
    }, 2000);
}
