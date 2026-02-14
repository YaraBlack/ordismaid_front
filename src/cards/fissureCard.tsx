import { Fissure } from "../interfaces/fissure";
import styles from "./styles.module.css";

export const FissureList = ({ items }: { items: Fissure[] }) => {
  if (items.length === 0) return <p>No active fissures.</p>;

  return (
    <>
      {items.map((item) => (
        <ul key={item.id} className={styles.fissure}>
          <li>
            <strong>{item.tier}</strong>: {item.missionType} - {item.enemy}
          </li>
          <li>Node: {item.node}</li>
          <li>Expires: {item.expiry}</li>
        </ul>
      ))}
    </>
  );
};
