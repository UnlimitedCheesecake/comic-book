(function (document, window) {

    var $ = document.querySelector.bind(document),
        images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'],
        i = 0;

    var nextImage = function () {
        var image = new Image(),
            index = (i % 4),
            imageName = images[0];

        var texture = new THREE.Texture( image, THREE.UVMapping );
        image.onload = function () {
            texture.needsUpdate = true;
            addImage(texture);
        };
        image.src = '/static/images/' + images[index];
        i++;
    }

    nextImage();
    setInterval(nextImage, 2000);

}(document, window));
