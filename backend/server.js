import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'
import {clerkMiddleware} from '@clerk/express'

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())


await connectDB()

// Test route
app.get('/', (req, res) => res.send('API successfully connected'));

// POST route for checkout
app.post('/checkout', (req, res) => {
  const { items, total, customer } = req.body;

  if (!items || !total || !customer) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Here you can save the order to a database
  console.log('Order received:', req.body);

  res.status(200).json({ message: 'Order placed successfully!' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
