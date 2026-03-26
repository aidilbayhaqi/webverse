import Contact from "@/app/Contact";
import React from "react";
import { FaChartLine, FaCogs, FaGlobe, FaRobot } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";

const solutions = [
  {
    title: "AI Chatbot Automation",
    desc: "Automate customer interactions, lead qualification, and support using intelligent AI chatbot integrated with WhatsApp and website.",
    icon: <FaRobot />,
  },
  {
    title: "Smart Lead Generation",
    desc: "Capture and convert leads automatically with high-converting landing pages and AI-driven funnels.",
    icon: <FaChartLine />,
  },
  {
    title: "Website Automation",
    desc: "Build modern websites integrated with automation tools to streamline your business processes.",
    icon: <FaGlobe />,
  },
  {
    title: "ERP System Integration",
    desc: "Centralize your operations with custom ERP systems tailored to your workflow and business needs.",
    icon: <FaCogs />,
  },
  {
    title: "Marketing Automation",
    desc: "Automate campaigns, follow-ups, and customer engagement to increase conversion and efficiency.",
    icon: <MdCampaign />,
  },
];

export default function SolutionsGrid() {
  return (
    <>
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_40%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Solutions
          </h2>
          <p className="text-white/60">
            Powerful AI-driven solutions to scale your business
          </p>
        </div>

        <div className="flex flex-col gap-8">

          {/* TOP 3 */}
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-xl mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM 2 */}
          <div className="flex justify-center gap-8 flex-wrap">
            {solutions.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[300px] bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-xl mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

    <section>
        <Contact/>
    </section>
    
    </>
  );
}