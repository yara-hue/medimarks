"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  showCount?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, showCount = false, className, id, maxLength, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          {label}
        </label>
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            className={cn(
              "w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 resize-y min-h-[120px]",
              "focus:border-navy-400 focus:ring-2 focus:ring-navy-100",
              "dark:border-navy-600 dark:bg-navy-800 dark:text-gray-300 dark:placeholder:text-gray-500",
              "dark:focus:border-navy-500 dark:focus:ring-navy-700",
              error && "border-red-500 focus:border-red-500 focus:ring-red-100 dark:focus:ring-red-900",
              "pr-10",
              className
            )}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
            {...props}
          />
          {showCount && maxLength && (
            <span className="absolute bottom-3 right-3 text-xs text-gray-400 dark:text-gray-500" aria-hidden="true">
              {String(props.value || "").length || 0}/{maxLength}
            </span>
          )}
        </div>
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
