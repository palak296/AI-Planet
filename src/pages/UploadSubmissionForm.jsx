import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UploadSubmissionForm = () => {



  const { id } = useParams();

  const hackathonData = JSON.parse(localStorage.getItem("hackathonData")) || [];
  const element = hackathonData.find((item) => item.id == id);
  let time = parseInt(new Date().getTime().toString());
  const [newelement, setNewelement] = useState(
    id === "latest"
      ? {
          id: hackathonData.length + 1,
          title: "",
          summary: "",
          description: "",
          coverImage: "",
          hackthonName: "",
          hackthonStartDate: new Date().toLocaleDateString(),
          hackthonEndDate: new Date().toLocaleDateString(),
          githubRepoLink: "",
          otherLinks: "",
          descriptionCount: "",
          uploadTime: parseInt(new Date().getTime().toString()),
          favouriteState: false,
        }
      : element
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the cover image data URL and store it in local storage
        const dataUrl = reader.result;
        setNewelement({ ...newelement, coverImage: dataUrl });
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <br />
      <div
        className=" mt-[40px] ml-[142px] rounded-[24px]
     bg-white w-[913px] gap-[40px] py-[30px] px-[48px] "
      >
        <div className="font-medium text-2xl leading-10 text-[#333333]">
          {id === "latest"
            ? "New Hackathon Submission"
            : "Edit Hacathon Submission"}{" "}
        </div>
        <form className="mt-10">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-medium mb-1 text-[#222222]"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newelement.title}
              onChange={(e) =>
                setNewelement({ ...newelement, title: e.target.value })
              }
              placeholder="Title of your submission"
              className="w-[706px] h-[51px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="summary"
              className="block font-medium mb-1 text-[#222222]"
            >
              Summary
            </label>
            <textarea
              id="summary"
              value={newelement.summary}
              placeholder="A short summary of your submission (this will be visible with your submission)"
              onChange={(e) =>
                setNewelement({ ...newelement, summary: e.target.value })
              }
              className="w-[706px] h-[51px] p-[16px] gap-[8px]  border-[1px] border-[#cccccc] rounded-[8px] shadow-sm "
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-medium mb-1 text-[#222222]"
            >
              Description
            </label>
            <textarea
              id="description"
              value={newelement.description}
              maxLength="3000"
              placeholder="Write a long description of your project. You can describe your idea and approach here."
              onChange={(e) => {
                setNewelement({ ...newelement, description: e.target.value });
              }}
              className="w-[706px] h-[153px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
            ></textarea>
            <br />
            <div className="text-gray-500 text-sm w-[706px] flex justify-end">
              {newelement.description.length}/3,000 characters
            </div>
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="coverImage"
              className="block font-medium mb-1 text-[#222222]"
            >
              Cover Image
            </label>
            <span className="text-[#858585] text-base">
              Minimum Resolution: 360px X 360px
            </span>

            <div className="relative">
              <input
                type="file"
                formEncType=""
                id="coverImage"
                className="w-[706px] h-[51px] border-[2px] border-dotted border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
              {newelement.coverImage && (
                <button
                  className=" text-[#222222] font-bold py-2 px-4 rounded-lg absolute top-1.5 right-32"
                  onClick={() => setCoverImage(null)}
                >
                  Re-upload
                </button>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="hackthonName"
              className="block font-medium mb-1 text-[#222222]"
            >
              Hackthon name
            </label>
            <input
              type="text"
              id="hackthonName"
              value={newelement.hackathonName}
              placeholder="Enter the name of the hackathon"
              onChange={(e) =>
                setNewelement({ ...newelement, hackathonName: e.target.value })
              }
              className="w-[706px] h-[51px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
            />
          </div>
          <div className="flex w-[706px] justify-between">
            <div className="mb-4 ">
              <label htmlFor="hackthonName" className="block font-medium mb-1">
                Hackthon Start Date
              </label>
              <DatePicker
                id="hackthonStartDate"
                selected={
                  (newelement.hackthonStartDate = new Date(
                    newelement.hackthonStartDate
                  ))
                }
                placeholderText="Select start date"
                onChange={(date) =>
                  setNewelement({ ...newelement, hackthonStartDate: date })
                }
                className="h-[51px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="hackthonName" className="block font-medium mb-1">
                Hackthon end date
              </label>
              <DatePicker
                id="hackthonEndDate"
                selected={
                  (newelement.hackthonEndDate = new Date(
                    newelement.hackthonEndDate
                  ))
                }
                placeholderText="Select end date"
                onChange={(date) =>
                  setNewelement({ ...newelement, hackthonEndDate: date })
                }
                className="h-[51px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="githubRepoLink"
              className="block font-medium mb-1 text-[#222222]"
            >
              Github Repository
            </label>
            <input
              type="text"
              id="githubRepoLink"
              placeholder="Enter your submission’s public GitHub repository link"
              value={newelement.githubRepoLink}
              onChange={(e) =>
                setNewelement({ ...newelement, githubRepoLink: e.target.value })
              }
              className="w-[706px] h-[51px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="otherLinks"
              className="block font-medium mb-1 text-[#222222]"
            >
              Other Links
            </label>
            <input
              type="text"
              id="otherLinks"
              placeholder="You can upload a video demo or URL of you demo app here."
              value={newelement.otherLinks}
              onChange={(e) =>
                setNewelement({ ...newelement, otherLinks: e.target.value })
              }
              className="w-[706px] h-[51px] border-[1px] border-[#cccccc] rounded-[8px] p-[16px] gap-[8px] shadow-sm"
            />
          </div>
          <Link to="/">
            <button
              className=" mt-6 p-[12px] gap-[8px] w-[194px] h-[52px] left-0 top-[188px] rounded-[10px] font-semibold bg-[#44924C] text-white "
              onClick={() => {
                if (id === "latest") {
                  hackathonData.unshift(newelement);
                } else {
                  const index = hackathonData.findIndex(
                    (item) => item.id == id
                  );

                  hackathonData[index] = { ...newelement };
                }

                localStorage.setItem(
                  "hackathonData",
                  JSON.stringify(hackathonData)
                );
              }}
            >
              {id === "latest" ? "Upload Submission" : "Save Submission"}
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default UploadSubmissionForm;
