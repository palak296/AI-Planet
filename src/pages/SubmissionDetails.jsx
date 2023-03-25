import React, { useState } from "react";
import calender from "../assets/calender.png";
import github from "../assets/github.png";
import Link from "../assets/otherLink.png";
import { useParams, useNavigate } from "react-router-dom";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillStar,
  AiOutlineCalendar,
  AiOutlineStar,
} from "react-icons/ai";

const SubmissionDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hackathonData = JSON.parse(localStorage.getItem("hackathonData")) || [];
  const element = hackathonData.find((item) => item.id == id);

  const [favouriteState, setfavouriteState] = useState(
    element.favouriteState ? true : false
  );
  const [DeleteState, setDeleteState] = useState(false);
  const startDate = new Date(element.hackthonStartDate);
  const endDate = new Date(element.hackthonEndDate);
  const startDateString = startDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const endDateString = endDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <div className={`${DeleteState ? "opacity-60" : ""}`}>
        <div className={` flex justify-center bg-[#003145] h-[416px] w-full`}>
          <div className="flex-col py-20 w-[1156px] h-[223px]">
            <div className="flex justify-start items-center">
              <img src={element.coverImage} alt="Logo" />
              <h1 className=" ml-10 w-[518px] h-[63px] font-semibold text-4xl text-white">
                {element.title}
              </h1>
              <div className="flex-col ml-96">
                <div
                  className="border-[1px] rounded-[10px] w-[120px] h-[40px] px-[6px] py-[18px] gap-5 text-white text-center flex justify-center items-center "
                  onClick={() => {
                    navigate(`/uploadsubmission/${element.id}`);
                  }}
                >
                  <AiFillEdit />
                  <h1 className="font-medium text-base ">Edit</h1>
                </div>
                <br />
                <div
                  className="border-[1px] rounded-[10px] w-[120px] h-[40px] px-[6px] py-[18px] gap-5 text-white text-center flex justify-center items-center "
                  onClick={() => {
                    setDeleteState(true);
                  }}
                >
                  <AiFillDelete />
                  <h1 className="font-medium text-base ">Delete</h1>
                </div>
              </div>
            </div>
            <h1 className="text-white mt-8">{element.summary}</h1>
            <div className="flex gap-3 items-center mt-4">
              <div
                onClick={() => {
                  element.favouriteState = !element.favouriteState;
                  const findIdx = hackathonData.findIndex(
                    (item) => item.id == element.id
                  );
                  hackathonData[findIdx] = element;
                  localStorage.setItem(
                    "hackathonData",
                    JSON.stringify(hackathonData)
                  );
                  setfavouriteState(!favouriteState);
                }}
                className=" w-6 cursor-pointer h-6 text-white mt-3"
              >
                {favouriteState ? <AiFillStar /> : <AiOutlineStar />}
              </div>
              <p className="text-[#F5F5F5]">|</p>
              <div className="bg-[#255973] rounded-xl text-[#F5F5F5] flex items-center p-1">
                <AiOutlineCalendar />
                <p className="ml-2">{startDateString}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex  ">
          <div className="ml-44 flex-col w-[763px]">
            <h1 className="font-normal text-3xl leading-8 mt-10">
              Description
            </h1>
            <p className="text-base  h-[em] overflow-hidden mt-5">
              {element.description}
            </p>
          </div>
          <div className=" ml-44">
            <h1 className="font-normal text-lg text-[#858585] leading-7 mt-10">
              Hackathon
            </h1>
            <h1 className="mt-3 font-medium text-xl leading-8">
              {element.hackathonName}
            </h1>
            <h1 className=" flex items-center mt-3 mb-10 font-medium text-base text-[#858585] ">
              <img src={calender} alt="" />

              <span className="mx-2">
                {startDateString} - {endDateString}
              </span>
            </h1>
            <a
              className=" flex items-center justify-center border-2 border-[#858585] text-[#666666] font-medium py-2 px-4 rounded-lg mt-3 w-[213px] h-[48px]"
              href={element.githubRepoLink}
            >
              <img src={github} alt="" />
              <h1 className=" mx-2"> GitHub Repository</h1>
            </a>
            <a
              className=" flex items-center justify-center border-2 border-[#858585] text-[#666666] font-medium py-2 px-4 rounded-lg mt-3 w-[213px] h-[48px]"
              href={element.otherLinks}
            >
              <img src={Link} alt="" />
              <h1 className=" mx-2">Other Links</h1>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${
          DeleteState ? "block" : "hidden"
        } w-[450px] flex flex-col justify-between rounded-3xl shadow-2xl shadow-black absolute top-[50%] left-[40%] p-5 bg-white h-[196px]`}
      >
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-xl text-[#222222]">Delete model</h1>
          <p className="text-[#666666]">
            This action is irreversible. Are you sure you want to delete this
            model?
          </p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="w-24 h-11 border px-4 py-1 rounded-lg font-[poppins] font-medium text-[#333333]"
            onClick={() => {
              setDeleteState(false);
            }}
          >
            Cancel
          </button>
          <button
            className="w-24 h-11 border px-4 text-white py-1 rounded-lg bg-[#DF2C1D]"
            onClick={() => {
              // eslint-disable-next-line eqeqeq
              const findIdx = hackathonData.findIndex(
                (item) => item.id == element.id
              );
              hackathonData.splice(findIdx, 1);
              localStorage.setItem(
                "hackathonData",
                JSON.stringify(hackathonData)
              );
              setDeleteState(false);
              setfavouriteState(!favouriteState);
              navigate("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
