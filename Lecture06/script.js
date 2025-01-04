console.log("DOM - Document Object Model");

//window object represents an open window in a browser. It is browers object and is automatically created by browser. It is a global object with lots of properties and methods.
console.dir(window);
console.log(window);
// Use console.log() to print simple values or string representations of objects.
// Use console.dir() to inspect the structure and properties of complex objects.

//DOM (Document Object Model) - when page is loaded, the browser creates a DOM of the page
console.dir(window.document);

console.log(document.body);
console.dir(document.body);

//to access
let ele1 = document.getElementById("heading");
console.dir(ele1);

let ele2 = document.getElementsByClassName("box");
console.dir(ele2);

let ele3 = document.getElementsByTagName("button");
console.dir(ele3);

let ele4 = document.querySelector(".box"); //can use id, class, tag
console.dir(ele4);

let ele5 = document.querySelectorAll(".box");
console.dir(ele5);

//properties
//tagName - returns tag for elements nodes
console.log(ele1.tagName);
console.log(ele4.tagName);

//innerText - returns the text content of the elements and all its children
let body = document.querySelector("body");
console.log(body.innerText);

console.log(ele1.innerText);
console.log(ele4.innerText);

//innerHTML - returns the plain text or HTML contents in the elements
console.log(body.innerHTML);

let div = document.querySelector("div");
console.log(div.innerHTML);

// NOTE --> innerText and innerHTML can be used for get and as well set

//textContent - returns textual content even for hidden elements

//attributes
console.log(ele1.getAttribute("id"));
console.log(ele4.getAttribute("class"));

ele1.setAttribute("id", "new_heading");
console.log(ele1.getAttribute("id"));

//style
console.dir(ele1.style);
ele1.style.backgroundColor = "yellow";
ele1.style.fontSize = "70px";

//create and then add elements
let newBtn = document.createElement("button"); // to create

newBtn.innerText = "click me";
console.dir(newBtn);
ele1.after(newBtn); //to add at specific position using append/ prepend/ after/ before
newBtn.style.height = "100px";
newBtn.style.width = "100px";
newBtn.style.fontSize = "20px";

// newBtn.remove();  to delete element


