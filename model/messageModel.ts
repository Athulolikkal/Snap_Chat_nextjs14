import mongoose, { Model, Schema, Types, models } from "mongoose";

export interface IMessage {
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  content: string;
  messageType: "text" | "image";
  opened: boolean;
}

export interface IMessageDocument extends IMessage, Document {
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessageDocument>({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  messageType: { type: String, required: true, enum: ["text", "image"] },
  opened: { type: Boolean, required: true, default: false },
});

const Message: Model<IMessageDocument> =
  models?.Message || mongoose.model("Message", messageSchema);

export default Message;
