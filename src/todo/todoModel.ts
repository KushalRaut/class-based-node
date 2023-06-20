import mongoose, { Types } from "mongoose";

export interface ITodo {
    title: string;
    description: string;
    status: string;
    date: Date;
    _id?: Types.ObjectId;
}

const Todo = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Todo", Todo);
