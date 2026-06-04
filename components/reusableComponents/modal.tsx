"use client";

import { ReactNode } from "react";
import { BsX } from "react-icons/bs";
import { MiniModalProps } from "@/types/interfaces/reusableComponents/reusable";

export default function MiniModal({
  title,
  children,
  cancelText = "Cancel",
  acceptText = "Accept",
  onCancel,
  onAccept,
  acceptColor = "#2563eb",
}: MiniModalProps) {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-[340px] rounded-2xl bg-white p-5 shadow-xl">
        <button
          onClick={onCancel}
          className="absolute right-4 top-4 text-xl text-gray-700"
        >
          <BsX />
        </button>

        <h2 className="mb-4 pr-8 text-lg font-bold text-black">{title}</h2>

        <div className="space-y-3">{children}</div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={onCancel}
            className="h-11 flex-1 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700"
          >
            {cancelText}
          </button>

          <button
            onClick={onAccept}
            className="h-11 flex-1 rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: acceptColor }}
          >
            {acceptText}
          </button>
        </div>
      </div>
    </div>
  );
}