// server.ts
import express from 'express';
import webhookRouter from './webhook/webhook_call';

const app = express();
app.use(express.json());
app.use('/', webhookRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});