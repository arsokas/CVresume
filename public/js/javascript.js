document.addEventListener("DOMContentLoaded", function() {
  var mouseLocationX, mouseLocationY;
  var traX, traY;
  document.addEventListener("mousemove", function(e) {
    mouseLocationX = e.pageX;
    mouseLocationY = e.pageY;
    traX = (4 * mouseLocationX) / 570 + 40;
    traY = (4 * mouseLocationY) / 570 + 50;
    var x = (document.getElementsByClassName(
      "title-header"
    )[0].style.backgroundPosition = traX + "%" + traY + "%");
  });
});
