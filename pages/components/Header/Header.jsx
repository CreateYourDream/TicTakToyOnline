import React from "react";
import { Logo } from "../Logo";
import { Button } from "../UI/button/Button";
import {UserInfo} from '../UserInfo'


export function Header() {
  return (
    <header
      className={`flex h-24 items-center px-8 bg-slate-200 shadow-lg leading-[1.2]`}
    >
      <Logo />
      <Button styles={"mx-8"} />
      <UserInfo/>
    </header>
  );
}
