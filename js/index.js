const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "./img/logo.png";
const head = document.createElement("h1");
h1.textContent = "TRAIN LIST WITH ORIGIN AND ENDS";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(head);

app.appendChild(container);
/*fetch("data.json")
  .then(res => res.json())
  .then(data => {
    let root = "<h2>Train Number</h2>";
    data.forEach(function(post) {
      root += ' <div class="card"><h1>'
      ${post.Train_number}</h1>';
    });
  });

*/
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
  // Begin accessing JSON data here
  /*var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(train => {
      
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h2 = document.createElement("h2");
      h1.textContent = train.train_number;

      const h1 = document.createElement("h1");
      train.train_number = movie.train_name;
      p.textContent = `${train.train_name}...`;

      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(h1);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};
*/
};
request.send();
