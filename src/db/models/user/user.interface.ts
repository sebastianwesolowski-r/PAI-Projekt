import mongoose from 'mongoose';

export interface DbUserModelInterface {
   uuid: mongoose.Schema.Types.ObjectId;
   name: string;
   email: string;
   password: string;
   age: number;
   tokens: string[];
   avatar: Buffer;
   toJSON: () => object;
   generateAuthToken: () => string;
   findByCredentials: (email: string, password: string) => DbUserModelInterface;
}
