import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegisterReturn<TFieldName>;
  error?: FieldError;
}

export default function InputField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ label, type, register, error }: InputFieldProps<TFieldValues, TFieldName>) {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Input {...register} type={type} />
      <FormErrorMessage>{error && error.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
}
