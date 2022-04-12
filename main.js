const btn = document.querySelector('.menu-burger-container')
console.log(btn);

btn.addEventListener('click' , function(){
    if(document.querySelector('.link-container').style.display == 'none'){
        document.querySelector('.link-container').style.display = 'flex'    
    }else{
        document.querySelector('.link-container').style.display = 'none'
    }
    
})