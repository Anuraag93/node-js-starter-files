const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("express"));

//Mongodb
const username = "anuraagbanger";
const password = "EI9h1ETt3V0A11IK";

const { MongoClient, ServerApiVersion } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://anuraagbanger:EI9h1ETt3V0A11IK@cluster1.4bafbiy.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  try {
    await client.connect();

    const collection = client.db("testTwo").collection("sales");
    // perform actions on the collection object
    console.log("Connected to MongoDB");

    //CRUD
    //Create / POST
    await collection
      .insertOne({
        _id: 9,
        item: "xyz",
      })
      .catch(() => console.log("error inserting"));

    //Read / GET
    const matches = await collection
      .find({ item: "xyz" })
      .sort({ _id: 1 })
      .toArray();

    console.log("matches: ", matches);

    //Update / PUT
    await collection.updateOne(
      { _id: 10 },
      {
        $set: {
          item: "xyz",
          price: 6,
          quantity: 10,
          date: new Date(),
        },
      },
      {
        upsert: true,
      }
    );
    const updatedMatches = await collection
      .find({ item: "xyz" })
      .sort({ _id: 1 })
      .toArray();
    console.log("updatedMatches: ", updatedMatches);

    // Delete / DELETE
    await collection.deleteOne({ _id: 10 });

    const matchesWithDeletedItemMissing = await collection
      .find({ item: "xyz" })
      .sort({ _id: 1 })
      .toArray();
    console.log(
      "matchesWithDeletedItemMissing: ",
      matchesWithDeletedItemMissing
    );
  } catch (e) {
    console.log("error: ", e);
  } finally {
    client.close();
  }
}

main().catch(console.error);

//listener
// const server = http.createServer(app);
// const port = 4040;
// server.listen(port);

// console.log(`Server running on port ${port}`);
