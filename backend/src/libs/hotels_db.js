/* Modules */
import { Mongoose } from "mongoose";

/* Keys */
import config from "../config";

/* Consts */
const { ENVIRONMENT, MONGO_URL_DEV, MONGO_URL_PROD, MONGO_POOL_SIZE } = config;
const MongoHotels = new Mongoose();
const IS_PROD = ENVIRONMENT === "prod" ? true : false;
const MAINTENANCE_MODE = false;

if (MAINTENANCE_MODE !== "true") {
  const commonOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const mongooseOptions = !IS_PROD
    ? commonOptions
    : {
        keepAlive: 120,
        connectTimeoutMS: 40000,
        ...commonOptions,
      };

  const NODE_DB_URI = ENVIRONMENT === "dev" ? MONGO_URL_DEV : MONGO_URL_PROD;

  MongoHotels.connect(NODE_DB_URI, mongooseOptions)
    .then(() => console.log("Connected with Mongoose."))
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

module.exports = {
  MongoHotels,
};
