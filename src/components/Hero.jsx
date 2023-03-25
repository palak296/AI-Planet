import React from "react";
import Logo from "../assets/Hand-holding-bulb-3D.png";
import { useNavigate } from "react-router-dom";
import Tab from "./Tab";
import Utilities from "./Utilities";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex justify-center bg-[#003145] h-[416px] w-full">
        <div className="flex-col py-20 w-[792px]">
          <h1 className="w-[518px] h-[63px] font-semibold text-4xl text-white">
            Hackathon Submissions
          </h1>
          <p className="w-[700px] h-[78px] font-medium text-white">
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.
          </p>
          <button
            className="mt-6 p-[12px] gap-[8px] w-[194px] h-[52px] left-0 top-[188px] rounded-[10px] font-semibold bg-[#44924C] text-white "
            onClick={() => {
              navigate("/uploadsubmission/latest");
            }}
          >
            Upload Submissions
          </button>
        </div>
        <div className="">
          <img className="mt-14 w-[199px] h-[300px] mx-20" src={Logo} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
