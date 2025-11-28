import { useState, useEffect } from "react";

export function OpenStatus() {
  const hours = {
    monday: ["17:00", "23:00"],
    tuesday: ["17:00", "23:00"],
    wednesday: null,
    thursday: ["17:00", "23:00"],
    friday: ["17:00", "23:00"],
    saturday: ["17:00", "23:00"],
    sunday: ["11:00", "22:00"],
  };

  // Helper function: check if restaurant is open now
  function isOpenNow(hoursObj) {
    const now = new Date();
    const day = now
      .toLocaleDateString("en-US", { weekday: "long" })
      .toLowerCase();
    const todayHours = hoursObj[day];
    if (!todayHours) return false;

    const [startStr, endStr] = todayHours;
    const [sh, sm] = startStr.split(":").map(Number);
    const [eh, em] = endStr.split(":").map(Number);

    const start = sh * 60 + sm;
    const end = eh * 60 + em;
    const current = now.getHours() * 60 + now.getMinutes();

    return current >= start && current <= end;
  }

  const [isOpen, setIsOpen] = useState(isOpenNow(hours));

  useEffect(() => {
    function getNextChangeTime() {
      const now = new Date();
      const day = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      const todayHours = hours[day];
      if (!todayHours) return null; // closed all day

      const [startStr, endStr] = todayHours;
      const [sh, sm] = startStr.split(":").map(Number);
      const [eh, em] = endStr.split(":").map(Number);

      const startTime = new Date(now);
      startTime.setHours(sh, sm, 0, 0);

      const endTime = new Date(now);
      endTime.setHours(eh, em, 0, 0);

      return isOpenNow(hours) ? endTime : startTime;
    }

    const timeoutMs = getNextChangeTime() - new Date();
    const timeout = setTimeout(
      () => {
        setIsOpen((prev) => !prev);
      },
      timeoutMs > 0 ? timeoutMs : 1000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`w-3 h-3 rounded-full ${
          isOpen ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      <p className="font-semibold text-lg m-0">
        {isOpen ? "Geöffnet" : "Geschlossen"}
      </p>
    </div>
  );
}
