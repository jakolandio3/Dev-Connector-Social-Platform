import { Request, Response } from 'express';
import cors from 'cors';
const connnectDB = require('./config/db');
const express = require('express');
const path = require('path');

const app = express();
//connect DB
connnectDB();

//middleware
app.use(express.json({ extended: false }));
app.use(cors());
//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/.next'));

	app.get('*', (req: any, res: any) => {
		res.sendFile(path.resolve(__dirname, 'client', '.next', 'index.html'));
	});
}

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
