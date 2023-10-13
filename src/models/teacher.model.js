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
  }
})
