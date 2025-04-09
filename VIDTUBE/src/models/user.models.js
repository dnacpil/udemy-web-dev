import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //URL
      required: true,
    },
    coverImage: {
      type: String,
    },
    //below refrences from Video model
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true } //mongoose automatically creates a "created/updated at" field with this
);
//encrypting the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); //you're saying this because the first time you save the password, you're not modifying it
  this.password = bcrypt.hash(this.password, 10); //need to mention which you're hashing
  next();
});

//comparing the passwords
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//generate an access token for when a user is logged in - JWT
userSchema.methods.generateAccessToken = function () {
  //short lived access token
  return jwt.sign(
    {
      _id: this._id, //usually in prod, only ID is needed
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET, //variable is defined in env
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
    //short lived access token
    return jwt.sign(
      {
        _id: this._id
      },
      process.env.REFRESH_TOKEN_SECRET, //variable is defined in env
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
  };

export const User = mongoose.model("User", userSchema);

//PK is automatically handled by mongoDB
