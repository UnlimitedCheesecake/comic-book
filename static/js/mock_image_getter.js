(function (document, window) {

    var $ = document.querySelector.bind(document),
        $images = $('.images'),
        images = ['image1.jpg', 'image2.jpg', 'image3.jpg'],
        i = 0;

    setInterval(function () {
        var $img = document.createElement('img'),
            index = (i % 3),
            imageName = images[0];

        $img.src = '/static/images/' + images[index];

        $images.appendChild($img);
        i++;
    }, 2000);

}(document, window));