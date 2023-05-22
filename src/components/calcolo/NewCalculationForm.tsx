import { ChangeEvent, FormEvent, useState } from "react";
import { CalculationFormData } from "../../models/CalculationFormData";
import Button from "../ui/Button";
import InputForm from "../ui/InputForm";

type NewCalculationFormProps = {
  onAdd: (data: CalculationFormData) => void;
};

export default function NewCalculationForm({ onAdd }: NewCalculationFormProps) {
  const [data, setData] = useState<CalculationFormData>({
    name: "",
    growth: 0,
    totalPieces: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((data) => ({
      ...data,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.growth > 0 && data.totalPieces > 0) {
      onAdd(data);
      setData({ name: "", growth: 0, totalPieces: 0 });
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-2 flex flex-col gap-4">
      <InputForm
        onChange={handleChange}
        id="name"
        value={data.name}
        label="Nome (facoltativo)"
      />
      <InputForm
        onChange={handleChange}
        id="growth"
        required
        type="number"
        inputMode="tel"
        pattern="[0-9]*"
        value={data.growth}
        label="Sviluppo (mm)"
      />
      <InputForm
        onChange={handleChange}
        id="totalPieces"
        type="number"
        inputMode="tel"
        pattern="[0-9]*"
        required
        value={data.totalPieces}
        label="Totale pezzi"
      />
      <Button type="submit">Calcola</Button>
    </form>
  );
}
