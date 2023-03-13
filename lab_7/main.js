console.log(document);

let h1 = document.createElement("h1");
h1.innerText = 'Lab7 Assignment'
h1.style.color = "blue";
document.body.appendChild(h1);

var elem = document.createElement("hr");
elem.setAttribute("width", "auto");
document.body.appendChild(elem);


let h2 = document.createElement("h2");
h2.innerText = 'Task'
h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerText = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:';
p1.style.color = 'black';
document.body.appendChild(p1);


colors_span = ["green", "purple","green", "purple","green", "purple"];
colors_li = ["green", "purple","green", "purple","green", "purple"];
let data = ['find elements in the DOM','create/add/remove elements','change content of the elements','change styles of the elements','change attributes of the elements','change classes of the elements'];
let ul = document.createElement('ul');
let i = 0;
for (let user of data) {
    let li = document.createElement('li');
    li.style.color = colors_li [i];
    htmlContent = user + "<span style ='font-weight:bold;color:" + colors_span[i] +" '> (5 points); </span>";
    console.log(htmlContent);
    li.innerHTML = htmlContent;
    i+=1;
    ul.appendChild(li);
}
document.body.appendChild(ul);

var elem = document.createElement("hr");
elem.setAttribute("width", "auto");
document.body.appendChild(elem);


let h3 = document.createElement("h3");
h3.innerText = 'Submission'
h3.style.color = "red";
document.body.appendChild(h3);

let p2 = document.createElement('p2');
p2.innerText = 'To submit your work, follow these instructions:'
p2.style.color = 'black';
document.body.appendChild(p2);

let li7 = document.createElement('li')
li7.textContent = 'Create a new repository on Github, named lab7 (1 point).';
li7.style.color = 'green';
document.body.appendChild(li7);

let li8 = document.createElement('li')
li8.textContent = 'Clone this repository to your local machine and work inside it.';
li8.style.color = 'purple';
document.body.appendChild(li8);

let li9 = document.createElement('li')
li9.textContent = 'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).';
li9.style.color = 'green';
document.body.appendChild(li9);

let li10 = document.createElement('li')
li10.textContent = 'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).';
li10.style.color = 'purple';
document.body.appendChild(li10);

let li11 = document.createElement('li')
li11.textContent = 'Link this main.js file to your index.html file (Note: place your script at the end of the body section).';
li11.style.color = 'green';
document.body.appendChild(li11);

let li12 = document.createElement('li')
li12.textContent = 'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).';
li12.style.color = 'purple';
document.body.appendChild(li12);

let li13 = document.createElement('li')
li13.textContent = 'After you finish your work, submit it to the Github (2 points).';
li13.style.color = 'green';
document.body.appendChild(li13);

var elem = document.createElement("hr");
elem.setAttribute("width", "auto");
document.body.appendChild(elem);


console.log(document);



