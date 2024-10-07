const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


const musicRoutes = require('./routes/musicRoutes');
app.use('/', upload.single('musicFile'), musicRoutes);


app.listen(3001, () => {
  console.log('Server running on port http://localhost:3001');
});
