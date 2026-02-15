import { useState, useEffect } from "react";
import { formatTimeLeftWithDays } from "../tools/dateFormatter";
import styles from "./styles.module.css";

export const BaroTimer = ({
  activation,
  expiry,
}: {
  activation: string;
  expiry: string;
}) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [phase, setPhase] = useState<"upcoming" | "active" | "departed">(
    "upcoming",
  );

  useEffect(() => {
    const updateStatus = () => {
      const now = +new Date();
      const start = +new Date(activation);
      const end = +new Date(expiry);

      if (now >= end) {
        setPhase("departed");
        setTimeLeft("");
      } else if (now > start) {
        setPhase("active");
        setTimeLeft(formatTimeLeftWithDays(end, now) || "");
      } else {
        setPhase("upcoming");
        setTimeLeft(formatTimeLeftWithDays(start, now) || "");
      }
    };

    updateStatus();

    const interval = setInterval(updateStatus, 1000);

    return () => clearInterval(interval);
  }, [activation, expiry]);

  if (phase === "departed") return <span>has departed.</span>;

  return (
    <span>
      {phase === "active"
        ? "has arrived and will stay for "
        : "will arrive in "}
      <span className={styles.timerNumbers}>{timeLeft}</span>
    </span>
  );
};
