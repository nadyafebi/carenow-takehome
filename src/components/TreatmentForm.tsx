import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Button, VStack, useToast } from "@chakra-ui/react";
import {
  TreatmentData,
  treatmentOptions,
  medicationOptions,
} from "../treatment";
import InputField from "./InputField";
import MultiSelectField from "./MultiSelectField";

/**
 * Component for displaying a submittable treatment entry form.
 */
export default function TreatmentForm() {
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TreatmentData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TreatmentData> = async (data) => {
    try {
      // Send POST request.
      setLoading(true);
      await axios.post("/api/treatmentEntry", data);

      // Set success state.
      reset();
      toast({
        title: "Success!",
        description: "Treatment entry submitted.",
        status: "success",
      });
    } catch (err) {
      // Set error state.
      toast({
        title: "Error",
        description: `${axios.isAxiosError(err) ? err.response?.data : err}`,
        status: "error",
      });
    } finally {
      // Set final state.
      setLoading(false);
    }
  };

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
              value: /^[A-Za-z0-9]+$/,
              message: "Patient ID must be alphanumeric.",
            },
          })}
          error={errors.patientId}
        />
        <InputField
          label="Date of Treatment"
          type="date"
          register={register("treatmentDate", {
            valueAsDate: true,
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
          step=".01"
          register={register("treatmentCost", {
            valueAsNumber: true,
            required: "Please enter the cost of the treatment.",
            min: {
              value: 0,
              message: "The cost of treatment cannot be negative.",
            },
          })}
          error={errors.treatmentCost}
        />
      </VStack>
      <Button isLoading={isLoading} marginTop={3} type="submit" width="100%">
        Submit
      </Button>
    </form>
  );
}
