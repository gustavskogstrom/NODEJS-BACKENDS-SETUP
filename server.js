const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/1/workouts', async (req, res) => {
    const url = 'http://localhost:3000/workouts';
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

app.get('/api/1/workouts/:id', async (req, res) => {
    const param = req.params.id;
    const url = `http://localhost:3000/workouts/${param}`;
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

app.post('/api/1/workouts', async (req, res) => {
    const url = 'http://localhost:3000/workouts';
    const body = req.body;
    const { data } = await axios.post(url, body);
    res.status(201).json(data);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));