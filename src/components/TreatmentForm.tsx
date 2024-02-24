import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

export default function TreatmentForm() {
  return (
    <form>
      <VStack>
        <FormControl>
          <FormLabel>Patient Name</FormLabel>
          <Input />
          <FormErrorMessage />
        </FormControl>
        <FormControl>
          <FormLabel>Patient ID</FormLabel>
          <Input />
          <FormErrorMessage />
        </FormControl>
        <FormControl>
          <FormLabel>Date of Treatment</FormLabel>
          <Input type="date" />
          <FormErrorMessage />
        </FormControl>
        <FormControl>
          <FormLabel>Treatment Description</FormLabel>
          <Select
            isMulti
            options={[{ label: "Treatment 1", value: "Treatment 1" }]}
          />
          <FormErrorMessage />
        </FormControl>
        <FormControl>
          <FormLabel>Medication Prescribed</FormLabel>
          <Select
            isMulti
            options={[{ label: "Medication 1", value: "Medication 1" }]}
          />
          <FormErrorMessage />
        </FormControl>
        <FormControl>
          <FormLabel>Cost of Treatment</FormLabel>
          <Input type="number" />
          <FormErrorMessage />
        </FormControl>
      </VStack>
      <Button marginTop={3} width="100%">
        Submit
      </Button>
    </form>
  );
}
