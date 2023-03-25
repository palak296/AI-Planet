import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item.uploadTime);
  const timeDiff = item.uploadTime
    ? Math.floor(
        (new Date().getTime() - item.uploadTime) / (1000 * 60 * 60 * 24)
      )
    : "";

  return (
    <div className="flex flex-col bg-white w-[360px] h-[290px] rounded-lg p-6 gap-4 mt-8 shadow-lg">
      <div className="flex items-center  h-24 mt-[24px]  gap-4">
        <img
          className="w-24 h-24 rounded-md object-cover"
          src={item.coverImage}
          alt="dummy"
        />
        <Link to={`submissiondetail/${item.id}`} >
          <h1 className=" text-lg font-medium text-gray-700">
            {item.title}
          </h1>
        </Link>
      </div>

      <p className="text-base text-gray-500 h-[3em] overflow-hidden line-clamp-3">
        {item.description}
      </p>

      <div className="flex justify-end font-normal italic text-sm leading-4 text-[#666666] h-[17px] ">
        <p className="text-gray-500 text-sm">{`Uploaded ${timeDiff} day${
          timeDiff !== 1 ? "s" : ""
        } ago`}</p>
      </div>
    </div>
  );
};

export default Card;
