const db = require("../config/connection");
const { User, Book } = require("../models");
const cleanDB = require("./cleanDB");

const userData = require("./userData.json");

db.once("open", async () => {
  await cleanDB("User", "users");

  await User.insertMany(userData);

  console.log("Seeds Finished!");
  process.exit(0);
});
