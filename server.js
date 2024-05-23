const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to download 3D assets
app.get('/download-assets', (req, res) => {
  const file = path.join(__dirname, 'public/assets/your-assets.zip');
  res.download(file);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
