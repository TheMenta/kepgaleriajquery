$(document).ready(function() {
    var currentIndex = 0;
    var images = [];
    $.getJSON("../assets/Data/data.json", function(data) {
        images = data.images;
        console.log(images);
    });
    
    $(".jobb").click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        var currentImage = images[currentIndex].path;
        $(".image-container").attr("src", currentImage);
    });
    
    $(".bal").click(function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        var currentImage = images[currentIndex].path;
        $(".image-container").attr("src", currentImage);
    });

    var smallImages = [];

    $.getJSON("../assets/Data/data.json", function(data) {
        smallImages = data["small-images"];
        kiskepek(smallImages);
    });

    $(".kiskep").on("click", ".image-container2", function() {
        var index = $(".image-container2").index(this);
        var currentImage = images[index].path;
        $(".image-container").attr("src", currentImage);
    });
    
  
  });
    function kiskepek(images) {
        var kiskepDiv = $(".kiskep");
        for (var i = 0; i < images.length; i++) {
            var imagePath = images[i].path;
            var imageElement = $("<img>").addClass("image-container2").attr("src", imagePath).attr("alt", "kiskep");
            kiskepDiv.append(imageElement);
        }
        var imageCount = images.length;
        var colClass = "col-" + Math.floor(12 / imageCount);
        $(".image-container2").addClass(colClass);
    }

