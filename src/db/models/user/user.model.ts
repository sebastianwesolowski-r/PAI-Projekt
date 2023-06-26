import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import validator from 'validator';

import Task from '../task/task.model';
import { DbUserModelInterface } from './user.interface';

const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema<DbUserModelInterface>(
   {
      uuid: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: { type: String, required: true, trim: true },
      email: {
         type: String,
         unique: true,
         required: true,
         trim: true,
         lowercase: true,
         validate(value) {
            if (!validator.isEmail(value)) {
               throw new Error('Provided email is invalid');
            }
         },
      },
      password: {
         type: String,
         required: true,
         trim: true,
         minlength: 7,
         validate(value) {
            if (value.toLowerCase().includes('password')) {
               throw new Error('Your password is too weak');
            }
         },
      },
      age: {
         type: Number,
         default: 0,
         validate(value) {
            if (value < 0) {
               throw new Error('Age must be a positive number');
            }
         },
      },
      tokens: [
         {
            token: {
               type: String,
               required: true,
            },
         },
      ],
      avatar: {
         type: Buffer,
      },
   },
   {
      timestamps: true,
   }
);

userSchema.virtual('tasks', {
   ref: 'Task',
   localField: 'uuid',
   foreignField: 'authorUuid',
});

userSchema.methods.toJSON = function () {
   const user = this;
   const userObject = user.toObject();

   delete userObject.password;
   delete userObject.tokens;
   delete userObject.avatar;

   return userObject;
};

userSchema.methods.generateAuthToken = async function () {
   const user = this;
   const token = jwt.sign({ _id: user.uuid.toString() }, process.env.JWT_TOKEN);

   user.tokens = user.tokens.concat({ token });

   await user.save();

   return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
   const user = await User.findOne({ email });

   if (!user) {
      throw new Error('Unable to login');
   }

   const isMatch = await bcrypt.compare(password, user.password);

   if (!isMatch) {
      throw new Error('Unable to login');
   }

   return user;
};

userSchema.pre('save', async function (next) {
   const user = this;

   if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
   }

   next();
});

userSchema.pre('deleteOne', async function (next) {
   const user = this;

   await Task.deleteMany({ author: user._id });

   next();
});

const User = mongoose.model('User', userSchema);

export default User;
