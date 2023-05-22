import { v4 } from "uuid";
import { Calculation } from "../../models/Calculation";
import { CalculationFormData } from "../../models/CalculationFormData";

const BAR_LENGTH = 6000;
const LOCALSTORAGE_KEY = "calculation";

function saveToStorage(data: Calculation[]) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function getFromStorage(): Calculation[] {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "[]");
}

export function list() {
  return getFromStorage();
}

export function get(id: string) {
  return getFromStorage().find((i) => i.id === id);
}

export function create(data: CalculationFormData) {
  const beatsPerBar = BAR_LENGTH / data.growth;
  const totalBars = data.totalPieces / beatsPerBar;
  const excessBeats = totalBars / 4;
  const partialTotal = data.totalPieces / 4;
  const totalBeats = partialTotal + excessBeats;

  const lsItems = getFromStorage();

  const newItem: Calculation = {
    id: v4(),
    name: data.name,
    date: new Date(),
    totalPieces: data.totalPieces,
    growth: data.growth,
    totalBars: totalBars,
    totalBeats: totalBeats,
  };

  lsItems.push(newItem);

  saveToStorage(lsItems);

  return newItem;
}

export function remove(id: string) {
  const lsItems = getFromStorage();

  if (lsItems.find((i) => i.id === id)) {
    saveToStorage(lsItems.filter((i) => i.id !== id));
    return true;
  }

  return false;
}
