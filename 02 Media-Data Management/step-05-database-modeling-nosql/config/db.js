import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const MONGO_URI =
      "mongodb+srv://connectDB:connectDB123@connectdb.tfi99ln.mongodb.net/connectDB?appName=connectDB";
  await  mongoose.connect(MONGO_URI).then(() => {
      console.log("Database connected", MONGO_URI);
    });
  } catch (error) {
    console.log(error.message);
  }
};
