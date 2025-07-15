const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Accept JSON payloads

app.get('/', (req, res) => {
  res.send('Evelyn Contact API 💌 is running...');
});

app.use('/api/contact', contactRoutes); // Mount contact route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🪽 Server running on port ${PORT}`));
