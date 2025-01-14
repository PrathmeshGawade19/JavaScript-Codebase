console.log("Fetch API");

/* 
API - Application Programming Interface
The fetch api provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource (data).

let promise = fetch(url, [options])
*/

// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("getting data... ");
//     let response = await fetch(URL);
//     console.log(response.status);
//     console.log(response);
// };

/* 
AJAX is Asynchronous JS and XML
JSON is Javascript Object Notation

JSON --> JS Object
json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)
*/

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const factBtn = document.querySelector("#factbtn");

const getFacts = async () => {
    console.log("getting data... ");
    let response = await fetch(URL);
    console.log(response.status);
    console.log(response);

    let data = await response.json();
    console.log(data);
    console.log(data[4].text);

    factPara.innerText = data[4].text;
};

factBtn.addEventListener("click", getFacts);

/* 
Read MDN document on -
Request and Response :
HTTP Verbs 
Response Status Code
--> HTTP response headers also contain details about the response, such as content type, HTTP status code etc.
*/