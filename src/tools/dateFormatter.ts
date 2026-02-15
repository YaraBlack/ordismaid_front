export const formatTimeLeft = (expiry: string) => {
  const difference = +new Date(expiry) - +new Date();
  if (difference <= 0) return null;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return [hours, minutes, seconds]
    .map((v) => v.toString().padStart(2, "0"))
    .join(":");
};

export const formatTimeLeftWithDays = (start: number, end: number) => {
  const difference = start - end;
  if (difference <= 0) return null;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return [days, hours, minutes, seconds]
    .map((v) => v.toString().padStart(2, "0"))
    .join(":");
};
