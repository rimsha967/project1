var root= document.querySelector('#root')
// container div start
var container= document.createElement('div')
container.setAttribute('class','container')
root.append(container)
// main start
var main= document.createElement('main')
container.append(main)
// todo div start
var todoDiv=document.createElement('div')
main.append(todoDiv)
todoDiv.setAttribute('class',todoDiv)
// todo input
var todoInput=document.createElement('input')
todoDiv.append(todoInput)
var addBtn=document.createElement('button')
todoDiv.append(addBtn)
addBtn.innerText='Add'
// todo Div end
// mainlist div start 
var mainList=document.createElement('div')
mainList.setAttribute('class','mainList')
main.append(mainList)
//  addbtn function start
addBtn.addEventListener('click',function(){
// list div
var listDiv=document.createElement('div')
mainList.append(listDiv)
listDiv.setAttribute('class','List')
var data=document.createElement('h1')
data.innerHTML=todoInput.value
listDiv.append(data)
// btn div start
var btnDiv=document.createElement('div')
listDiv.append(btnDiv)
var dltBtn=document.createElement('button')
var edtBtn=document.createElement('button')
btnDiv.append(dltBtn)
btnDiv.append(edtBtn)
dltBtn.innerHTML='Delete'
edtBtn.innerHTML='Edit'
// btn Div end
// list Div end
dltBtn.addEventListener('click',function(){
listDiv.remove()
})
// update div start
var updateDiv=document.createElement('div')
mainList.append(updateDiv)
var updateINput=document.createElement('div')
var  updateBtn=document.createElement('button')
updateDiv.append(updateINput)
updateDiv.append(updateBtn)
updateBtn.innerHTML='update'
updateDiv.style.display='none'
updateINput.value=dtat.innerHTML})
// update function
updateBtn.addEventListener('click',function(){
    listDiv.style.display='flex'
    updateDiv.style.display='none'
    data.innerHTML=updateINput.value
})
todoInput.value=''
})