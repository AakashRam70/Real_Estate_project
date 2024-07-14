import express from "express";
import { allBookings, bookVisit, cancleBooking, createUser, toFav } from "../controllers/userCntrl.js";
const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", allBookings)
router.post("/removeBooking/:id", cancleBooking)
router.post("/toFav/:rid", toFav)

export { router as userRoute }