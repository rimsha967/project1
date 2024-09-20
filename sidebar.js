var menu=document.querySelector('.menu')
var menuStatus='hide'
function menuToggle(){
    if(menuStatus==='hide'){
        menu.classList.add('menuShow')
        menuStatus='show'
    }
    else{
        menu.classList.remove('menuShow')
        menuStatus='hide'
    }
}