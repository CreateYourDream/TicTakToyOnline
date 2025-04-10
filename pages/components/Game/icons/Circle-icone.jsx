import clsx from "clsx";
import React from "react";

export function CircleIcone({ className }) {
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
      className={clsx(className,'text-green-500')}
    >
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
