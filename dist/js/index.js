const app = document.getElementById("root");

//var input = document.createElement("input");
//input.setAttribute("type", "text");

const container = document.createElement("div");
container.setAttribute("class", "container");

//app.appendChild(input);

app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "data.json", true);
request.onload = function() {
  var data = JSON.parse(this.response);
  for (var i = 0; i < data.length; i++) {
    //console.log(data[i].Train_name + " is a " + data[i].Train_no + ".");
    var card = document.createElement("div");
    card.setAttribute("class", "card");

    var h2 = document.createElement("h2");
    h2.textContent = data[i].Train_no;

    var h1 = document.createElement("h1");
    h1.textContent = data[i].Train_name;

    var h3 = document.createElement("h3");
    h3.textContent = "Start: " + data[i].Starts;
    var h4 = document.createElement("h4");
    h4.textContent = "Destination: " + data[i].Ends;
    container.appendChild(card);
    card.appendChild(h2);
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(h4);
  }
};
request.send();
$(document).ready(function() {
  $("#search").keydown(function(data) {
    $("#result").html("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON("data.json", function(data) {
      $.each(data, function(key, value) {
        if (
          value.Train_name.search(expression) != -1 ||
          value.Train_no.search(expression) != -1 ||
          value.location.search(expression) != -1
        ) {
          $("#result").append(
            '<li class="list-group-item"><h3>' +
              value.Train_no +
              'height="40" width="40" class="img-thumbnail"/>' +
              value.Train_name +
              '|<span class="text-muted"> origin:' +
              value.Starts +
              '</span>|<span class="text-muted"> destination:' +
              value.Ends +
              "</span></li>"
          );
        }
      });
    });
  });
});
//var input;
//input = document.getElementById("myInput").value;
//console.log(input);
