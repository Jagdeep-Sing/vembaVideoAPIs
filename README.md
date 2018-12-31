# vembaVideoAPIs

How to setup:

<b><i>Mongodb is needed to run the app</i></b>

`npm install`

`node index`

To view all videos send GET request to :

 GET http://localhost:8080/api/videos

To insert a video send POST request to Same URL with following values as x-www-form-urlencoded data:

<i> title </i> <br>
<i> videoURL</i><br>
<i>thumbnailURL </i><br>
<i>videoDuration</i>

To Delete a video send DELETE request to Same URL with video id:

DELETE http://localhost:8080/api/videos/videoID

To view a specfic video send GET request to same URL with video id:

GET  http://localhost:8080/api/videos/videoID




