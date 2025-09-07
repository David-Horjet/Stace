"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

const ToastContext = React.createContext<{
  toasts: any[];
  setToasts: React.Dispatch<React.SetStateAction<any[]>>;
} | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<any[]>([]);
  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
      <ToastViewport toasts={toasts} setToasts={setToasts} />
    </ToastContext.Provider>
  );
};

const ToastViewport = ({
  toasts,
  setToasts,
}: {
  toasts: any[];
  setToasts: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  return (
    <div className="fixed top-0 z-[100] flex w-full max-h-screen flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} setToasts={setToasts} />
      ))}
    </div>
  );
};

const Toast = ({
  id,
  title,
  description,
  action,
  variant = "default",
  setToasts,
}: any) => {
  return (
    <div
      className={cn(
        "group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all animate-slideIn",
        variant === "destructive"
          ? "border-red-500 bg-red-600 text-white"
          : "border bg-white text-black"
      )}
    >
      <div className="flex flex-col space-y-1">
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
        {action && <div>{action}</div>}
      </div>
      <ToastClose
        onClick={() =>
          setToasts((prev: any) => prev.filter((t: any) => t.id !== id))
        }
      />
    </div>
  );
};

const ToastTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-semibold">{children}</p>
);

const ToastDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm opacity-90">{children}</p>
);

const ToastClose = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-2 rounded-md p-1 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-black focus:opacity-100 focus:outline-none focus:ring-2"
  >
    {/* Inline SVG for X icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

/* Tailwind animations */
const styles = `
@keyframes slideIn {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes slideOut {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}
.animate-slideIn { animation: slideIn 0.3s ease-out; }
.animate-slideOut { animation: slideOut 0.3s ease-in forwards; }
`;

export const ToastStyles = () => <style>{styles}</style>;

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
};
