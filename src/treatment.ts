export type TreatmentData = {
  patientName: string;
  patientId: string;
  treatmentDate: Date;
  treatmentDescription: Array<string>;
  medicationsPrescribed: Array<string>;
  treatmentCost: number;
};

export const treatmentOptions = ["Treatment 1", "Treatment 2"];
export const medicationOptions = ["Medication 1", "Medication 2"];
