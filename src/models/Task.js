import { Schema, model, models } from 'mongoose';

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El titulo es requerido'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'La descripcion es requerida'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Task || model('Task', taskSchema);
