import { useState, useEffect } from "react";
import { formatTimeLeft } from "../tools/dateFormatter";
import { Alert } from "../interfaces/alert";
import styles from "./styles.module.css";

export const AlertComponent = ({ item }: { item: Alert }) => {
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(item.expiry));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = formatTimeLeft(item.expiry);
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [item.expiry]);

  if (!timeLeft) return null;

  return <span className={styles.timerNumbers}>{timeLeft}</span>;
};
