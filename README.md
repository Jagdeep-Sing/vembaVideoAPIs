# vembaVideoAPIs

INSTRUCTIONS:

1. Test Live 
2. Run Locally

________________________________________________________________
<b>1. TEST Live </b>

The App is Live at:  http://165.227.13.44:8085/api/videos/

You can test all GET, POST, DELETE Request to this end point
Read in point 2 how to send requests.
_________________________________________________________________


<b>2. Run Locally </b>

<b><i>Mongodb is needed to run the app</i></b>

`npm install`

`node index`

<b>INSERT | VIEW | DELETE a Video</b>

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




