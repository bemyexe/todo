import React, { FC } from "react";
import classes from "./CancelButton.module.css";

interface ICancelButtonProps {
  handleCancelButtonClick: () => void;
  children: string;
}

const CancelButton: FC<ICancelButtonProps> = ({
  handleCancelButtonClick,
  children,
}) => {
  return (
    <button className={classes.cancel_btn} onClick={handleCancelButtonClick}>
      {children}
    </button>
  );
};

export default CancelButton;
