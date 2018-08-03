const MongoClient = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.");
    }
    console.log("Connection successful");
    const db = client.db("TodoApp");

    // findOneAndDelete

    client.close();
  }
);
