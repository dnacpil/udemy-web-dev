import mongoose, {Schema, schema, SchemaType} from "mongoose";

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        views:{
            type: Number,
            defualt: 0
        },
        video: [{
            type: Schema.Types.ObjectId,
            ref: "Video"
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: "Owner"
        }
    },
    {timestamps: true}
)

export const Playlist = mongoose.model("Playlist", playlistSchema)