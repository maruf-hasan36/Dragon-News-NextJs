import Link from "next/link";
import React from "react";

const Leftside = ({ catagories, activeID }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-4">All Caterogy</h1>
      <ul className="flex flex-col gap-3">
        {catagories.news_category.map((catagory) => (
          <div
            className={`${activeID == catagory.category_id && "bg-zinc-300"}  gap-2 text-center items-center font-semibold rounded-md`}
            key={catagory.category_id}
          >
            <Link
              className="block p-2"
              href={`/category/${catagories.category_id}`}
            >
              {catagory.category_name}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Leftside;
