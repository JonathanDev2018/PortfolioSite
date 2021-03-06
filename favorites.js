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
    "favimages/iguana1.jpg",
    "favimages/edmfest.jpg",
    "favimages/foodie.jpg",
    "favimages/pokemonghost.jpg",
    "favimages/nature.jpg",
    "favimages/festivalblue.jpg",
    "favimages/ravemachine.jpg"
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
