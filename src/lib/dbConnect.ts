import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const conncection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (conncection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    conncection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Database Connection failed", error);
    process.exit(0);
  }
}
 export default dbConnect;