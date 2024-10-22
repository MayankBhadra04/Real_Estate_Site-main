import asyncHandler from "express-async-handler";
import { db } from "../config/firebaseConfig.js";
import { addDoc, collection, query, getDocs, orderBy, where, doc, getDoc } from "firebase/firestore";

export const createResidency = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        images
    } = req.body.data;
    const { email } = req.body;

    const residency = await addDoc(collection(db, "residencies"), {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        images,
        email,
        createdAt: new Date(),
    }).then(() => {
        res.send({ message: "Residency created successfully" });
    }).catch((error) => {
        throw new Error(error.message);
    });

});

// function to get all the documents/residencies
export const getAllResidencies = asyncHandler(async (req, res) => {

    var residenciesQuery = query(collection(db, "residencies"), orderBy("createdAt", "desc"));
    const residencies = await getDocs(residenciesQuery);
    const residenciesList = [];
    residencies.forEach((doc) => {
        residenciesList.push({ id: doc.id, ...doc.data() });
    });

    res.send(residenciesList);
});



// function to get a specific document/residency
export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;

    var residencyQuery = doc(db, "residencies", id);
    const residency = await getDoc(residencyQuery)
    const data = { id: residency.id, ...residency.data() };
    res.send(data);
});

