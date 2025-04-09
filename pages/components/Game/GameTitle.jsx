import React from "react";
import Link from "next/link";
import { ArrowLeftIcone } from "./icons/Arrow-Left-Icone";
import { StarIcone } from "./icons/Star-Icone";
import { UserIcone } from "./icons/User-Icone";
import { ClockIcone } from "./icons/Clock-Icone";

export function GameTitle() {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="text-teal-600  hover:text-teal-500 flex items-center gap-2"
      >
        <ArrowLeftIcone className='w-6 h-6'/>
        <p>На главную</p>
      </Link>
      <h1 className="text-4xl/[44px]">Крестики нолики</h1>
      <div className="flex gap-3 items-center text-slate-400 text-xs">
        <StarIcone className="w-4 h-4" />
        <div className="flex items-center gap-1">
          <UserIcone className="w-4 h-4" />2
        </div>
        <div className="flex items-center gap-1">
          <ClockIcone className="w-4 h-4" />
          <p>1 мин назад</p>
        </div>
      </div>
    </div>
  );
}
