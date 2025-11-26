// src/utils/openHours.js

export const hours = {
  Monday: ["17:00", "23:00"],
  Tuesday: ["17:00", "23:00"],
  Wednesday: null,
  Thursday: ["17:00", "23:00"],
  Friday: ["17:00", "23:00"],
  Saturday: ["17:00", "23:00"],
  Sunday: ["11:00", "22:00"],
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
