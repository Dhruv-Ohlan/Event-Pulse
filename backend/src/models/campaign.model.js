import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true,
            trim: true,
        },
        eventType: {
            type: String,
            required: true,
            trim: true,
        },
        eventDate: {
            type: Date,
            required: true,
        },
        targetAudience: {
            type: String,
            trim: true,
        },
        goal: {
            type: String,
            trim: true,
        },
        tone: {
            type: String,
            trim: true,
        },
        channels: [
            {
                type: String,
                trim: true,
            },
        ],
        brief: {
            type: String,
        },
        blueprint: {
            type: mongoose.Schema.Types.Mixed,
        },
        contentBlocks: [
            {
                type: mongoose.Schema.Types.Mixed,
            },
        ],
        status: {
            type: String,
            enum: ["draft", "active", "completed", "archived"],
            default: "draft",
        },
    },
    { timestamps: true }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

export default Campaign;
