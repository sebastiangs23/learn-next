import { ReactNode } from "react";

export interface MiniModalProps {
  title: string;
  children: ReactNode;
  cancelText?: string;
  acceptText?: string;
  onCancel: () => void;
  onAccept: () => void;
  acceptColor?: string;
}

export interface ModalInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}
