import mongoose from 'mongoose';

export interface DbTaskModel {
   id: mongoose.Schema.Types.ObjectId;
   description: string;
   completed: boolean;
   authorUuid: mongoose.Schema.Types.ObjectId;
}
