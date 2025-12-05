import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MenuSwiper() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const menuItems = [
    "./menu/page1.webp",
    "./menu/page2.webp",
    "./menu/page3.webp",
    "./menu/page4.webp",
    "./menu/page5.webp",
    "./menu/page6.webp",
    "./menu/page7.webp",
    "./menu/page8.webp",
    "./menu/page9.webp",
    "./menu/page10.webp",
  ];

  return (
    <main className="mb-8 mt-8 scroll-mt-24" id="menu">
      {/* Thumbnail */}
      <h2 className=" text-center  text-3xl font-bold md:mb-8 my-8 md:mt-0 md:text-center">
        Speisekarte
      </h2>
      <div className="flex justify-center gap-4 mx-auto w-full lg:w-1/2  p-4">
        <button
          onClick={() => setOpen(true)}
          style={{ backgroundImage: "url('./menu/menuPlh.webp')" }}
          className="rounded-xl bg-cover"
        >
          <img
            loading="lazy"
            src="./menu/page1.webp"
            alt="Menu Preview"
            className={`w-auto rounded-xl md:max-h-70 shadow cursor-pointer hover:opacity-80 transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
          />
        </button>
      </div>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute text-5xl top-0 right-0 z-50 text-white  rounded-full px-3 py-1 font-bold"
          >
            ×
          </button>
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}

            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {menuItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center my-10 h-[calc(100vh-80px)]">
                    <img
                      loading="lazy"
                      src={item}
                      alt={item}
                      className="h-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      <div className=" px-4 text-gray-400 flex md:justify-center ">
        * Bild anklicken, um zu öffnen
      </div>
    </main>
  );
}
