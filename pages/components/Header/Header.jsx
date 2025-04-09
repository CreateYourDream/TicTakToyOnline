import React from "react";
import { Logo } from "../Logo";
import { Button } from "../UI/button/Button";
import { Profile } from "../Profile";
import { ArrowDownIcone } from "./icones/ArrowDownIcone";

export function Header() {
  return (
    <header
      className={`flex h-24 items-center px-8 bg-slate-200 shadow-lg leading-[1.2]`}
    >
      <Logo />
      <Button styles={"mx-8 transition-colors duration-200 ease-linear"} />
      <button className="ml-auto flex items-center text-teal-600  hover:text-teal-500 cursor-pointer transition-colors duration-150 ease-linear">
        <Profile />
        <ArrowDownIcone/>
      </button>
    </header>
  );
}
