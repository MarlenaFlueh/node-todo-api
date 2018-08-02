const MongoClient = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect.");
    }
    console.log("Connected successful");

    const db = client.db("TodoApp");
    // db.collection("Todos").insertOne(
    //   {
    //     text: "wash your hands",
    //     completed: false
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to add todo", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );
    db.collection("Users").insertOne(
      {
        name: "Marlena",
        age: 222
      },
      (error, result) => {
        if (error) {
          return console.log("add new user failed", error);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );
    client.close();
  }
);
