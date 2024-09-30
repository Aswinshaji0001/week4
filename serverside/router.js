import { Router } from "express";
import * as show from "./requestHandler.js";

const router=Router();
router.route("/addshow").post(show.addShow)
router.route("/getshows").get(show.getShows)
router.route("/getshow/:id").get(show.getShow)
router.route("/deleteshow/:_id").delete(show.deleteShow)
router.route("/editshow/:_id").put(show.editShow)
export default router;