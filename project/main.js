var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var img = document.getElementById("myImg1");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./images/corona.jpeg";
  captionText.innerHTML = "CoronaNet Project";
};

var img = document.getElementById("myImg2");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./images/spanish.jpeg";
  captionText.innerHTML = "International Olympiad";
};

var img = document.getElementById("myImg3");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./images/math.jpeg";
  captionText.innerHTML = "Math Olympiad";
};

var img = document.getElementById("myImg4");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./images/social_media.jpg";
  captionText.innerHTML = "Social media certificate";
};

var img = document.getElementById("myImg5");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./images/business_management.jpg";
  captionText.innerHTML = "Intro to business";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

let data = [
  {
    "Stress resistance": 5,
    Punctuality: 9,
    Communications: 8,
    "Problem-solving": 9,
    Management: 10,
    Leadership: 7,
  },
];
let features = [
  "Stress resistance",
  "Punctuality",
  "Communications",
  "Problem-solving",
  "Management",
  "Leadership",
];

let width = 360;
let height = 360;
let svg = d3
  .select(".skills-radar")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let radialScale = d3.scaleLinear().domain([0, 4]).range([0, 50]);
let ticks = [2, 4, 6, 8, 10];

svg
  .selectAll("circle")
  .data(ticks)
  .join((enter) =>
    enter
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("fill", "none")
      .attr("stroke", "gray")
      .attr("r", (d) => radialScale(d))
  );

svg
  .selectAll(".ticklabel")
  .data(ticks)
  .join((enter) =>
    enter
      .append("text")
      .attr("class", "ticklabel")
      .attr("x", width / 2 + 5)
      .attr("y", (d) => height / 2 - radialScale(d))
      .text((d) => d.toString())
  );

function angleToCoordinate(angle, value) {
  let x = Math.cos(angle) * radialScale(value);
  let y = Math.sin(angle) * radialScale(value);
  return { x: width / 2 + x, y: height / 2 - y };
}

let featureData = features.map((f, i) => {
  let angle = Math.PI / 2 + (2 * Math.PI * i) / features.length;
  return {
    name: f,
    angle: angle,
    line_coord: angleToCoordinate(angle, 10),
    label_coord: angleToCoordinate(angle, 10.5),
  };
});

svg
  .selectAll("line")
  .data(featureData)
  .join((enter) =>
    enter
      .append("line")
      .attr("x1", width / 2)
      .attr("y1", height / 2)
      .attr("x2", (d) => d.line_coord.x)
      .attr("y2", (d) => d.line_coord.y)
      .attr("stroke", "black")
  );

svg
  .selectAll(".axislabel")
  .data(featureData)
  .join((enter) =>
    enter
      .append("text")
      .attr("x", (d) => d.label_coord.x - 50)
      .attr("y", (d) => d.label_coord.y - 5)
      .text((d) => d.name)
  );

let line = d3
  .line()
  .x((d) => d.x)
  .y((d) => d.y);
let colors = ["darkorange", "gray", "navy"];

function getPathCoordinates(data_point) {
  let coordinates = [];
  for (var i = 0; i < features.length; i++) {
    let ft_name = features[i];
    let angle = Math.PI / 2 + (2 * Math.PI * i) / features.length;
    coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
  }
  return coordinates;
}

svg
  .selectAll("path")
  .data(data)
  .join((enter) =>
    enter
      .append("path")
      .datum((d) => getPathCoordinates(d))
      .attr("d", line)
      .attr("stroke-width", 3)
      .attr("stroke", (_, i) => colors[i])
      .attr("fill", (_, i) => colors[i])
      .attr("stroke-opacity", 1)
      .attr("opacity", 0.5)
  );

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    quiz();
  }
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function quiz() {
  if (confirm("Do you want to take quiz about me?") == true) {
    location.replace("/project/pages/quiz.html");
  }
}

function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };
  const service_ID = "service_up7yz2p";
  const template_ID = "template_53rm78a";

  emailjs
    .send(service_ID, template_ID, params)
    .then((res) => {
      document.getElementById("email").value = "";
      console.log(res);
      alert("Your message sent succesfully!");
    })
    .catch((err) => console.log(err));
}
