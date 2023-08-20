//Here we will first create schema and then model based on that schema
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [
    {
      user: String,
      content: String,
      votes: Number,
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema); //use singular form in model name. Here "Blog", don't use 'Blogs'
module.exports = Blog;
