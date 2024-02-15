import express from "express";
import{} from "../controllers/user.js";

const router = express.Router()

router.get("/all", getAllUser);
router.post("/new", register);
router.get('/userid/:id', get(getUserDetails));
export default router;