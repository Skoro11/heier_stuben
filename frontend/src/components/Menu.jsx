import { useState } from "react";

export function Menu({ category, categoryItems, isTrue }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main id={category} className="bg-white py-4 scroll-mt-40 md:scroll-mt-40">
      <h2 className="text-3xl font-bold mb-4">{category}</h2>

      {categoryItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-gray-200 py-4"
        >
          <div>
            <p className="font-bold text-lg">{item?.name || ""}</p>
            <p className="text-gray-700">{item?.description || ""}</p>
          </div>
          <p className="font-semibold text-lg">{item?.price || ""}</p>
        </div>
      ))}

      {isTrue && (
        <p className="mt-6 text-gray-600 italic text-center">
          Zu allen Gerichten können Sie sich einen Salat vom Salatbüffet nehmen.
        </p>
      )}
    </main>
  );
}
