const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Set up storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype === 'model/gltf+json' || file.mimetype === 'model/gltf-binary') {
      cb(null, 'public/uploads/models/');
    } else {
      cb(null, 'public/uploads/textures/');
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for uploading files
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
