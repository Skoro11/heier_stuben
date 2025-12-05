import { OpenStatus } from "../components/OpenStatus";
import { hoursGr } from "../utils/openHours";
import { useState } from "react";
export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <div
        className="hidden md:block w-full h-64 md:h-[30rem] lg:max-h-5rem bg-cover bg-center "
        style={{ backgroundImage: "url('bannerPlh.webp')" }}
      >
        <img
          src="banner.webp"
          alt="Restaurant building outside view"
          onLoad={() => setLoaded(true)}
          className={`object-cover w-full max-h-[30rem] transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="hidden absolute left-0 md:top-0 h-full w-full md:w-1/2 lg:w-1/3 md:bg-black/70 md:flex items-center justify-center">
        <div className="text-white h-full md:px-5 w-full flex flex-col md:justify-center items-center space-y-6 text-center rounded-lg shadow-lg backdrop-blur-sm">
          {/* Working Hours Card */}
          <div className="bg-black/95 md:bg-black/50 rounded-lg shadow-md p-4 w-full">
            <p className="font-bold text-xl mb-4 flex justify-between">
              Öffnungszeiten{" "}
              <div className="flex items-center space-x-2">
                <OpenStatus />
              </div>
            </p>

            <div className="flex flex-col gap-2">
              {Object.entries(hoursGr).map(([day, time]) => (
                <div
                  key={day}
                  className="flex justify-between w-full px-2 py-1 border-b border-gray-600 last:border-b-0"
                >
                  <span className="font-medium">{day}</span>
                  <span className="text-gray-200">
                    {time ? `${time[0]} - ${time[1]}` : "Geschlossen"}
                  </span>
                </div>
              ))}
            </div>

            {/* Extra Info */}
            <div className="mt-4 text-gray-300 text-sm space-y-1">
              <p>
                Die Küche ist sonntags und an Feiertagen bis 20:00 Uhr geöffnet,
                sonst bis 21:00 Uhr.
              </p>
              <p>Das Restaurant öffnet an Feiertagen bereits um 11:30 Uhr.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
