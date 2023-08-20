//Connecting and Inserting Data // method 1
const mongoose = require("mongoose");
const Blog = require("./model/Blog");

//database options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "blog",
};
//Connect to database.
mongoose
  .connec(
 "mongodb+srv://",    options
  )
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.error(error));

//Create a new blog post object
const article = new Blog({
  title: "Awesome post 1!",
  slug: "awesome-post",
  published: true,
  content: "This is the best post ever :) ",
  tags: ["featured", "announcement"],
});

//Inserting the article on our mongodb Database
article
  .save()
  .then((data) => console.log("Data inserted successfully:", data))
  .catch((error) => console.error("Error creating users", error));

//Find a single blog post
Blog.find()
  .then((data) => console.log("Article: ", data))
  .catch((error) => console.error("Failed to get data", error));

/* console:
  Connected To Database
Data inserted successfully: {
  title: 'Awesome post 1!',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever :) ',
  tags: [ 'featured', 'announcement' ],
  _id: new ObjectId("64e1d926fd34c690b95fd9e3"),
  comments: [],
  __v: 0
}
Article:  [
  {
    _id: new ObjectId("64e1d926fd34c690b95fd9e3"),
    title: 'Awesome post 1!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever :) ',
    tags: [ 'featured', 'announcement' ],
    comments: [],
    __v: 0
  }
]
*/
