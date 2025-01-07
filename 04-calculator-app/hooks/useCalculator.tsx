import { Target } from "@/interfaces/Buttons";
import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

const ZERO = "0";
const POINT = ".";

export const useCalculator = () => {
  const [formula, setFormula] = useState(ZERO);
  const [number, setNumber] = useState(ZERO);
  const [prevNumber, setPrevNumber] = useState(ZERO);

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const setLastOperation = () => {
    calculateResult();
    if (number.endsWith(POINT)) {
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber(ZERO);
  };

  const divideOparation = () => {
    setLastOperation();
    lastOperation.current = Operator.divide;
  };

  const multiplyOparation = () => {
    setLastOperation();
    lastOperation.current = Operator.multiply;
  };

  const subtractOparation = () => {
    setLastOperation();
    lastOperation.current = Operator.subtract;
  };

  const addOparation = () => {
    setLastOperation();
    lastOperation.current = Operator.add;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue); // NaN

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateResult = () => {
    const subResult = calculateSubResult();
    setFormula(`${subResult}`);
    lastOperation.current = undefined;
    setPrevNumber(ZERO);
  };

  const buildNumber = (numberString: string) => {
    // solo permitir un "."
    if (number.includes(POINT) && numberString === POINT) return;

    // permitir solo un cero a la izquierda
    if (
      number.startsWith(ZERO) &&
      !number.includes(POINT) &&
      numberString === ZERO
    )
      return;

    // Reemplazar el cero si el numberString no es un POINT
    if (
      number.startsWith(ZERO) &&
      !number.includes(POINT) &&
      numberString !== POINT
    ) {
      return setNumber(numberString);
    }

    setNumber((prev) => prev + numberString);
  };

  const clean = () => {
    setNumber(ZERO);
    setPrevNumber(ZERO);
    setFormula(ZERO);

    lastOperation.current = undefined;
  };

  const toggleSign = () =>
    setNumber(number === ZERO ? ZERO : String(+number * -1));

  const deleteLastDigit = () => {
    if (number.length === 1) return setNumber(ZERO);
    if (number.length === 2 && number.startsWith("-")) return setNumber(ZERO);

    setNumber(number.slice(0, -1));
  };

  const onPress = (target: Target, label: string) => {
    const actions = {
      operand: () => buildNumber(label),
      C: clean,
      "+/-": toggleSign,
      del: deleteLastDigit,
      "÷": divideOparation,
      x: multiplyOparation,
      "-": subtractOparation,
      "+": addOparation,
      "=": calculateResult,
    };

    actions[target]();
  };

  return {
    // props
    formula,
    number,
    prevNumber,

    // methods
    onPress,
  };
};
