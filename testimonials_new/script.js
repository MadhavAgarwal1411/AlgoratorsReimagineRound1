let next=document.querySelector('#nexttest')
let prev=document.querySelector('#prevtest')

next.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})
prev.addEventListener('click',function(){
    let items=document.querySelectorAll('.item')
    document.querySelector('.slider').prepend(items[items.length-1])
})