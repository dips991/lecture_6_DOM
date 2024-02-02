 //DOM
 //console.log --> print in console
 //console.dir -->  to print document properties and method 
 //to print obj
//  console.dir(window.document)
//get element by Id
// let heading = document.getElementById("heading");//h1
// console.log(heading);

// let button = document.getElementById("myId");
// console.log(button);

// get element by class
// let headings= document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

//get element by Tag name

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
// console.log(parahs);


//Query Selector  we can acess id/class/tag return first element 
//query selector all we can acess 3 return a NodeList 
// let firEle= document.querySelector("p"); //1st element 
// console.dir(firEle);

// let allEle = document.querySelectorAll("p");  // all element 
// console.log(allEle);

// let firEle= document.querySelector(".heading"); //1st element 
// console.dir(firEle);

// let allEle = document.querySelectorAll(".heading");  // all element 
// console.log(allEle);


// let firEle= document.querySelector("#myId"); //1st element 
// console.dir(firEle);

//properties
// firEle.tagName print pagaragraph or any 
//tagName : return tag for element nodes

//innerText : returns the text content of all its children 
// homework firstchild , lastchild,children text Node, comment Node, element 
//for navgation

// let div = document.querySelector("div");
// console.dir(div);
// let heading= document.querySelector("h1");
//inner html : return the plain text or HTML contents in the elements

// textContent : return textual content even for hidden elements

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna collage students ";

// let divs = document.querySelectorAll(".box");

// let idx=0;
// for(div of divs)
// {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
//    // console.log(div.innerText);
// }
// divs[0].innerText ="new unique value 1";
// divs[1].innerText ="new unique value 2";
// divs[2].innerText ="new unique value 3";

//DOM 2

//to get the attributes

// let div = document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

//  to set the attribute 
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

//style node.style
// let div = document.querySelector("div");
// div.style.backgroundColor ="green";
// div.style.backgroundColor ="purple";
// div.style.visibility ="hidden";

// div.style.fontSize ="26px";

// div.innerText ="hello";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);//add at the end of the node(inside)

// div.prepend(newBtn);//add at the start of node(inside)

// div.before(newBtn); // add before the node (outside)

// div.after(newBtn); // add after the node (outside)

// div.remove(newBtn); //removes the node


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);//add at the end of the node(inside)

//add new heading without touch inner html

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi , I am new !</i>";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();

//hW appendChild() removeChild()

//quetion 1
let newBtn = document.createElement("button");
newBtn.innerText ="click me !";
newBtn.style.color = "white";
newBtn.style.backgroundColor ="red";

 document.querySelector("body").prepend(newBtn);
// quetion 2
let para =document.querySelector("p");











