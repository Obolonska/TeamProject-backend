import { Router } from 'express';
import authRouter from './auth.js';
import storiesRouter from './stories.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/stories', authenticate, storiesRouter);

export default router;
