console.log(document);

document.getElementsByTagName('h1')[0].remove()

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
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
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


let h2_2 = document.createElement("h2");
h2_2.innerText = 'Submission'
h2_2.style.color = "red";
document.body.appendChild(h2_2);

let p2 = document.createElement('p2');
p2.innerText = 'To submit your work, follow these instructions:'
p2.style.color = 'black';
document.body.appendChild(p2);

let ul2 = document.createElement('ul')

let li7 = document.createElement('li')
li7.innerHTML = 'Create a new repository on Github, named <strong>lab7 (1 point)</strong>.';
li7.style.color = 'green';
ul2.appendChild(li7);

let li8 = document.createElement('li')
li8.innerHTML = 'Clone this repository to your local machine and work inside it.';
li8.style.color = 'purple';
ul2.appendChild(li8);

let li9 = document.createElement('li')
li9.innerHTML = 'Create a new HTML file, called <strong>index.html</strong>, which has only one h1 tag with "Hello, World!" message <strong>(1 point)</strong>.';
li9.style.color = 'green';
ul2.appendChild(li9);

let li10 = document.createElement('li')
li10.innerHTML = 'Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above <strong>(1 point)</strong>.';
li10.style.color = 'purple';
ul2.appendChild(li10);

let li11 = document.createElement('li')
li11.innerHTML = 'Link this <strong>main.js</strong> file to your <strong>index.html</strong> file (Note: place your script at the end of the <strong>body</strong> section).';
li11.style.color = 'green';
ul2.appendChild(li11);

let li12 = document.createElement('li')
li12.innerHTML = 'Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file <strong>(5 points)</strong>.';
li12.style.color = 'purple';
ul2.appendChild(li12);

let li13 = document.createElement('li')
li13.innerHTML = 'After you finish your work, submit it to the Github <strong>(2 points)</strong>.';
li13.style.color = 'green';
ul2.appendChild(li13);

document.body.appendChild(ul2)

var elem = document.createElement("hr");
elem.setAttribute("width", "auto");
document.body.appendChild(elem);

console.log(document);



