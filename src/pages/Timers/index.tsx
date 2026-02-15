import { useMemo } from "react";
import { useTimers } from "../../hooks/useTimers";
import { Alert } from "../../interfaces/alert";
import styles from "./styles.module.css";
import { FissureList } from "../../components/fissureCard";
import { BaroTimer } from "../../components/baroStatus";
import { AlertComponent } from "../../components/alertComponent";

export const Timers = () => {
  const { data, loading, error, fetchData } = useTimers();
  console.log(data, error);

  const categories = useMemo(() => {
    if (!data?.data.fissures) return null;

    const base = [...data.data.fissures].sort((a, b) => a.tierNum - b.tierNum);

    return {
      normal: base.filter((f) => !f.isHard && !f.isStorm),
      steelPath: base.filter((f) => f.isHard && !f.isStorm),
      railjack: base.filter((f) => f.isStorm),
    };
  }, [data]);

  if (loading) return <div>Loading initial data...</div>;

  if (!data && error)
    return (
      <div>
        <p>Server unavailable.</p>
        <button onClick={fetchData}>Retry</button>
      </div>
    );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Timers</h1>
        <button onClick={fetchData}>Refresh Now</button>
      </div>
      <div>
        <div>
          <h2>Alerts</h2>
          {data?.data.alerts.map((item: Alert) => (
            <ul key={item.id} className={styles.alert}>
              <li>Node: {item.mission.node}</li>
              <li>Mission Type: {item.mission.type}</li>
              <li>Faction: {item.mission.faction}</li>
              <li>
                Rewards: {item.mission.reward.credits} Credits +
                {" " + item.mission.reward.items.join()}
              </li>
              <li>
                Expires: <AlertComponent item={item} />
              </li>
            </ul>
          ))}
        </div>
        <div>
          <h2>Fissures</h2>
          <h3>Normal mode</h3>
          <FissureList items={categories?.normal ?? []} />
          <h3>Steel path</h3>
          <FissureList items={categories?.steelPath ?? []} />
          <h3>Railjack</h3>
          <FissureList items={categories?.railjack ?? []} />
        </div>
        <div>
          <h2>Void Trader</h2>
          <p>
            Baro Ki'Teer{" "}
            <BaroTimer
              activation={data?.data.voidTrader.activation}
              expiry={data?.data.voidTrader.expiry}
            ></BaroTimer>
          </p>
        </div>
      </div>
    </div>
  );
};
