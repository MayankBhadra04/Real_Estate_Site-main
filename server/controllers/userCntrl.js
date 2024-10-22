import asyncHandler from "express-async-handler";
// const db = require("../config/firebaseConfig");
import { db } from "../config/firebaseConfig.js";
import { addDoc, collection, query, getDocs, orderBy, where, updateDoc, doc } from "firebase/firestore";


const getUser = async (email) => {
  try {
    const userSnapshot = await getDocs(query(collection(db, "users"), where("email", "==", email)));
    if (!userSnapshot.docs[0]) {
      return null;
    }
    const user = userSnapshot.docs[0].data();
    const userId = userSnapshot.docs[0].id;
    return { ...user, id: userId };
  } catch (err) {
    throw new Error(err.message);
  }

}
const updateUser = async (user, data) => {
  try {
    await updateDoc(doc(db, "users", user.id), data)
  } catch (err) {
    throw new Error(err.message);
  }
}


// function to create a user
export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let { email } = req.body;

  const userExists = await getDocs(query(collection(db, "users"), where("email", "==", email)));

  if (!userExists.docs.length) {
    const user = await addDoc(collection(db, "users"), { email, createdAt: new Date(), bookedVisits: [], favResidenciesID: [] });
    res.send({
      message: "User registered successfully",
      user: user,
    });
  } else res.status(201).send({ message: "User already registered" });
});



export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  const user = await getUser(email);
  const bookedVisits = user.bookedVisits || [];
  const isAlreadyBooked = bookedVisits.some((visit) => visit.id === id);

  if (isAlreadyBooked) {
    res.status(400).json({ message: "This residency is already booked by you" });
  }

  bookedVisits.push({ id, date });
  await updateUser(user, { bookedVisits: bookedVisits })
  res.send("your visit is booked successfully");

});

// funtion to get all bookings of a user
export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await getUser(email);
  const bookedVisits = user.bookedVisits;
  res.status(200).send(bookedVisits);
});



// function to cancel the booking
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  const user = await getUser(email);
  const bookedVisits = user.bookedVisits;
  const index = bookedVisits.findIndex((visit) => visit.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Booking not found" });
  }

  bookedVisits.splice(index, 1);
  await updateUser(user, { bookedVisits }).then(() => {
    res.send("Booking cancelled successfully");
  })

});

// function to add a resd in favourite list of a user
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  const user = await getUser(email);
  let favResidenciesID = user.favResidenciesID || [];

  favResidenciesID = favResidenciesID.includes(rid)
    ? favResidenciesID.filter(id => id !== rid)
    : [...favResidenciesID, rid];

  await updateUser(user, { favResidenciesID });
  res.send({ message: "Updated favorites" });

});


// function to get all favorites
export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await getUser(email);
  const favResd = user.favResidenciesID;
  res.status(200).send(favResd);
});


