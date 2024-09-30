import { Router } from "express";
import * as show from "./requestHandler.js";

const router=Router();
router.route("/addshow").post(show.addShow)
router.route("/getshows").get(show.getShows)
router.route("/deleteshows").get(show.deleteShow)
export default router;