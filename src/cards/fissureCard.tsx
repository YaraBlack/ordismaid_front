import { Fissure } from "../interfaces/fissure";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { formatTimeLeft } from "../tools/dateFormatter";

const FissureItem = ({ item }: { item: Fissure }) => {
  const [timeLeft, setTimeLeft] = useState(formatTimeLeft(item.expiry));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = formatTimeLeft(item.expiry);
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [item.expiry]);

  if (!timeLeft) return null;

  return (
    <ul className={styles.fissure}>
      <li>
        <strong>{item.tier}</strong>: {item.missionType} — {item.enemy}
      </li>
      <li>Node: {item.node}</li>
      <li style={{ color: "black", fontWeight: "bold" }}>
        Ends in: {timeLeft}
      </li>
    </ul>
  );
};

export const FissureList = ({ items }: { items: Fissure[] }) => {
  if (items.length === 0) return <p>No active fissures.</p>;

  return (
    <>
      {items.map((item) => (
        <FissureItem key={item.id} item={item} />
      ))}
    </>
  );
};
