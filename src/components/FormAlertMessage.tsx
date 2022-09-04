/* eslint-disable react/require-default-props */
import React from "react";

interface FormAlertMessageProps {
  message: string;
  isValid: boolean;
}

export default function FormAlertMessage({
  message,
  isValid,
}: FormAlertMessageProps) {
  return (
    <div className="justify-left text-sm items-left">
      <span className={isValid ? "text-green-800 " : "text-red-800"}>
        {message}
      </span>
    </div>
  );
}
