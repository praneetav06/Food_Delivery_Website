import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://praneetav06:eLz1jTHs3t8uVUXm@fooddeliverywebsite.1j0qr.mongodb.net/Food_Delivery_Website"
    )
    .then(() => console.log("connected to DB"));
};
