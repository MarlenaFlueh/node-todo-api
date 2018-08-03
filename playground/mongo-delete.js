const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.");
    }
    console.log("Connection successful");
    const db = client.db("TodoApp");
    // methods for Todos

    // db.collection("Todos")
    //   .deleteMany({ text: "eat lunch" })
    //   .then(result => {
    //     console.log("Delete Todo");
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .deleteOne({ text: "eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // methods for users

    // db.collection("Users")
    //   .deleteMany({ name: "Marlena" })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectId("5b64025af3b6232840f4227d") })
      .then(result => {
        console.log(JSON.stringify(result, undefined, 2));
      });
    client.close();
  }
);
