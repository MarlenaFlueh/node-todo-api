const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// const newTodo = new Todo({
//   text: "Cook soup"
// });

// const secondTodo = new Todo({
//   text: "eat everybody",
//   completed: false,
//   completedAt: 5
// });

// secondTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   error => {
//     console.log("Unable to save todo", error);
//   }
// );

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

const newUser = new User({
  name: "Malle",
  email: "   m.flueh@gmx.de"
});

newUser.save().then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  }
);
