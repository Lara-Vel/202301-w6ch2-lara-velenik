import express from 'express';
import {
  createThingsIAlredyKnow,
  deleteThingIAlredyKnowByIdController,
  getThingIAlredyKnowByIdController,
  getThingsIAlredyKnowController,
  updateThingIAlredyKnowByIdController,
} from './thingsIAlreadyKnow-controllers.js';

const router = express.Router();

router
  .route('/')
  .get(getThingsIAlredyKnowController)
  .post(createThingsIAlredyKnow);

router
  .route('/:id')
  .get(getThingIAlredyKnowByIdController)
  .patch(updateThingIAlredyKnowByIdController)
  .delete(deleteThingIAlredyKnowByIdController);

export default router;
