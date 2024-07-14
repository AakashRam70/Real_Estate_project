import asyncHandler from "express-async-handler"
import { prisma } from "../config/prismaConfig.js"

export const createUser = asyncHandler(async (req, res) => {
    console.log("Creating a User")

    let { email } = req.body

    // console.log(email)
    const userExists = await prisma.user.findUnique({ where: { email: email } })
    if (!userExists) {
        const user = await prisma.user.create({ data: req.body });
        res.send({
            message: "User registered successfully",
            user: user,
        })
    }
    else {
        res.status(201).send({ message: "User already registered" })
    }
})

// to book a visit to resd 
export const bookVisit = asyncHandler(async (req, res) => {
    const { email, data } = req.body;
    const { id } = req.params

    try {
        const alreadyBooked = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })

        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            res.status(400).send({ message: "This residency already booked by you" })
        } else {
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id: id } },
                },
            })
        }
        res.send("Your visit is booked successfully..")
    } catch (error) {
        throw new Error(err.message)
    }
});

// to get all bookings 
export const allBookings = asyncHandler(async (req, res) => {
    const { email } = req.body
    try {
        const bookings = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })
        res.status(200).send(bookings)
    } catch (error) {
        throw new Error(err.message)
    }
})