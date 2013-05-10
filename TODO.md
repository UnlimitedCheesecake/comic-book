TODO
====

Message capturer
----------------
Captures messages from streams e.g. Twitter and Instagram and sends them on for processing.

 - ~~Make an Instagram test aggregator that takes images via the API for a particular account and then adds them to a Redis queue.~~
 - Create a view that hooks into Instagram webhook to pick up images from a tag in real time. 

Image capturer
--------------
Captures tweets and instagrams and generates or grabs images probably in a cronjob.

 - Make a simple image getter that stores the image locally and then puts the new name on Redis.

Image processor
---------------
Generated a new image with comic book processing. 

Image sender
------------
A server sending SSE of image URLs to be obtained by the frontend for display.

 - ~~Create a flask app with a simple view that sends test image URLs.~~

Image displayer
---------------
Displays images in realtime in WebGL as a comic book.

 - ~Get Instagram description overlapping image. Use http://www.fontsquirrel.com/fonts/Komika-Text.~
 - ~Create some test transitions.~
 - ~~Write a function that can transition to an image.~~
 - Make function set opacity of other images to 0.
 - Make function that can take a set of images and display them in the container.
