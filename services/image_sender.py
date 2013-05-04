import redis
import time
import requests
import json

r = redis.Redis()

res = requests.get('https://api.instagram.com/v1/tags/carl/media/recent?access_token=106417.41beab8.b0c84849cab346ffa6a624cf43cb1eb1')
images = json.loads(res.content)['data']

for image in images:
    url = image['images']['standard_resolution']['url']
    r.publish('comic', url)
