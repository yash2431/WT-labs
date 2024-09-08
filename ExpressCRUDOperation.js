const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

let items = []; // In-memory store for items

// Create - POST /items
app.post('/items', (req, res) => {
    const item = req.body;
    item.id = items.length ? items[items.length - 1].id + 1 : 1; // Simple ID assignment
    items.push(item);
    res.status(201).json(item);
});

// Read - GET /items
app.get('/items', (req, res) => {
    res.json(items);
});

// Read - GET /items/:id
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Update - PUT /items/:id
app.put('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        items[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(items[index]);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Delete - DELETE /items/:id
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index !== -1) {
        items.splice(index, 1);
        res.status(204).end(); // No content
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Start the server
app.listen(2024, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
