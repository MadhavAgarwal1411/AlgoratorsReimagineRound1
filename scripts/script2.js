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