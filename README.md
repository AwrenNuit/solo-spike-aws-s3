# AWS S3 Bucket Spike

## Description
I am using this technology in my solo project. This is the bare minimum as far as functionality: clicking the button allows the user to select a file to upload, then it uploads it to the S3 bucket as well as to the database, then the image from the S3 bucket is rendered onto the page. If there's more than a few images the button gets covered up - this isn't meant to be perfect or even presentable. It's a study in getting the base functionality to happen. Speaking with an upperclassman who used this in his solo project was my biggest help. Another helpful tool was a video series that a faculty member made on Dropzone S3 Uploader and React. Those two resources helped substantially with getting a bucket set up and getting files to upload to the bucket. Getting files to render was much more difficult to figure out. AWS documentation is a pretty rough read, so I experimented with some things until I got something working.

## Technologies Used
- React
- Redux
- Redux-Saga
- Nodejs
- Axios
- Express
- PostgreSQL
- Dropzone-S3-Uploader
- AWS S3

## Installation
- Download this repository
- Run 'npm install'
- Set up your database, I recommend using Postico
- 'npm run server' starts the server
- 'npm run client' starts the client

Thanks to faculty and students at Prime Digital Academy for helping me troubleshoot this.

With questions or concerns, email me at awren.nuit@gmail.com