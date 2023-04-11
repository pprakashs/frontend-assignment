import { InputProps, LabelProps, TextAreaProps } from "@/types/form"

export const TextArea = ({ className, onChange, ...rest }: TextAreaProps) => (
  <textarea className={`w-full border border-gray-200 p-3 rounded-lg shadow-sm ${className ?? className}`} {...rest}></textarea>
)

export const Label = ({ title }: LabelProps) => <label className="block mb-2 text-sm font-medium">{title}</label>

export const Input = ({ className, ...rest }: InputProps) => (
  <input {...rest} className={`rounded-lg p-3 border border-gray-200 w-full ${className ?? className}`} />
)
