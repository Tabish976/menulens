import express from 'express';
import { analyzeMenu } from '../controllers/menuController.js';

const router = express.Router();
router.post('/analyze', analyzeMenu);
export default router;
