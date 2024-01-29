import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function mongooseConnect() {
  if (cachedConnection) {
    console.log("USING MONGODB CACHED CONNECTION");
    return cachedConnection;
  }

  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI!);
    cachedConnection = dbConnection.connection;
    console.log("MONGODB NEW CONNECTION");
    return cachedConnection;
  } catch (err) {
    console.log("CONNECTION ERROR", err);
    throw err;
  }
}
