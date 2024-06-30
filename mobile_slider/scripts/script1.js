let next=document.querySelector('#nexttest')
let prev=document.querySelector('#prevtest')

next.addEventListener('click',function(){
    let items=document.querySelectorAll('.page7 .item')
    document.querySelector('.page7 .slider').appendChild(items[0])
})
prev.addEventListener('click',function(){
    let items=document.querySelectorAll('.page7 .item')
    document.querySelector('.page7 .slider').prepend(items[items.length-1])
})