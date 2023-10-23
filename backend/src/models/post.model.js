import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      maxLength: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    replies: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        userProfilePicture: {
          type: String,
        },
        userName: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
