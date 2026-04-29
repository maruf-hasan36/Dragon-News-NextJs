export const getCatagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
export const getNewsByCatagoryID = async (catagoryID) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catagoryID}`,
  );
  const data = await res.json();
  return data.data;
};
export const getDetailsNewsByCatagoryID = async (news_Id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_Id}`,
  );
  const data = await res.json();
  console.log(news_Id);
  console.log(data);
  return data.data[0];
};
