import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  id: string;
  name: string;
  label?: string;
  type?: "text" | "number" | "email" | "password" | "textarea";
  placeholder?: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
  min?: string;
  step?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export default function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
  min,
  step,
  rows = 4,
  required = false,
  disabled = false,
  className = " bg-white outline-none",
  icon = <></>,
}: FormFieldProps) {
  const hasError = touched && error;
  const inputClassName = `${hasError ? "border-red-500" : ""} ${className}`;

  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={id} className="text-base">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClassName}
        />
      ) : (
        <div className="relative w-full">
          {icon}
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={inputClassName}
            min={min}
            step={step}
              disabled={disabled}
          />
        </div>
      )}

      {hasError && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
