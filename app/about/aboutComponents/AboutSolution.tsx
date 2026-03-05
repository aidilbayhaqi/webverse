import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";

export default function AboutSolution() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-10 py-20">

        {/* Header */}
        <div className="flex justify-between items-start">

          {/* LEFT */}
          <div className="max-w-xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
              <p className="text-lg opacity-80">Our Solutions</p>
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Built For End to End
              <br />
              Customer Experience
            </h1>

            {/* MENU */}
            <div className="flex items-center gap-10 mt-12 text-2xl font-semibold">

              <div className="flex items-center gap-3">
                <FaClinicMedical className="text-3xl text-green-300" />
                Clinic
              </div>

              <div className="h-8 w-[1px] bg-white opacity-40"></div>

              <div className="flex items-center gap-3">
                <MdOutlineRealEstateAgent className="text-3xl text-green-300" />
                Property
              </div>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-green-600/90 backdrop-blur-lg rounded-2xl p-8 w-[380px] shadow-2xl">

            <div className="grid grid-cols-2 gap-6">

              {/* CARD 1 */}
              <div>
                <FiClipboard className="text-3xl text-green-200 mb-3" />

                <h3 className="font-semibold text-lg">
                  Deliver Results
                </h3>

                <p className="text-sm opacity-80 mt-2">
                  Designed to help you make results happen.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="border-l border-green-400 pl-6">

                <FiClipboard className="text-3xl text-green-200 mb-3" />

                <h3 className="font-semibold text-lg">
                  Deliver Results
                </h3>

                <p className="text-sm opacity-80 mt-2">
                  Designed to help you make results happen.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* FLOATING UI IMAGE */}

      <img
        src="/dashboard.png"
        className="absolute bottom-10 left-[28%] w-[280px] rotate-[-15deg] shadow-2xl"
      />

      <img
        src="/ecommerce.png"
        className="absolute bottom-16 left-[50%] w-[280px] rotate-[10deg] shadow-2xl"
      />

    </section>
  );
}