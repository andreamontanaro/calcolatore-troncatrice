import { Calculation } from "../../models/Calculation";
import { CalcoloActions } from "./calculation.actions";

export type CalculationState = {
  items: Calculation[];
  mostRecentItem?: Calculation | null;
  error: string | null;
  pending: boolean;
};

export const initialState: CalculationState = {
  items: [],
  mostRecentItem: null,
  error: null,
  pending: true,
};

export function calculationReducer(
  state: CalculationState,
  action: CalcoloActions
) {
  const { type, payload } = action;

  switch (type) {
    case "onGetCalculations":
      return {
        items: payload,
        mostRecentItem: payload.length > 0 ? payload.slice(-1)[0] : null,
        error: null,
        pending: false,
      };
    case "onAddCalculation":
      return {
        items: [...state.items, payload],
        mostRecentItem: payload,
        error: null,
        pending: false,
      };
    case "onDeleteCalculation": {
      const updatedItems = state.items.filter((i) => i.id !== payload);
      return {
        items: updatedItems,
        mostRecentItem:
          updatedItems.length > 0 ? updatedItems.slice(-1)[0] : null,
        error: null,
        pending: false,
      };
    }
    case "onError":
      return {
        ...state,
        error: payload,
        pending: false,
      };

    case "onPending":
      return {
        ...state,
        error: null,
        pending: true,
      };
    default:
      return state;
  }
}
