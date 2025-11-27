// src/utils/openHours.js

export const hours = {
  Montag: ["17:00", "23:00"],
  Dienstag: ["17:00", "23:00"],
  Mittwoch: null,
  Donnerstag: ["17:00", "23:00"],
  Freitag: ["17:00", "23:00"],
  Samstag: ["17:00", "23:00"],
  Sonntag: ["11:00", "22:00"],
};

// Returns true if the restaurant is open now
export function isOpenNow(hoursObj = hours) {
  const now = new Date();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const currentTime = now.getHours() + now.getMinutes() / 60;

  if (!hoursObj[day]) return false;

  const [start, end] = hoursObj[day].map((t) => {
    const [h, m] = t.split(":");
    return parseInt(h) + parseInt(m) / 60;
  });

  return currentTime >= start && currentTime <= end;
}
