import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
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
> extends InputProps {
  label: string;
  register: UseFormRegisterReturn<TFieldName>;
  error?: FieldError;
}

/**
 * Component for displaying an input field with Chakra UI form components and React Hook Form validation.
 */
export default function InputField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  label,
  register,
  error,
  ...inputProps
}: InputFieldProps<TFieldValues, TFieldName>) {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Input {...register} {...inputProps} />
      <FormErrorMessage>{error && error.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
}
