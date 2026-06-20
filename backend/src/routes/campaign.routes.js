import express from "express";
import { 
    createCampaign, 
    getAllCampaigns, 
    getCampaignById, 
    generateBlueprint 
} from "../controllers/campaign.controller.js";
import { protect, authorize } from '../middlewares/auth.middleware.js';

const router = express.Router();

// @route   POST /api/campaigns
router.post("/", protect, createCampaign);

// @route   GET /api/campaigns
router.get("/", protect, getAllCampaigns);

// @route   GET /api/campaigns/:id
router.get("/:id", protect, getCampaignById);

// @route   POST /api/campaigns/:id/generate
router.post("/:id/generate", protect, authorize('admin'), generateBlueprint);

export default router;


