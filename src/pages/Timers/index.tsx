import { useTimers } from "../../hooks/useTimers";
import { Alert } from "../../interfaces/alert";

export const Timers = () => {
  const { data, loading, error, fetchData } = useTimers();
  console.log(data, error);
  console.log(data?.data.alerts);

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
        <h2>Alerts</h2>
        <ul>
          {data?.data.alerts.map((item: Alert) => (
            <li key={item.id}>{item.expiry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
