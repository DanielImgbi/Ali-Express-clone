import React from "react";

const categories = [
  { id: 1, text: "All Categories", image: "all_category.webp" },
  { id: 2, text: "Consumer Electronics", image: "consumer_elect.webp" },
  { id: 3, text: "Phones & communication", image: "phones_telecom.webp" },
  { id: 4, text: "Computer & office", image: "computer_office.webp" },
  { id: 5, text: "Sports & Entertainment", image: "sports_entertain.webp" },
  { id: 6, text: "Home Garden", image: "home_garden.webp" },
  { id: 7, text: "Automobiles, Parts &...", image: "automobiles_parts.webp" },
  { id: 8, text: "Toys & Hobbies", image: "toys_hobbies.webp" },
];

const CategorySection = () => {
  return (
    <section className="grid grid-cols-4 grid-rows-2 gap-3">
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-20 flex flex-col items-center space-y-2 p-1"
        >
          <img src={category.image} className="max-w-[40px]" />
          <p className="text-[10px] text-center">{category.text}</p>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
