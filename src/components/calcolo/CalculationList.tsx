import moment from "moment";
import { Calculation } from "../../models/Calculation";
import "moment/locale/it";
import Button from "../ui/Button";

type CalculationListProps = {
  calculations: Calculation[];
  onDelete: (id: string) => void;
};

export default function CalculationList({
  calculations,
  onDelete,
}: CalculationListProps) {
  return (
    <div>
      {calculations.map((c) => (
        <div key={c.id} className="border-b py-3">
          <p className="text-xs lowercase italic text-slate-400">
            {moment(c.date).locale("it").calendar()}
          </p>
          <p className="text-slate-300">{c.name || `Calcolo`}</p>
          <div className="flex flex-row items-center gap-3 ">
            <p className="border-r pr-3">
              {c.growth}mm &mdash; {c.totalPieces} pezzi
            </p>
            <p className="pr-3">
              <span className="font-bold">{Math.ceil(c.totalBars)}</span> barre
              &mdash;{" "}
              <span className="font-bold">{Math.ceil(c.totalBeats)}</span>{" "}
              battute
            </p>
            <div className="ml-auto">
              <Button className="secondary" onClick={() => onDelete(c.id)}>
                Elimina
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
