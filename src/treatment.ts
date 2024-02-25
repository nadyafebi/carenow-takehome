export type TreatmentData = {
  patientName: string;
  patientId: string;
  treatmentDate: Date;
  treatmentDescription: Array<string>;
  medicationsPrescribed: Array<string>;
  treatmentCost: number;
};

export const treatmentOptions = ["Dialysis", "Surgery", "Vaccination"];
export const medicationOptions = ["Antibiotics", "Aspirin", "Insulin"];
