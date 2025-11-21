import { useState, useEffect } from "react";

export function Banner() {
  const hours = {
    Monday: ["17:00", "23:00"],
    Tuesday: ["17:00", "23:00"],
    Wednesday: null,
    Thursday: ["17:00", "23:00"],
    Friday: ["17:00", "23:00"],
    Saturday: ["17:00", "23:00"],
    Sunday: ["11:00", "22:00"],
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.toLocaleDateString("en-US", { weekday: "long" });
    const currentTime = now.getHours() + now.getMinutes() / 60;

    if (!hours[day]) {
      setIsOpen(false);
      return;
    }

    const [start, end] = hours[day].map((t) => {
      const [h, m] = t.split(":");
      return parseInt(h) + parseInt(m) / 60;
    });

    setIsOpen(currentTime >= start && currentTime <= end);
  }, []);

  return (
    <section className="relative w-full">
      <img
        src="new.jpg"
        alt="Restaurant"
        className="w-full md:h-auto  hidden md:block md:object-cover  lg:max-h-5rem md:max-h-[30rem]"
      />

      <div className=" hidden md:block absolute left-0 md:top-0 h-full w-full md:w-1/2 lg:w-1/3 md:bg-black/70 flex items-center justify-center">
        <div className="text-white h-full md:px-5 w-full flex flex-col md:justify-center items-center space-y-6 text-center rounded-lg shadow-lg backdrop-blur-sm">
          {/* Open / Closed Indicator */}

          {/* Working Hours Card */}
          <div className=" bg-black/95 md:bg-black/50 rounded-lg shadow-md p-4 w-full">
            <p className="font-bold text-xl mb-4 flex justify-between">
              Working Hours{" "}
              <div className="flex items-center space-x-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    isOpen ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <p className="font-semibold text-lg">
                  {isOpen ? "Open Now" : "Closed"}
                </p>
              </div>
            </p>
            <div className="flex flex-col gap-2">
              {Object.entries(hours).map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between w-full px-2 py-1 border-b border-gray-600 last:border-b-0"
                >
                  <span className="font-medium">{day}</span>
                  <span className="text-gray-200">
                    {time ? `${time[0]} - ${time[1]}` : "Closed"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
