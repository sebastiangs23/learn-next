"use client";

import { ModalInputProps } from "@/types/interfaces/reusableComponents/reusable";

export default function ModalInput({
  label,
  value,
  placeholder,
  onChange,
}: ModalInputProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-gray-200 px-3 text-sm text-black outline-none focus:border-blue-500"
      />
    </div>
  );
}