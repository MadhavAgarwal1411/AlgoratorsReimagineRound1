let nextButton=document.getElementById('next');
let prevButton=document.getElementById('prev');
let page5=document.querySelector('.page5');
let listHTML=document.querySelector('.page5 .list');

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
    page5.classList.remove('prev','next')
    let items=document.querySelectorAll('.page5 .list .item')
    if(type=='next'){
        listHTML.appendChild(items[0]);
        page5.classList.add('next')
    }
    else{
        let positionLast=items.length -1;
        listHTML.prepend(items[positionLast]);
        page5.classList.add('prev')
    }
    clearInterval(refreshpro)
    refreshpro=setInterval(()=>{
        nextButton.click()
    },4500)
    clearTimeout(unAcceptClick);
    unAcceptClick=setTimeout(() => {
    nextButton.style.pointerEvents='auto'
    prevButton.style.pointerEvents='auto'
    }, 2000);
}

let refreshpro=setInterval(()=>{
    nextButton.click()
},4500)


let items=document.querySelectorAll('.page1-0 .slider .item')
let nextsld=document.getElementById('nextsld')
let prevsld=document.getElementById('prevsld')

let countItem=items.length

let itemActive=0

nextsld.onclick=function(){
    itemActive=itemActive+1;
    if(itemActive>=countItem){
        itemActive=0
    }
    showSlider1();
}

function showSlider1(){
    let itemActiveOld=document.querySelector('.slider .list .item.active')
    itemActiveOld.classList.remove('active')

    items[itemActive].classList.add('active')

    clearInterval(refreshInterval)
    refreshInterval=setInterval(()=>{
        nextsld.click()
    },3000)
}

prevsld.onclick=function(){
    itemActive=itemActive-1;
    if(itemActive<0){
        itemActive=countItem-1
    }
    showSlider1();
}

let refreshInterval=setInterval(()=>{
    nextsld.click()
},3000)


let next=document.querySelector('#nexttest')
let prev=document.querySelector('#prevtest')


next.addEventListener('click',function(){
    clearInterval(refreshtest)
    refreshtest=setInterval(()=>{
        next.click()
    },3000)
    let items=document.querySelectorAll('.page7 .item')
    document.querySelector('.page7 .slider').appendChild(items[0])
})
prev.addEventListener('click',function(){
    clearInterval(refreshtest)
    refreshtest=setInterval(()=>{
        next.click()
    },3000)
    let items=document.querySelectorAll('.page7 .item')
    document.querySelector('.page7 .slider').prepend(items[items.length-1])
})


let refreshtest=setInterval(()=>{
    next.click()
},3000)


//  For button Animations 


let buttons=document.querySelectorAll('.btn')
buttons.forEach(button=>{
    let text=button.textContent;
    button.innerHTML="";
    for (let char of text){
        var span=document.createElement('span')
        span.textContent=char===' '?'\u00A0':char;
        button.appendChild(span)
    }
    let spans=button.querySelectorAll('span');
    button.addEventListener('mouseenter',()=>{
        spans.forEach((span,index) => {
            setTimeout(()=>{
                span.classList.add('hover');
            },index*50);
        })
    })
    button.addEventListener('mouseleave',()=>{
        spans.forEach((span,index) => {
            setTimeout(()=>{
                span.classList.remove('hover');
            },index*50);
        })
    })
})