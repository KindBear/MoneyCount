import { Periods } from "../../shared/types/Periods";

export const PERIODS = [
  { label: "Select period", value: "default" },
  { label: "This Month", value: Periods.THIS_MONTH },
  { label: "Last Month", value: Periods.LAST_MONTH },
  { label: "This Quarter", value: Periods.THIS_QUARTER },
  { label: "Last Quarter", value: Periods.LAST_QUARTER },
  { label: "This Year", value: Periods.THIS_YEAR },
  { label: "Custom", value: Periods.CUSTOM },
];
