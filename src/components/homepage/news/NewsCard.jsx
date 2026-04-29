import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { MdStar } from "react-icons/md";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Author section */}
        <div className=" flex justify-between items-center bg-slate-300 p-2 rounded-md w-full">
          <div className="flex gap-2">
            <Image
              src={news.author.img}
              height={40}
              width={40}
              alt="Author"
              quality={100}
              className="rounded-full"
            ></Image>
            <div>
              <h1 className="text-xs font-bold">{news.author.name}</h1>
              <p className="text-xs">{news.author.published_date}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <IoShareSocialOutline className="text-xl" />
            <LuBookmark className="text-xl" />
          </div>
        </div>
        <h2 className="font-semibold text-xl p-2">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            height={400}
            width={400}
            className="w-full"
            quality={100}
          />
        </figure>
        <p className="p-1 line-clamp-4 font-semibold">{news.details}</p>
        <div className="flex justify-between items-center">
          {/* rating */}
          <div className="flex gap-2">
            <h1 className="flex gap-1 items-center">
              {news.total_view}
              <GrView />
            </h1>

            <h1 className="flex gap-1 items-center">
              {news.rating.number}
              <MdStar className="text-yellow-500 text-xl" />
              <MdStar className="text-yellow-500 text-xl" />
              <MdStar className="text-yellow-500 text-xl" />
              <MdStar className="text-yellow-500 text-xl" />
            </h1>
          </div>
          {/* link */}
          <div>
            {" "}
            <Link href={`/news/${news._id}`}>
              <button className="btn btn-secondary w-40">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
