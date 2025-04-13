import clsx from "clsx";
import { CircleIcone } from "./icons/Circle-icone";
import { CrossIcone } from "./icons/Cross-Icone";
import { UiButton } from "../UI/button/ui-button";

const cells = Array(19 * 19).fill(null);
console.log(cells);

export function GameFild({ className }) {
  return (
    <div className={clsx(className, "flex pt-5 pb-7 gap-3")}>
      <div className="mr-auto">
        <div className="flex items-center gap-1">
          <p className="text-2xl/6 font-semibold">Ход:</p>{" "}
          <CircleIcone className="w-8 h-8" />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-slate-600">Следующий ход:</p>
          <CrossIcone className="w-6 h-6" />
        </div>
      </div>
      <UiButton className="" variant="primary" size="md">
        Ничья
      </UiButton>
      <UiButton variant="outline" size="md">
        Сдаться
      </UiButton>
    </div>
  );
}
