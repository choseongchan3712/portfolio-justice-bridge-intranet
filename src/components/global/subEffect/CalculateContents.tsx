import { evaluate } from "mathjs";
import { useState } from "react";
import styled from "styled-components";
import Display from "./Display";
import { calButtonList } from "../../../constant/calButtonList";
import CalButton from "./CalButton";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--sub-color-wh);
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    "display display display display display display display display display display"
    "box0 box1 box2 box3 box4 box5 box6 box7 box8 box9"
    "box10 box11 box12 box13 box14 box15 box16 box17 box18 box19"
    "box20 box21 box22 box23 box24 box25 box26 box27 box28 box29"
    "box30 box31 box32 box33 box34 box35 box36 box37 box38 box39"
    "box40 box41 box42 box43 box44 box45 box46 box46 box47 box48";
  gap: 10px;
`;

const CalculateContents = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [memory, setMemory] = useState<number>(0);

  const clickHandler = (value: string): void => {
    console.log(value);
    if (value === "=") {
      try {
        setResult(evaluate(input).toString());
        setInput(evaluate(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("0");
    } else if (value === "±") {
      setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "mc") {
      setMemory(0);
    } else if (value === "m+") {
      setMemory(memory + parseFloat(input));
    } else if (value === "m-") {
      setMemory(memory - parseFloat(input));
    } else if (value === "mr") {
      setInput(memory.toString());
    } else if (value === "2nd") {
      // 2nd 기능을 어떻게 구현할지 결정해야 함. 예를 들어, 추가적인 기능들을 활성화하는 방식.
    } else if (value === "x²") {
      setInput((prev) => Math.pow(parseFloat(prev), 2).toString());
    } else if (value === "x³") {
      setInput((prev) => Math.pow(parseFloat(prev), 3).toString());
    } else if (value === "xʸ") {
      setInput((prev) => prev + "**");
    } else if (value === "eˣ") {
      setInput((prev) => Math.exp(parseFloat(prev)).toString());
    } else if (value === "10ˣ") {
      setInput((prev) => Math.pow(10, parseFloat(prev)).toString());
    } else if (value === "¹/x") {
      setInput((prev) => (1 / parseFloat(prev)).toString());
    } else if (value === "√x") {
      setInput((prev) => Math.sqrt(parseFloat(prev)).toString());
    } else if (value === "∛x") {
      setInput((prev) => Math.cbrt(parseFloat(prev)).toString());
    } else if (value === "ⁿ√x") {
      setInput((prev) => prev + "nthRoot");
    } else if (value === "ln") {
      setInput((prev) => Math.log(parseFloat(prev)).toString());
    } else if (value === "log₁₀") {
      setInput((prev) => Math.log10(parseFloat(prev)).toString());
    } else if (value === "x!") {
      setInput((prev) => factorial(parseInt(prev)).toString());
    } else if (value === "sin") {
      setInput((prev) => Math.sin(toRadians(parseFloat(prev))).toString());
    } else if (value === "cos") {
      setInput((prev) => Math.cos(toRadians(parseFloat(prev))).toString());
    } else if (value === "tan") {
      setInput((prev) => Math.tan(toRadians(parseFloat(prev))).toString());
    } else if (value === "e") {
      setInput((prev) => Math.E.toString());
    } else if (value === "EE") {
      setInput((prev) => prev + "e");
    } else if (value === "Rad") {
      // Rad 기능을 구현하려면 추가적인 구현이 필요합니다.
    } else if (value === "sinh") {
      setInput((prev) => Math.sinh(parseFloat(prev)).toString());
    } else if (value === "cosh") {
      setInput((prev) => Math.cosh(parseFloat(prev)).toString());
    } else if (value === "tanh") {
      setInput((prev) => Math.tanh(parseFloat(prev)).toString());
    } else if (value === "π") {
      setInput((prev) => Math.PI.toString());
    } else if (value === "Rand") {
      setInput((prev) => Math.random().toString());
    } else {
      if (input.includes("nthRoot")) {
        const firstNum = (input: string) => input.replace("nthRoot", "");
        const first = firstNum(input);
        setInput(Math.pow(Number(first), 1 / Number(value)).toString());
        console.log(input);
      } else {
        setInput((prev) => prev + value);
        setResult("");
      }
    }
  };

  const factorial = (n: number): number => {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const toRadians = (degree: number): number => {
    return (degree * Math.PI) / 180;
  };

  return (
    <Container>
      <Display value={result || input} />
      {/*  */}
      {calButtonList.map((data, index) => (
        <CalButton
          key={index}
          label={data}
          onClick={() => clickHandler(data)}
          num={"box" + String(index)}
        />
      ))}
    </Container>
  );
};

export default CalculateContents;
