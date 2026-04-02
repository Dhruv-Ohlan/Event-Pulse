import Campaign from "../models/campaign.model.js";
import { asyncHandler } from "../middlewares/async.middleware.js";
import { generateCampaignBlueprint } from "../services/ai.service.js";

/**
 * @desc    Create a new campaign
 * @route   POST /api/campaigns
 * @access  Public
 */
const createCampaign = asyncHandler(async (req, res) => {
    const { 
        eventName, 
        eventType, 
        eventDate, 
        targetAudience, 
        goal, 
        tone, 
        channels, 
        brief 
    } = req.body;

    // Validate required fields
    if (!eventName || !eventType || !eventDate) {
        res.status(400);
        throw new Error("Please provide all required fields: eventName, eventType, and eventDate.");
    }

    // Create a new campaign instance
    const newCampaign = await Campaign.create({
        eventName,
        eventType,
        eventDate,
        targetAudience,
        goal,
        tone,
        channels,
        brief,
        status: "draft"
    });

    if (newCampaign) {
        res.status(201).json({
            success: true,
            message: "Campaign created successfully",
            data: newCampaign
        });
    } else {
        res.status(400);
        throw new Error("Failed to create campaign. Please check your data.");
    }
});

/**
 * @desc    Get all campaigns (for dashbard cards)
 * @route   GET /api/campaigns
 * @access  Public
 */
const getAllCampaigns = asyncHandler(async (req, res) => {
    const campaigns = await Campaign.find({}).sort({ createdAt: -1 }); // Newest first

    res.status(200).json({
        success: true,
        count: campaigns.length,
        data: campaigns
    });
});

/**
 * @desc    Get single campaign by ID (for timeline view)
 * @route   GET /api/campaigns/:id
 * @access  Public
 */
const getCampaignById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const campaign = await Campaign.findById(id);

    if (!campaign) {
        res.status(404);
        throw new Error("Campaign not found");
    }

    res.status(200).json({
        success: true,
        data: campaign
    });
});

/**
 * @desc    Generate a campaign blueprint using AI
 * @route   POST /api/campaigns/:id/generate
 * @access  Public
 */
const generateBlueprint = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Fetch the campaign from DB
    const campaign = await Campaign.findById(id);

    if (!campaign) {
        res.status(404);
        throw new Error("Campaign not found");
    }

    // Send the campaign data to AI service
    const blueprint = await generateCampaignBlueprint(campaign.toObject());

    // Save blueprint in MongoDB and update status
    campaign.blueprint = blueprint;
    campaign.status = "active";
    await campaign.save();

    res.status(200).json({
        success: true,
        message: "Campaign blueprint generated successfully",
        data: campaign
    });
});

export { 
    createCampaign,
    getAllCampaigns,
    getCampaignById,
    generateBlueprint
};


