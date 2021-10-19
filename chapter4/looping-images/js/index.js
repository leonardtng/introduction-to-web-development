const images = ["./assets/leonard.jpg", "./assets/aadi.jpeg", "./assets/mark.png"]

function addingImages(images) {
  for (var i = 0; i < images.length; i++) {
    var image = document.createElement("img");
    image.setAttribute("src", images[i]);
    image.setAttribute("width", "30%");
    console.log(document.getElementById("gallery"))
    document.querySelector(".gallery").appendChild(image);
  }
}

window.onload = function () {
  addingImages(images)
}
