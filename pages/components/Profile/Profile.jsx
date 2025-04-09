import clsx from "clsx";
import React from "react";

export function Profile({className}) {
  return (
    <div className={clsx(className, 'flex gap-2 items-center p-1.5')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      <div className="text-left">
        <p className="text-lg">Parovozov</p>
        <p className="text-slate-400 text-xs">Рейтинг 1200</p>
      </div>
    </div>
  );
}
