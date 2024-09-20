let userIn=document.querySelector('#userInput'); 
function getvalue(v){
// compound operator
// +=, _=, *=, /=
if(v==='c'){
    userIn.value=''
}else if(v==='sqr'){
    userIn.value*=userIn.value
}else if(v==='sqrt'){
    userIn.value=Math.sqrt(userIn.value)
}
else if(v==='sine'){
    userIn.value=Math.sin(userIn.value);
}
else if(v==='cosine'){
    userIn.value=Math.cosine(userIn.value)

}

else{
    userIn.value+=v
}
}

function getResult(){
    let result=eval(userIn.value)
    userIn.value=result
}
