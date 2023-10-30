import mongoose from "mongoose";

const teacherCollection = 'teachers';
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  credentials: {
    type: Number,
    required: true,
    unique: true
  }
  courses: [
    {
      type: string,
      required: true
    }
  ]
})
