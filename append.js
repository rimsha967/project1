Element = document.createElement("h2");
text = document.createTextNode("this is first text");
Element.appendChild(text);
document.getElementById("test").appendChild(text);
console.log(Element);

// var comment = document.createComment("this just comment");
// document.getElementById("test").appendChild("comment");

 var target= document.getElementById("test");
target.insertBefore(Element,target.ChildNodes[1]);


// for example hum ny 2 cheezy create krli aik text or aik tag ab in 2no ko attach kesy krein ya dalein kesy tw 
// atach krny k liye hum append method use krty hn