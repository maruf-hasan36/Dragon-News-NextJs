import Leftside from "@/components/homepage/news/Leftside";
import Rightside from "@/components/homepage/news/Rightside";

const getCatagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const catagories = await getCatagories();

  return (
    <div className="grid grid-cols-12 gap-5 w-10/12 mx-auto my-30">
      <div className=" col-span-3 ">
        <Leftside catagories={catagories} activeID={null}></Leftside>
      </div>
      <div className="bg-yellow-800 col-span-6">Social Section</div>
      <div className=" col-span-3 text-center">
        <span className="text-xl font-bold text-zinc-800">Login With</span>
        <Rightside></Rightside>
      </div>
    </div>
  );
}
