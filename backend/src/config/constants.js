import {config} from "dotenv";

config()

const { MONGO_URL, PORT } = process.env;
console.log("🚀 ~ file: constants.js:6 ~ MONGO_URL:", MONGO_URL)

module.exports = { MONGO_URL, PORT };
