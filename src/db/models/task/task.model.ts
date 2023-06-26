import mongoose from 'mongoose';

import { DbTaskModel } from './task.interface';

const taskSchema = new mongoose.Schema<DbTaskModel>(
   {
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
      description: { type: String, required: true, trim: true },
      completed: { type: Boolean, default: false },
      authorUuid: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
   },
   {
      timestamps: true,
   }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
