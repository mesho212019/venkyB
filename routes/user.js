import express from "express";
import{
    getAllUser, 
    login, 
    register, 
    getMyProfile ,
    logout
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router()
router.get("/all", getAllUser); 
router.post("/new", register); 
router.post("/login", login); 
router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile);
// router.route("/userid/:id").get(getUserDetails)
export default router;