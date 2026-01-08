import { Schema } from "mongoose";
import mongoose from "mongoose";

const User = new Schema({
  Name: {type: String, required: true},
  Mobile: {type: String, required: true},
  eMail: {type: String, required: true},
  Course: {type: String, required: true},
  Query: {type: String, required: false, default: 'No queries specified.'},
  Date: {type: Date, default: Date.now},
}, {collection: 'Users'})

export default mongoose.model('User', User)