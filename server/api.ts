import express from "express";
import { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import {
  TreatmentData,
  treatmentOptions,
  medicationOptions,
} from "../src/treatment";
import serviceKey from "../servicekey.json";

const api = express.Router();
api.use(express.json());

initializeApp({ credential: cert(serviceKey as ServiceAccount) });
const db = getFirestore();

api.post("/treatmentEntry", async (req, res) => {
  try {
    const data: TreatmentData = req.body;

    const validationError = validate(data);
    if (validationError) {
      throw new Error(validationError);
    }

    await db.collection("treatmentEntry").add(data);

    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).send(err);
  }
});

function validate(data: TreatmentData): string | undefined {
  if (!data.patientName) return "No patient name.";
  if (!data.patientId || typeof data.patientId != "string")
    return "No patient ID.";
  if (!data.patientId.match(/^[A-Za-z0-9]+$/))
    return "Patient ID must be alphanumeric.";
  if (!data.treatmentDescription || data.treatmentDescription.length == 0)
    return "Must have at least one treatment description.";
  if (!data.treatmentDescription.every((t) => treatmentOptions.includes(t)))
    return "Treatment description contains invalid value.";
  if (!data.medicationsPrescribed || data.medicationsPrescribed.length == 0)
    return "Must have at least one medication prescribed.";
  if (!data.medicationsPrescribed.every((m) => medicationOptions.includes(m)))
    return "Medications prescribed contains invalid value.";
  if (!data.treatmentCost) return "No cost of treatment.";
  if (!Number.isFinite(data.treatmentCost)) {
    return "Cost of treatment must be a number.";
  }
  if (data.treatmentCost < 0) return "Cost of treatment must be positive.";
}

export default api;
