console.log("Events in Javascript");

//the change in the state of an object is known as an Event. 
//Events are fired to notify code of "interesting changes" that may affect code execution
//event handling
/*
syntax : 
    node.event = () => {
        //handle here
    }
*/

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn 1 was clicked");   
};

let googleLink = document.querySelector("p");
googleLink.onmouseover = () => {
    console.log("para was mouse over");
};

//event object - it is a special object that has details about the event
//all event handlers have access to the event objects properties and methods
/*
syntax : 
    node.event = (event) => {
        //handle here
    }
*/
btn1.onclick = (evt) => {
    console.log("btn 1 was clicked"); 
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

googleLink.onmouseover = (evt) => {
    console.log("para was mouse over");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

//event listner are also used for event handling and are better than event handling using functions
/*
syntax : 
    node.addEventListener(event, callback)
    node.removeEventListener(event, callback)
    note for remove the callback reference should be same to remove. i.e Create a variable and store your callback function.
*/
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (evt) => {
    console.log("button 2 was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
})

let btn3 = document.querySelector("#btn3");

let dblClick = (evt) => {
    console.log("button 3 was clicked twice");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}
btn3.addEventListener("dblclick", dblClick);

// btn3.removeEventListener("dblclick", dblClick);

//practice question 1 - theme changer button dark-light
// let modeButton = document.querySelector("#modeBtn");
// let currMode = "light";

// modeButton.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);
// });

//second method to do is using classList
let modeButton = document.querySelector("#modeBtn");
let currMode = "light";

modeButton.addEventListener("click",() => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }

    console.log(currMode);
});

