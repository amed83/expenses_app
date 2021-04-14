import React, { useEffect, useState } from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import styles from "./Dashboard.css";

export interface TransactionProps {
  id: string;
  date: string;
  description: string;
  category_title: string;
  amount: {
    value: number;
    currency_iso: number;
  };
}

interface DataPayload {
  id: string;
  provider: {
    title: string;
    account_number: string;
    sort_code: string;
    description: string;
  };
  balance: {
    amount: number;
    currency_iso: string;
  };
  transactions: TransactionProps[];
}

export const Dashboard = () => {
  const [data, setData] = useState<TransactionProps[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5c62e7c33000004a00019b05")
      .then((response) => response.json())
      .then((jsonRes: DataPayload) => {
        const filteredData = jsonRes.transactions
          .filter((transaction) => transaction.amount.value < 0)
          .sort((a, b) => {
            return Math.abs(a.amount.value) - Math.abs(b.amount.value);
          });
        setData(filteredData.slice(0, 10));
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className={styles.error}>
        Sorry there was an error. Please try again.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ul>
        {data.length > 1 &&
          data.map((expense) => {
            return <ExpenseItem {...expense} key={expense.id} />;
          })}
      </ul>
    </div>
  );
};
