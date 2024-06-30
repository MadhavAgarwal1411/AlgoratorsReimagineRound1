let items=document.querySelectorAll('.slider .item')
let next=document.getElementById('nextsld')
let prev=document.getElementById('prevsld')

let countItem=items.length

let itemActive=0

next.onclick=function(){
    itemActive=itemActive+1;
    if(itemActive>=countItem){
        itemActive=0
    }
    showSlider();
}

function showSlider(){
    let itemActiveOld=document.querySelector('.slider .list .item.active')
    itemActiveOld.classList.remove('active')

    items[itemActive].classList.add('active')

    clearInterval(refreshInterval)
    refreshInterval=setInterval(()=>{
        next.click()
    },3000)
}

prev.onclick=function(){
    itemActive=itemActive-1;
    if(itemActive<0){
        itemActive=countItem-1
    }
    showSlider();
}

let refreshInterval=setInterval(()=>{
    next.click()
},3000)