import { useForm, SubmitHandler } from "react-hook-form";
import { Button, VStack } from "@chakra-ui/react";
import InputField from "./InputField";
import MultiSelectField from "./MultiSelectField";

type TreatmentData = {
  patientName: string;
  patientId: string;
  treatmentDate: Date;
  treatmentDescription: Array<string>;
  medicationsPrescribed: Array<string>;
  treatmentCost: number;
};

const treatmentOptions = ["Treatment 1", "Treatment 2"];
const medicationOptions = ["Medication 1", "Medication 2"];

export default function TreatmentForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TreatmentData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TreatmentData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <InputField
          label="Patient Name"
          register={register("patientName", {
            required: "Please enter patient name.",
          })}
          error={errors.patientName}
        />
        <InputField
          label="Patient ID"
          register={register("patientId", {
            required: "Please enter patient ID.",
            pattern: {
              value: /^[A-Z0-9]+$/,
              message: "Patient ID must be alphanumeric.",
            },
          })}
          error={errors.patientId}
        />
        <InputField
          label="Date of Treatment"
          type="date"
          register={register("treatmentDate", {
            required: "Please enter the date of the treatment.",
          })}
          error={errors.treatmentDate}
        />
        <MultiSelectField
          name="treatmentDescription"
          label="Treatment Description"
          options={treatmentOptions}
          rules={{
            required: "Please enter at least one treatment description.",
          }}
          control={control}
          error={errors.treatmentDescription}
        />
        <MultiSelectField
          name="medicationsPrescribed"
          label="Medications Prescribed"
          options={medicationOptions}
          rules={{
            required: "Please enter at least one medication prescribed.",
          }}
          control={control}
          error={errors.medicationsPrescribed}
        />
        <InputField
          label="Cost of Treatment"
          type="number"
          register={register("treatmentCost", {
            required: "Please enter the cost of the treatment.",
            min: {
              value: 0,
              message: "The cost of treatment cannot be negative.",
            },
          })}
          error={errors.treatmentCost}
        />
      </VStack>
      <Button marginTop={3} type="submit" width="100%">
        Submit
      </Button>
    </form>
  );
}
