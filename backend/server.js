const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/auth');
const projectRoutes = require('./src/routes/projects');
const { connectDB } = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));