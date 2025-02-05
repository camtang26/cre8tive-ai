import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { UseFormRegister, FieldValues, RegisterOptions, FieldError } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  rules: RegisterOptions;
  error?: FieldError;
  isTextarea?: boolean;
}

export const FormField = ({
  name,
  label,
  type = "text",
  placeholder,
  register,
  rules,
  error,
  isTextarea = false
}: FormFieldProps) => {
  const commonProps = {
    ...register(name, rules),
    placeholder,
    className: "bg-white/10 border-white/20 text-white placeholder:text-white/70",
    "aria-label": label,
    autoComplete: "off",
  };

  return (
    <div className="space-y-2">
      {isTextarea ? (
        <Textarea
          {...commonProps}
          className={`${commonProps.className} min-h-[150px]`}
        />
      ) : (
        <Input
          type={type}
          {...commonProps}
          spellCheck={type !== "email"}
          inputMode={type === "email" ? "email" : undefined}
        />
      )}
      {error && (
        <p className="text-red-400 text-sm">{error.message}</p>
      )}
    </div>
  );
};