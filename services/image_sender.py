import redis
import itertools
import time

r = redis.Redis()

for image_name in itertools.cycle(['image1.jpg', 'image2.jpg', 'image3.jpg']):
    r.publish('comic', image_name)
    time.sleep(5)
