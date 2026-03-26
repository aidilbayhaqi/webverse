import React, { useState } from "react";
import { FaClinicMedical } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FiClipboard } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const solutions = [
  {
    id: "clinic",
    label: "Clinic",
    icon: <FaClinicMedical />,
    image: "/clinic.png",
  },
  {
    id: "property",
    label: "Property",
    icon: <MdOutlineRealEstateAgent />,
    image: "/property.png",
  },
  {
    id: "education",
    label: "Education",
    icon: <FaGraduationCap />,
    image: "/education.png",
  },
];

export default function AboutSolution() {
  const [active, setActive] = useState("clinic");

  const current = solutions.find((s) => s.id === active);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-800 via-green-900 to-black text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-10 py-20">

        <div className="flex justify-between items-start">

          {/* LEFT */}
          <div className="max-w-xl">

            <p className="text-lg opacity-70 mb-6 tracking-wide">
              Our Solutions
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Built For End to End
              <br />
              Customer Experience
            </h1>

            {/* BUTTON MENU */}
            <div className="flex gap-6 mt-12">

              {solutions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 border cursor-pointer 
                  ${
                    active === item.id
                      ? "bg-green-500 text-white border-green-400 shadow-lg scale-105"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </button>
              ))}

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 w-[380px] shadow-2xl border border-white/10">

            <div className="grid grid-cols-2 gap-6">

              <div>
                <FiClipboard className="text-3xl text-green-300 mb-3" />
                <h3 className="font-semibold text-lg">
                  Smart Workflow
                </h3>
                <p className="text-sm opacity-70 mt-2">
                  Automate your daily operations efficiently.
                </p>
              </div>

              <div className="border-l border-white/10 pl-6">
                <FiClipboard className="text-3xl text-green-300 mb-3" />
                <h3 className="font-semibold text-lg">
                  Data Insights
                </h3>
                <p className="text-sm opacity-70 mt-2">
                  Make decisions based on real-time analytics.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* DYNAMIC IMAGE */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <img
          key={current?.image}
          src={current?.image}
          className="w-[320px] transition-all duration-500 ease-in-out hover:scale-105 shadow-2xl rounded-xl"
        />

      </div>

    </section>
  );
}