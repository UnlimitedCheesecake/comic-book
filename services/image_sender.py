import redis
import requests
import json
import time
import os

r = redis.Redis()

access_token = os.environ.get('ACCESS_TOKEN', None)

if not access_token:
    raise Exception

tag = os.environ.get('TAG', 'test')

while True:
    res = requests.get('https://api.instagram.com/v1/tags/%s/media/recent?access_token=%s' % (tag, access_token))
    images = json.loads(res.content)['data']

    for image in images:
        caption = image['caption']['text']
        img = image['images']['standard_resolution']['url']
        r.publish('comic', json.dumps({'caption': caption, 'img': img}))
        time.sleep(5)
