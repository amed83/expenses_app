import React, { FC } from "react";
import { TransactionProps } from "../Dashboard/Dashboard";
import styles from "./ExpenseItem.css";

export const ExpenseItem: FC<TransactionProps> = ({
  date,
  description,
  amount,
}) => {
  return (
    <li className={styles.container}>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Amount:</strong> £ {Math.abs(amount.value)}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <div className={styles.divider}></div>
    </li>
  );
};
