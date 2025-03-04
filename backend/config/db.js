import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(process.env.ATLAS_PWD)
    .then(() => console.log("connected to DB"));
};
