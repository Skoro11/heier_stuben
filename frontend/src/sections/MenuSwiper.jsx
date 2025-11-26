import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // correct import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MenuSwiper() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    "first_page.webp",
    "./alkoholfreiweb.webp",
    "./spirituosenweb.webp",
    "./weineweb.webp",
    "./suppenweb.webp",
    "./kleineweb.webp",
    "./puteweb.webp",
    "./grillweb.webp",
    "./speziellesweb.webp",
    "./rumpsteakweb.webp",
  ];

  return (
    <main className="mb-8 mt-8 scroll-mt-24" id="menu">
      {/* Thumbnail */}
      <h2 className=" text-center  text-3xl font-bold md:mb-8 my-8 md:mt-0 md:text-center">
        Menu
      </h2>
      <div className="flex justify-center gap-4 mx-auto w-full lg:w-1/2  p-4">
        <img
          src="./first_page.webp"
          alt="Menu Preview"
          className="w-auto rounded-xl md:max-h-70 shadow cursor-pointer hover:opacity-80 transition"
          onClick={() => setOpen(true)}
        />
        <img
          src="./alkoholfreiweb.webp"
          alt="Menu Preview"
          className="hidden md:block w-auto rounded-xl md:max-h-70 rounded-xl shadow cursor-pointer hover:opacity-80 transition"
          onClick={() => setOpen(true)}
        />
        <img
          src="./spirituosenweb.webp"
          alt="Menu Preview"
          className="w-auto hidden md:block rounded-xl md:max-h-70 rounded-xl shadow cursor-pointer hover:opacity-80 transition"
          onClick={() => setOpen(true)}
        />
      </div>
      {/* Modal */}
      {open && (
        <>
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
        </>
      )}
      <div className=" px-4 text-gray-400 flex md:justify-center ">
        * Click image to open
      </div>
    </main>
  );
}
