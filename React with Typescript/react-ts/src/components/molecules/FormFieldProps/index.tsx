import React from "react";
import TextField from "../../atoms/TextField";

interface FormFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => <TextField placeholder={placeholder} value={value} onChange={onChange} />;

export default FormField;
