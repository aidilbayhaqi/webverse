"use client";

import { useState } from "react";
import WebDevelopment from "./WebDevelopment";
import AIAutomation from "./AiAutomation";
import CRMDashboard from "./CrmDashboard";

export default function SliderCategory() {
  const [activeCategory, setActiveCategory] = useState("web");

  const categories = [
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI Automation" },
    { id: "crm", label: "CRM / ERP Dashboard" },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category Tabs */}
      <div className="flex justify-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer
              ${
                activeCategory === cat.id
                  ? "text-green-500"
                  : "text-gray-300 hover:border-green-400 hover:text-green-400"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative w-full flex items-center justify-center mt-0 reveal" data-reveal='up'>
        {activeCategory === "web" && <WebDevelopment />}
        {activeCategory === "ai" && <AIAutomation />}
        {activeCategory === "crm" && <CRMDashboard />}
      </div>
    </div>
  );
}
