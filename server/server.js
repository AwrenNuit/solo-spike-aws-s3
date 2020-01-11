const express = require(`express`);
require(`dotenv`).config();
const app = express();
const bodyParser = require(`body-parser`);
const PORT = process.env.PORT || 5000;
const imageRouter = require(`./routes/imageRouter`);

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

app.use(express.static(`server/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/image`, imageRouter);

app.use('/s3', UploaderS3Router({
  bucket: 'prime-solo-test',                           // required
  region: 'us-east-2',                            // optional
  headers: {'Access-Control-Allow-Origin': '*'},  // optional
  ACL: 'public-read',                                 // this is the default - set to `public-read` to let anyone view uploads
}));

app.listen(PORT, ()=>{
    console.log('server up on', PORT);
});