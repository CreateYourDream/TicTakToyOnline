import { Logo } from "../Logo";
import { UiButton } from "../UI/button/ui-button";
import { Profile } from "../Profile";
import { ArrowDownIcone } from "./icones/ArrowDownIcone";

export function Header() {
  return (
    <header
      className={`flex h-24 items-center px-8 bg-slate-200 shadow-lg leading-[1.2]`}
    >
      <Logo />
      <UiButton className='mx-8' variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center text-teal-600  hover:text-teal-500 cursor-pointer transition-colors duration-150 ease-linear">
        <Profile />
        <ArrowDownIcone />
      </button>
    </header>
  );
}
