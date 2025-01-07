export type Target =
  | "operand"
  | "C"
  | "+/-"
  | "del"
  | "÷"
  | "x"
  | "-"
  | "+"
  | "=";

export interface Button {
  label: string;
  blackText: boolean;
  color: string;
  target: Target;
  doubleSize?: boolean | undefined;
}
