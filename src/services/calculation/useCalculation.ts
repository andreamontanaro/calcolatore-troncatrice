import { useReducer } from "react";
import { calculationReducer, initialState } from "./calculation.reducer";
import { CalculationFormData } from "../../models/CalculationFormData";
import * as CalculationApi from "./calculation.api";

export function useCalculation() {
  const [state, dispatch] = useReducer(calculationReducer, initialState);

  function list() {
    dispatch({ type: "onPending", payload: true });
    try {
      const items = CalculationApi.list();
      dispatch({ type: "onGetCalculations", payload: items });
    } catch (exc) {
      dispatch({
        type: "onError",
        payload: `Error occurred during calculation reading. ${exc}`,
      });
    }
  }

  function create(data: CalculationFormData) {
    dispatch({ type: "onPending", payload: true });
    try {
      const newItem = CalculationApi.create(data);
      dispatch({ type: "onAddCalculation", payload: newItem });
    } catch (exc) {
      dispatch({
        type: "onError",
        payload: `Error occurred during calculation creation. ${exc}`,
      });
    }
  }

  function remove(id: string) {
    dispatch({ type: "onPending", payload: true });
    try {
      const ok = CalculationApi.remove(id);
      ok
        ? dispatch({ type: "onDeleteCalculation", payload: id })
        : dispatch({
            type: "onError",
            payload: `Error occurred during calculation deletion.`,
          });
    } catch (exc) {
      dispatch({
        type: "onError",
        payload: `Error occurred during calculation deletion. ${exc}`,
      });
    }
  }

  

  return {
    state,
    actions: {
      list,
      create,
      remove,
    },
  };
}
