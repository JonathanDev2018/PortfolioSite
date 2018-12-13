// prints message in Chrome developer tools to prove it worked
console.log("favorites.js loaded");

function DrawFavorites() {

  var things =[
    "iguanas",
    "edm",
    "food",
    "pokemon",
    "nature"
  ];

  var targetElement = document.getElementById("favorites");

  for (var i=0;i<things.length;i++){

    var thing = things[i];

    var listItem = document.createElement("li");

    listItem.innerText = thing;

    targetElement.appendChild(listItem);

  }

}

// this runs the "DrawFavorites" function when the web page loads
window.onload = DrawFavorites;
