import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <a href="spices"><img src="/men-banner.jpg" alt="Spices" /></a>
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="spices">
            Spices
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <a href="snacks" ><img src="/women-banner.jpg" alt="Snacks" /></a>
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="snacks">
            Snacks
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 kid-cat">
          <a href="oils"><img src="/kid-banner.jpg" alt="Oils and Ghee" /></a>
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="oils">
            Oils & Ghee
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
