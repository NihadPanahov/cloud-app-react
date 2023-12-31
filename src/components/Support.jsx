import React from "react";
import { FiPhone } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { HiCpuChip } from "react-icons/hi2";
import { AiOutlineArrowRight } from "react-icons/ai";

import supportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name='support' className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finfing the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            esse excepturi corrupti. Voluptatibus, est! Tempore, delectus libero
            dolorum, voluptas in minima quos aperiam illo repellendus
            exercitationem repudiandae distinctio numquam minus?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16  bg-indigo-600 text-white rounded-lg py-2 text-center flex justify-center mt-[-4rem]">
                <FiPhone size={40} className="" />
              </div>
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi similique temporibus sit eius aperiam autem tempore
                provident ducimus. At, expedita.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16  bg-indigo-600 text-white rounded-lg py-2 text-center flex justify-center mt-[-4rem]">
                <BiSupport size={40} className="" />
              </div>
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi similique temporibus sit eius aperiam autem tempore
                provident ducimus. At, expedita.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16  bg-indigo-600 text-white rounded-lg py-2 text-center flex justify-center mt-[-4rem]">
                <HiCpuChip size={40} className="" />
              </div>
              <h3 className="font-bold text-2xl my-6">Media Inquries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi similique temporibus sit eius aperiam autem tempore
                provident ducimus. At, expedita.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <AiOutlineArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
