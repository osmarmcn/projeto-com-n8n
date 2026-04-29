import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { errorMiddleware } from '../interfaces/middlewares/errorMiddleware';
import { setupRoutes } from './routes';



const app = express();
app.use(express.json());

app.use(setupRoutes());
app.use(errorMiddleware)

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});