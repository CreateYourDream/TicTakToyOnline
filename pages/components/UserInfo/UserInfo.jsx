import React from "react";
import Image from "next/image";

export function UserInfo() {
  return (
    <button className="text-teal-600 hover:text-teal-500  ml-auto flex gap-2 items-center cursor-pointer p-1.5">
      <svg
        className="text-current"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-user-round-icon lucide-circle-user-round"
      >
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      <div className="text-left">
        <p className="text-lg">Parovozov</p>
        <p className="text-slate-400 text-xs">Рейтинг 1200</p>
      </div>
      <svg
        className="text-current"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
