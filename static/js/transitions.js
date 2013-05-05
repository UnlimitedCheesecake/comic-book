(function () {

    var $ = document.querySelector.bind(document),
        $images = $('.images'),
        $trans1 = $('.trans1'),
        $trans2 = $('.trans2'),
        $trans3 = $('.trans3'),
        dragging = false;

    // $trans1.addEventListener('click', function () {
    //     $images.classList.add('trans1');
    // });

    // $trans2.addEventListener('click', function () {
    //     $images.classList.add('trans2');
    // });

    // $trans3.addEventListener('click', function () {
    //     $images.classList.add('trans3');
    // });

    $images.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        dragging = true;
    });

    $images.addEventListener('mouseup', function (evt) {
        evt.preventDefault();

        dragging = false;
    });

    $images.addEventListener('mousemove', function (evt) {
        var x = evt.clientX,
            y = evt.clientY;

        if (dragging) {
            this.setAttribute('style', '-webkit-transform: translateX(-' + x + 'px) translateY(-' + y + 'px)');
        }
    });

    $images.addEventListener('mousewheel', function (evt) {
        var y = evt.wheelDeltaY;

        this.setAttribute('style', '-webkit-transform: scale(' + y + ')');
    });

}());