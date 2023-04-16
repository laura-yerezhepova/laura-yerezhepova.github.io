var range = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var range_names = [
  "1-10",
  "11-20",
  "21-30",
  "31-40",
  "41-50",
  "51-60",
  "61-70",
  "71-80",
  "81-90",
  "91-100",
  "unknown",
];

function parseCsv() {
  d3.csv("titanic.csv", function (data) {
    for (var i = 0; i < data.length; i++) {
      age = data[i].Age;
      if (age >= 0 && age <= 10) {
        range[0] += 1;
      } else if (age >= 11 && age <= 20) {
        range[1] += 1;
      } else if (age >= 21 && age <= 30) {
        range[2] += 1;
      } else if (age >= 31 && age <= 40) {
        range[3] += 1;
      } else if (age >= 41 && age <= 50) {
        range[4] += 1;
      } else if (age >= 51 && age <= 60) {
        range[5] += 1;
      } else if (age >= 61 && age <= 70) {
        range[6] += 1;
      } else if (age >= 71 && age <= 80) {
        range[7] += 1;
      } else if (age >= 81 && age <= 90) {
        range[8] += 1;
      } else if (age >= 91 && age <= 100) {
        range[9] += 1;
      } else {
        range[10] += 1;
      }
    }

    var data = range;

    var svg = d3.select("svg"),
      width = svg.attr("width"),
      height = svg.attr("height"),
      radius = Math.min(width, height) / 2,
      g = svg
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal([
      "#8CBEFF",
      "#F9A77F",
      "#B2DB92",
      "#FFD3B5",
      "#C3B1E1",
      "#F0E68C",
      "#98FB98",
      "#FFEF96",
      "#E6E6FA",
      "#FFC0CB",
      "#FFE4E1",
    ]);

    var label = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(radius - 80);

    
    var pie = d3.pie();

    
    var arc = d3.arc().innerRadius(0).outerRadius(radius);

    
    var arcs = g
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    
    arcs
      .append("path")
      .attr("fill", function (d, i) {
        return color(i);
      })
      .attr("d", arc);

    arcs
      .append("text")
      .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .text(function (d, i) {
        return range_names[i];
      });
  });
}

function scatterPlot() {
  var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  var svg = d3
    .select("#scatter_plot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  d3.csv(
    "points.csv",
    function (data) {
      var x = d3.scaleLinear().domain([0, 1000]).range([0, width]);
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      var y = d3.scaleLinear().domain([0, 1000]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      svg
        .append("g")
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          return x(d.x);
        })
        .attr("cy", function (d) {
          return y(d.y);
        })
        .attr("r", 1.5)
        .style("fill", "#69b3a2");
    }
  );
}

function load() {
  parseCsv();
  scatterPlot();
}
