import mongoose, {Schema, schema, SchemaType} from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, //URL
            required: true
        },
        coverImage:{
            type: String
        },
        //below refrences from Video model
        watchHistory:[{
            type: Schema.Types.ObjectId,
            ref: "Video"
        }],
        password: {
            type: String,
            required: [true, "password is required"]
        },
        refreshToken: {
            type: String
        }
    },
    {timestamps: true} //mongoose automatically creates a "created/updated at" field with this
)

export const User = mongoose.model("User", userSchema)

//PK is automatically handled by mongoDB