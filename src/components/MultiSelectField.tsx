import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import {
  Controller,
  FieldError,
  FieldPath,
  FieldValues,
  Merge,
  UseControllerProps,
} from "react-hook-form";

interface MultiSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  label: string;
  options: Array<string>;
  error?: Merge<FieldError, (FieldError | undefined)[]>;
}

/**
 * Component for displaying a multiselect field with Chakra UI form components and React Hook Form validation.
 */
export default function MultiSelectField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  options,
  rules,
  control,
  error,
}: MultiSelectFieldProps<TFieldValues, TName>) {
  const selectOptions = options.map((opt) => {
    return { label: opt, value: opt };
  });

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Select
            isMulti
            name={field.name}
            ref={field.ref}
            onChange={(selectValue) =>
              field.onChange(selectValue.map((c) => c.value))
            }
            onBlur={field.onBlur}
            value={selectOptions.filter((opt) =>
              field.value?.includes(opt.value)
            )}
            options={selectOptions}
            closeMenuOnSelect={false}
          />
        )}
      />
      <FormErrorMessage>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
}
