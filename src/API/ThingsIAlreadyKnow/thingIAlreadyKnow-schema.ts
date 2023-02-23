import mongoose, { Schema } from 'mongoose';

const thingsSchema = new Schema({
  id: String,
  things: String,
});

export const ThingsModel = mongoose.model(
  'Things',
  thingsSchema,
  'Thigs-I-Alredy-Know',
);
