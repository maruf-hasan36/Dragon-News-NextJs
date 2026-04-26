import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const usaUpdates = [
    { id: 1, title: "US Tech Sector Sees Growth in AI Investments." },
    { id: 2, title: "Federal Reserve Signals Possible Rate Adjustment." },
    { id: 3, title: "New Climate Policy Announced by US Government." },
    { id: 4, title: "US Education System Adopts AI Tools in Classrooms." },
    { id: 5, title: "Healthcare Reform Debate Continues in Congress." },
    { id: 6, title: "US Sports Industry Breaks Revenue Records." },
  ];

  return (
    <div className="flex justify-between items-center bg-pink-100 px-2 py-2 container w-10/12 mx-auto">
      <button className="btn bg-[#D72050] text-white ">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {usaUpdates.map((news) => (
          <div className="mx-10" key={news.id}>
            <span>{news.title}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
