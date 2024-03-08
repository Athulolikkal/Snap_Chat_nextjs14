import Message, { IMessageDocument } from "@/model/messageModel";
import User, { IUserDocument } from "@/model/userModel";
import { mongooseConnect } from "./db";
import Chat, { IChatDocument } from "@/model/chatModel";
import { unstable_noStore as noStore } from "next/cache";

export const getUsersForSidebar = async (authUserId: string) => {
  noStore();
  try {
    const allUsers: IUserDocument[] = await User.find({
      _id: { $ne: authUserId },
    });
    const usersInfo = await Promise.all(
      allUsers.map(async (user) => {
        const lastMessage: IMessageDocument | null = await Message.findOne({
          $or: [
            { sender: user._id, receiver: authUserId },
            { sender: authUserId, receiver: user._id },
          ],
        })
          .sort({ createdAt: -1 })
          .populate("sender", "fullName avatar _id")
          .populate("receiver", "fullName avatar _id")
          .exec();

        return {
          _id: user._id,
          participants: [user],
          lastMessage: lastMessage
            ? {
                ...lastMessage,
                sender: lastMessage.sender,
                receiver: lastMessage.receiver,
              }
            : null,
        };
      })
    );
    return usersInfo;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
