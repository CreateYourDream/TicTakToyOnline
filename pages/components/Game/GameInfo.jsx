import clsx from "clsx";
import React from "react";
import { Profile } from "../Profile";
import { CrossIcone } from "./icons/Cross-Icone";
import { CircleIcone } from "./icons/Circle-icone";
import { TriangleIcone } from "./icons/Triangle-Icone";
import { SqareIcone } from "./icons/Sqare-Icone";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "px-8 py-4 bg-white rounded-2xl shadow-lg flex items-center gap-x-3"
      )}
    >
      <div className="relative">
        <CrossIcone className="absolute -left-0.5 -top-0.5 w-6 h-6 rounded-full bg-lime-100 shadow" />
        <Profile className="text-teal-600 w-45" />
      </div>
      <div className="h-8 w-px bg-slate-300" />
      <div className="text-slate-900 text-lg/[22px] font-semibold ">01:15</div>
    </div>
  );
}
