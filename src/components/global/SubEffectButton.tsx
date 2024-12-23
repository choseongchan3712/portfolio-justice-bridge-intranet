import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { IsOpenContext } from "./context/IsOpenContext";
import PopUpContents from "./PopUpContents";
import CalculateContents from "./subEffect/CalculateContents";
import { IsCalOpenContext } from "./context/IsCalOpenContext";

const Container = styled.div`
  position: fixed;
  z-index: 600;
  bottom: 50px;
  right: 20px;
  display: flex;
  align-items: center;
  color: var(--sub-color-wh);
  .plus_button {
    position: relative;
    z-index: 602;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--main-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .calculate {
    position: absolute;
    z-index: 601;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: var(--point-color-y);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .todo {
    position: absolute;
    z-index: 601;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: var(--point-color-br);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SubEffectButton = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const {setIsCalOpen} = useContext(IsCalOpenContext)!;
  const [isTodoOpen, setIsTodoOpen] = useState<boolean>(false);
  const { isOpen, setIsOpen } = useContext(IsOpenContext)!;

  const clickHandler = (): void => {
    if (isClick === false) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

  const calHandler = () => {
    setIsOpen(true);
    setIsCalOpen(true);
  };

  const todoHandler = () => {
    setIsOpen(true);
    setIsTodoOpen(true);
  };

  useEffect(() => {
    if (isOpen === false) {
      setIsCalOpen(false);
      setIsTodoOpen(false);
    }
  }, [isOpen]);

  return (
      <Container>
        <motion.div
          className="plus_button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={clickHandler}
        >
          <FontAwesomeIcon icon={faPlus} className="plusIcon" />
        </motion.div>
        <motion.div
          className="calculate"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: isClick ? -50 : 0, opacity: isClick ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={calHandler}
        >
          <FontAwesomeIcon icon={faCalculator} />
        </motion.div>
        <motion.div
          className="todo"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: isClick ? -95 : 0, opacity: isClick ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          onClick={todoHandler}
        >
          <FontAwesomeIcon icon={faList} />
        </motion.div>
      </Container>
  );
};

export default SubEffectButton;
