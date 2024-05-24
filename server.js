const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to serve scene configurations
app.get('/scenes/:id', (req, res) => {
    const sceneId = req.params.id;
    res.sendFile(path.join(__dirname, 'scenes', `${sceneId}.json`));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
