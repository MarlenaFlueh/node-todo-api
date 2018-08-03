const MongoClient = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.");
    }
    console.log("Connection successful");
    const db = client.db("TodoApp");

    db.collection("Todos")
      .find()
      .toArray()
      .then(
        docs => {
          console.log("Todos");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        error => {
          console.log("Unable to fetch Todos", error);
        }
      );

    client.close();
  }
);
