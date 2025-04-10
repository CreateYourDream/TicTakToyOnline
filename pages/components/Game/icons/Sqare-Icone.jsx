import clsx from "clsx";
import React from "react";

export function SqareIcone({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={clsx(className, 'text-blue-500')}
    >
      <rect width="14" height="14" x="5" y="5" rx="2" />
    </svg>
  );
}
