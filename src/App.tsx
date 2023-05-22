import { useEffect } from "react";
import NewCalculationForm from "./components/calcolo/NewCalculationForm";
import Nav from "./components/layout/nav";
import { useCalculation } from "./services/calculation";
import CalculationList from "./components/calcolo/CalculationList";

function App() {
  const { state: calculationState, actions: calculationActions } =
    useCalculation();

  useEffect(() => {
    calculationActions.list();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />

      <div className="max-w-2xl mx-auto px-3 mt-12">
        <h1 className="font-bold text-xl mb-5">Effettua il calcolo</h1>
        <NewCalculationForm onAdd={calculationActions.create} />
        <div className="mt-3">
          <CalculationList
            calculations={calculationState.items.reverse()}
            onDelete={calculationActions.remove}
          />
        </div>
      </div>
    </>
  );
}

export default App;
