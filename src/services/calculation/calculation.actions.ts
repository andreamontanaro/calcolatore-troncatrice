import { Calculation } from "../../models/Calculation";

type OnGetCalculations = {
  type: "onGetCalculations";
  payload: Calculation[];
};
type OnCreateCalculation = {
  type: "onAddCalculation";
  payload: Calculation;
};
type OnDeleteCalculation = {
  type: "onDeleteCalculation";
  payload: string;
};
type OnError = { type: "onError"; payload: string };
type OnPending = { type: "onPending"; payload: boolean };

export type CalcoloActions =
  | OnGetCalculations
  | OnCreateCalculation
  | OnDeleteCalculation
  | OnError
  | OnPending;
