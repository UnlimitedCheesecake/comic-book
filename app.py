import os
import pystache
import gevent
import gevent.monkey
import itertools
import time
from gevent.pywsgi import WSGIServer
gevent.monkey.patch_all()

from pystache.loader import Loader

from flask import Flask, Response, request
app = Flask(__name__)


loader = Loader()
templates = {
    'comic': loader.load_name('comic')
}


@app.route('/')
def index():
    if request.headers.get('accept') == 'text/event-stream':
        def images():
            for title in itertools.cycle(('image1.jpg', 'image2.jpg', 'image3.jpg')):
                yield 'event: comic\n'
                yield 'data: %s\n\n' % title
                time.sleep(5)
        return Response(images(), content_type='text/event-stream')

    return pystache.render(
        templates['comic'],
        {},
    )


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    http_server = WSGIServer(('0.0.0.0', port), app)
    http_server.serve_forever()
