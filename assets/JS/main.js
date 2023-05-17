$(document).ready(function() {
    var currentIndex = 0;
    var images = [];
    $.getJSON("../assets/Data/data.json", function(data) {
        images = data.images;
        console.log(images)
      });
    $(".jobb").click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        images++;
    });
});