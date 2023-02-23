import { RequestHandler } from 'express';
import crypto from 'node:crypto';
import { ThingsModel } from './thingIAlreadyKnow-schema.js';
import { ThingsIAlredyKnow } from './thingsIAlreadyKnow-model.js';

export const getThingsIAlredyKnowController: RequestHandler = async (
  _req,
  res,
) => {
  try {
    const foundThings = await ThingsModel.find({});
    res.json(foundThings);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createThingsIAlredyKnow: RequestHandler = async (req, res) => {
  const id = crypto.randomUUID();
  const thing: ThingsIAlredyKnow = {
    id,
    ...req.body,
  };
  try {
    await ThingsModel.create(thing);
    res.status(201).json(thing);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getThingIAlredyKnowByIdController: RequestHandler = async (
  req,
  res,
) => {
  const { id } = req.params;
  try {
    const thing = await ThingsModel.findById(id);
    if (thing === null) {
      res.sendStatus(404);
    } else {
      res.json(thing);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateThingIAlredyKnowByIdController: RequestHandler = async (
  req,
  res,
) => {
  const { id } = req.params;

  try {
    const dbRes = await ThingsModel.updateOne({ _id: id }, { ...req.body });
    if (dbRes.matchedCount === 0) {
      res.sendStatus(404);
    }

    if (dbRes.modifiedCount === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteThingIAlredyKnowByIdController: RequestHandler = async (
  req,
  res,
) => {
  const { id } = req.params;
  try {
    const dbRes = await ThingsModel.deleteOne({ _id: id });
    if (dbRes.deletedCount === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
