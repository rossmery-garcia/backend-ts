import { model, Schema } from 'mongoose';

interface User {
  email: string;
  passwordHash: string;
}

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = model<User>('User', userSchema);

export default User;
