import express from 'express';
import thingsIAlredyKnowRouter from './ThingsIAlreadyKnow/thingsIAlreadyKnow-router.js';

const router = express.Router();

router.use('/thingsIAlredyKnow', thingsIAlredyKnowRouter);

export default router;
