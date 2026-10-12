import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import bookingRoutes from './routes/bookingRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStates = {
    0: 'مفصول (Disconnected)',
    1: 'متصل (Connected)',
    2: 'جاري الاتصال (Connecting)',
    3: 'جاري الانفصال (Disconnecting)',
  };

  const dbStateCode = mongoose.connection.readyState;
  res.status(200).json({
    status: 'healthy',
    message: 'خادم Nawaz AC & Home Maintenance يعمل بنجاح',
    database: {
      status: dbStates[dbStateCode] || 'Unknown',
      connected: dbStateCode === 1,
    },
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/bookings', bookingRoutes);

// 404 Route Handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'المسار المطلوب غير موجود',
  });
});

// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 خادم صيانة نواز يعمل الآن على المنفذ: ${PORT}`);
  console.log(`📡 نقطة فحص الحالة: http://localhost:${PORT}/api/health`);
});
