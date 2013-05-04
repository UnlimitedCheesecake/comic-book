(function (document, window) {

    var $ = document.querySelector.bind(document),
        images = ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        i = 0;

    setInterval(function () {
        var image = new Image(),
            index = (i % 3),
            imageName = images[0];

        var texture = new THREE.Texture( image, THREE.UVMapping );
        image.onload = function () {
            texture.needsUpdate = true;
            addImage(texture);
        };
        image.src = '/static/images/' + images[index];
        i++;
    }, 2000);

}(document, window));
