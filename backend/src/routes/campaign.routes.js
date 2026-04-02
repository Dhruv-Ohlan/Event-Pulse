import express from "express";
import { 
    createCampaign, 
    getAllCampaigns, 
    getCampaignById, 
    generateBlueprint 
} from "../controllers/campaign.controller.js";

const router = express.Router();

// @route   POST /api/campaigns
router.post("/", createCampaign);

// @route   GET /api/campaigns
router.get("/", getAllCampaigns);

// @route   GET /api/campaigns/:id
router.get("/:id", getCampaignById);

// @route   POST /api/campaigns/:id/generate
router.post("/:id/generate", generateBlueprint);

export default router;


