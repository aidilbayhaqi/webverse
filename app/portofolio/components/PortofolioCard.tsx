'use client'
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [preview, setPreview] = useState<any>(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // 🔥 DATA (AI AGENCY STYLE)
  const projects = [
    {
      title: "AI Chatbot Lead System",
      category: "AI Automation",
      image: "/chatbot.png",
      stack: ["OpenAI", "WhatsApp API", "Automation"],
    },
    {
      title: "Smart CRM Dashboard",
      category: "ERP System",
      image: "/dashboard.png",
      stack: ["Next JS", "MySQL", "Analytics"],
    },
    {
      title: "AI Landing Page Funnel",
      category: "Web Application",
      image: "/webverse.png",
      stack: ["React", "Tailwind", "SEO"],
    },
    {
      title: "ERP Inventory System",
      category: "ERP System",
      image: "/dashboard.png",
      stack: ["Laravel", "MySQL", "API"],
    },
    {
      title: "AI WhatsApp Automation",
      category: "AI Automation",
      image: "/chatbot.png",
      stack: ["Node JS", "WhatsApp API"],
    },
    {
      title: "Business Website Automation",
      category: "Web Application",
      image: "/ecommerce.jpg",
      stack: ["React", "Tailwind"],
    },
    {
      title: "AI Customer Support Bot",
      category: "AI Automation",
      image: "/chatbot.png",
      stack: ["OpenAI", "Automation"],
    },
    {
      title: "ERP HR Management",
      category: "ERP System",
      image: "/dashboard.png",
      stack: ["Next JS", "MySQL"],
    },
    {
      title: "Company Profile Website",
      category: "Web Application",
      image: "/landing-page.jpg",
      stack: ["React", "Tailwind"],
    },
  ];

  const categories = ["All", "AI Automation", "ERP System", "Web Application"];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginatedProjects = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages]);

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none 
      bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm uppercase tracking-widest">
            Portfolio
          </span>

          <h2 className="text-4xl font-bold mt-3">
            AI Solutions We’ve Built
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Real implementations of AI automation, ERP systems, and scalable web applications.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-green-500 text-white border-green-500"
                  : "border-gray-700 text-gray-300 hover:bg-green-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => {
                setPreview(project);

                const img = new Image();
                img.src = project.image;
                img.onload = () => {
                  setIsPortrait(img.height > img.width);
                };
              }}
              className="group cursor-pointer"
            >
              <div
                className="
                  relative overflow-hidden rounded-2xl 
                  border border-white/10 bg-white/5 backdrop-blur-md 
                  transition-all duration-500
                  hover:-translate-y-3 hover:scale-[1.02]
                  hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]
                "
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 w-full p-6">
                  <div className="transition-all duration-500 group-hover:-translate-y-6">

                    <span className="text-xs text-green-400">
                      {project.category}
                    </span>

                    <h3 className="text-lg font-semibold mt-1">
                      {project.title}
                    </h3>

                    {/* STACK */}
                    <div className="mt-4 flex flex-wrap gap-2 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
                      {project.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10 hover:bg-green-500 hover:text-white transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 disabled:opacity-30 hover:bg-green-500 hover:text-white transition"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={i}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === page
                    ? "bg-green-500 text-white"
                    : "border border-gray-700 text-gray-300 hover:bg-green-500 hover:text-white"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 disabled:opacity-30 hover:bg-green-500 hover:text-white transition"
          >
            Next
          </button>

        </div>
      </div>

      {/* MODAL */}
      {preview && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="relative w-full max-w-5xl flex justify-center">

            <button
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 text-white z-10"
            >
              <X size={28} />
            </button>

            <img
              src={preview.image}
              className={`rounded-xl shadow-2xl ${
                preview.category === "App Development" || isPortrait
                  ? "h-[80vh] object-contain"
                  : "w-full max-h-[80vh] object-contain"
              }`}
            />

          </div>
        </div>
      )}
    </section>
  );
};

export default Project;