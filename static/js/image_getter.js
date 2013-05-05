(function (document, window) {

    var src = new EventSource('.'),
        $ = document.querySelector.bind(document),
        $all = document.querySelectorAll.bind(document),
        $images = $('.images');

    src.addEventListener('comic', function (evt) {
        var imageData = JSON.parse(evt.data),
            imageName = imageData.img,
            caption = imageData.caption,
            $container = document.createElement('span'),
            $caption = document.createElement('span'),
            $img = document.createElement('img');

        $images.appendChild($container);
        $container.appendChild($caption);
        $container.appendChild($img);

        $container.classList.add('img');

        $caption.innerHTML = caption;
        $caption.classList.add('caption');

        $img.src = imageName;

        $img.addEventListener('load', function (evt) {
            setTimeout(
                function () { $container.classList.add('visible'); },
                0
            );
        });

    });

}(document, window));