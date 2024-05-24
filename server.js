const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Endpoint to serve scene configurations
app.get('/scenes/:id', (req, res) => {
    const sceneId = req.params.id;
    res.sendFile(path.join(__dirname, 'scenes', `${sceneId}.json`));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
