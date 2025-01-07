import { Button } from "@/interfaces/Buttons";
import { Colors } from "./Colors";

export const Buttons: Button[][] = [
  [
    { label: "C", blackText: true, color: Colors.lightGrey, target: "C" },
    { label: "+/-", blackText: true, color: Colors.lightGrey, target: "+/-" },
    { label: "del", blackText: true, color: Colors.lightGrey, target: "del" },
    { label: "÷", blackText: false, color: Colors.orange, target: "÷" },
  ],

  [
    { label: "7", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "8", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "9", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "x", blackText: false, color: Colors.orange, target: "x" },
  ],

  [
    { label: "4", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "5", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "6", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "-", blackText: false, color: Colors.orange, target: "-" },
  ],

  [
    { label: "1", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "2", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "3", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "+", blackText: false, color: Colors.orange, target: "+" },
  ],

  [
    {
      label: "0",
      blackText: true,
      color: Colors.lightGrey,
      doubleSize: true,
      target: "operand",
    },
    { label: ".", blackText: true, color: Colors.lightGrey, target: "operand" },
    { label: "=", blackText: false, color: Colors.orange, target: "=" },
  ],
] as const;
