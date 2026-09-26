import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import programRoutes from './routes/programRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from server/.env or root .env
const serverEnvPath = path.join(__dirname, '.env');
const rootEnvPath = path.join(__dirname, '..', '.env');

if (fs.existsSync(serverEnvPath)) {
  dotenv.config({ path: serverEnvPath });
} else if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
} else {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

let isConnected = false;

// Middleware
app.use(cors());
app.use(express.json());

// Inject database connection status
app.use((req, res, next) => {
  req.dbConnected = isConnected;
  next();
});

// Routes
app.use('/api/programs', programRoutes);
app.use('/api/bookings', bookingRoutes);

// Serve static client build in production
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    app: 'IM-PACT Communication Center API',
    dbConnected: isConnected,
    timestamp: new Date().toISOString()
  });
});

// Start Express Server
const startServer = async () => {
  isConnected = await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🎙 IM-PACT Express Server active on http://localhost:${PORT}`);
    console.log(`📊 Health Endpoint: http://localhost:${PORT}/api/health`);
    console.log(`💾 Database Status: ${isConnected ? '✅ MongoDB Atlas Connected' : '⚠️ Operating in Fallback Mode'}`);
    console.log(`=======================================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Server Notice] Port ${PORT} is already in use by another instance. Express backend is running on an active process.`);
    } else {
      console.error('[Server Error]', err.message);
    }
  });
};

startServer();
