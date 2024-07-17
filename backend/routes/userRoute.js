import express from "express";
import { allBookings, bookVisit, cancleBooking, createUser, getAllFav, toFav } from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0config.js";
const router = express.Router()

router.post("/register", jwtCheck, createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", allBookings)
router.post("/removeBooking/:id", cancleBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav", getAllFav)

export { router as userRoute }