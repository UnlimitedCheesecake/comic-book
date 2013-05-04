(function (document, window) {

    var src = new EventSource('.'),
        $ = document.querySelector.bind(document),
        $all = document.querySelectorAll.bind(document),
        $images = $('.images');

    src.addEventListener('comic', function (evt) {
        var imageName = evt.data,
            $img = document.createElement('img');

        $img.src = imageName;

        $img.addEventListener('load', function (evt) {
            $images.appendChild($img);
            setTimeout(
                function () { $img.classList.add('visible'); },
                0
            );
        });

    });

}(document, window));