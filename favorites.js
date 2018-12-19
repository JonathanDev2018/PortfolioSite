// prints message in Chrome developer tools to prove it worked
console.log("favorites.js loaded");

function DrawFavorites() {

  var thingNames =[
    "Iguanas",
    "EDM",
    "Food",
    "Pokemon",
    "Nature",
    "Travel",
    "Dance"
  ];

  var thingImages =[
    "iguana1.jpg",
    "edmfest.jpg",
    "foodie.jpg",
    "pokemonghost.jpg",
    "nature.jpg",
    "festivalblue.jpg",
    "ravemachine.jpg"
  ];

  var targetElement = document.getElementById("favorites");

  for (var i=0;i<thingNames.length;i++){

    var thing = thingNames[i];

    var listItem = document.createElement("li");

    listItem.innerHTML =
      "<div class='imageBox' style='background-image:url("
      + thingImages[i]
      +")' >"
      + thingNames[i]

      + "</div>";

    targetElement.appendChild(listItem);

  }

}

// this runs the "DrawFavorites" function when the web page loads
window.onload = DrawFavorites;
