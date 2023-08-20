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
  .connect(
    "mongodb+srv://developerkitabpotro:mongodb1234@cluster0.f1z7gjg.mongodb.net",
    options
  )
  .then(() => console.log("Connected To Database"))
  .catch((error) => console.error(error));

//Create a new blog post object. create method automatically inserts into db.
Blog.create({
  title: "Awesome post 2!",
  slug: "awesome-post",
  published: false,
  content: "This is another best post ever :) ",
  tags: ["featured", "announcement"],
})
  .then((data) => console.log("New User Created:", data))
  .catch((err) => console.error("Failed to insert data", err));

/* console:
  Connected To Database
New User Created: {
  title: 'Awesome post 2!',
  slug: 'awesome-post',
  published: false,
  content: 'This is another best post ever :) ',
  tags: [ 'featured', 'announcement' ],
  _id: new ObjectId("64e206f98b221a79e5eeabe0"),
  comments: [],
  __v: 0
}
*/
