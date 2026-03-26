'use client'
import { useScrollReveal } from '@/app/lib/useScrollReveal';
import React from 'react'


const CaseStudyChat = () => {
    useScrollReveal()

    const caseStudies = [
  {
    title: "Clinic Automation",
    problem:
      "We struggle with manual booking system, causing delays and missed appointments.",
    solution:
      "We implemented an AI chatbot that automates bookings, reminders, and patient communication 24/7.",
    tech: ["AI Chatbot", "WhatsApp API", "Automation System"],
    result:
      "Booking efficiency increased by 60% and no-shows significantly reduced.",
    image: "/clinic-result.png",
  },
  {
    title: "Property Leads",
    problem:
      "Slow response to incoming leads caused many potential clients to drop off.",
    solution:
      "We built a smart website integrated with AI chatbot to instantly capture and qualify leads.",
    tech: ["Landing Page", "AI Chatbot", "CRM Integration"],
    result:
      "Lead conversion increased by 45% with faster engagement.",
    image: "/property-result.png",
  },
];

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-20 pt-20 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-green-400 tracking-widest mb-3">
            CASE STUDIES
          </p>
          <h1 className="text-4xl font-bold">
            Real Conversations.
            <br />
            Real AI Solutions.
          </h1>
        </div>

        {/* CASE LIST */}
        <div className="flex flex-col gap-14 reveal" data-reveal='up'>

          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
            >
              {/* TITLE */}
              <h2 className="text-xl text-green-400 mb-8 font-semibold reveal" data-reveal='left'>
                {item.title}
              </h2>

              <div className="flex flex-col gap-6">

                {/* PROBLEM */}
                <div className="flex justify-start reveal" data-reveal='left'>
                  <div className="max-w-[75%] bg-red-500/10 border border-red-400/20 px-5 py-4 rounded-2xl">
                    <p className="text-xs text-red-300 mb-1">Problem</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                </div>

                {/* SOLUTION */}
                <div className="flex justify-end reveal" data-reveal='right'>
                  <div className="max-w-[75%] bg-green-500/10 border border-green-400/20 px-5 py-4 rounded-2xl">
                    <p className="text-xs text-green-300 mb-1">Solution</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.solution}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full text-green-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* RESULT */}
                <div className="flex justify-start reveal" data-reveal='left'>
                  <div className="max-w-[75%] bg-blue-500/10 border border-blue-400/20 px-5 py-4 rounded-2xl">
                    <p className="text-xs text-blue-300 mb-1">Result</p>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {item.result}
                    </p>

                    {/* IMAGE RESULT */}
                    <img
                      src={item.image}
                      alt="result"
                      className="rounded-xl shadow-lg w-full object-cover hover:scale-[1.02] transition duration-300"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default CaseStudyChat