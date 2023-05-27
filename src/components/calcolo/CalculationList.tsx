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
          <p className="text-xs lowercase italic text-slate-200">
            {moment(c.date).locale("it").calendar()}
          </p>
          <p className="text-slate-100">{c.name || `Calcolo`}</p>
          <div className="flex flex-row items-center gap-3 flex-wrap">
            <div className="flex flex-row gap-3 text-xs border-r-2 pr-2">
              <p>
                <span className="font-bold text-base">{c.growth}</span>mm
              </p>
              <p>
                <span className="font-bold text-base">{c.totalPieces}</span>pz
              </p>
            </div>
            <div className="flex flex-row gap-3 text-xs">
              <p>
                <span className="font-bold text-base">
                  {Math.ceil(c.totalBars)}
                </span>
                barre
              </p>
              <p>
                <span className="font-bold text-base">
                  {Math.ceil(c.totalBeats)}
                </span>
                battute
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-3 justify-end w-full">
            <Button className="secondary" onClick={() => onDelete(c.id)}>
              Elimina
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
