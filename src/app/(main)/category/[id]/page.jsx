import Leftside from "@/components/homepage/news/Leftside";
import Rightside from "@/components/homepage/news/Rightside";
import React from "react";

const getCatagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
const getNewsByCatagoryID = async (catagoryID) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catagoryID}`,
  );
  const data = await res.json();
  return data.data;
};

const CategoryDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsByCatagoryID(id);
  const catagories = await getCatagories();

  return (
    <div className="grid grid-cols-12 gap-5 w-10/12 mx-auto my-30">
      <div className=" col-span-3 ">
        <Leftside catagories={catagories} activeID={id}></Leftside>
      </div>
      <div className=" col-span-6">
        <h1 className="text-xl font-bold p-3 mb-4">News By Category</h1>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <div className="p-6 border rounded-md text-xl" key={n._id}>
                  {n.title}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 mx-auto">
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-500 mb-3">
                📰 Empty
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                No News Found
              </h2>

              <p className="text-sm text-gray-500 mt-2">Try another category</p>
            </div>
          )}
        </div>
      </div>
      <div className=" col-span-3 text-center">
        <span className="text-xl font-bold text-zinc-800">Login With</span>
        <Rightside></Rightside>
      </div>
    </div>
  );
};

export default CategoryDetailsPage;
