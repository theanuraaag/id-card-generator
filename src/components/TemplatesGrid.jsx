import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // adjust path based on your project
import { FaLock } from "react-icons/fa";

const templates = [
  { id: 1, name: "Template 1", image: "/templates/classic-id.png", isLocked: false },
  { id: 2, name: "Template 2", image: "/templates/corporate-id.png", isLocked: false },
  { id: 3, name: "Template 3", image: "/templates/modern-id.png", isLocked: false },
  { id: 4, name: "Template 4", image: "/templates/professional-id.png", isLocked: true },
  { id: 5, name: "Template 5", image: "/templates/student-id.png", isLocked: true },
];

const TemplatesGrid = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleTemplateClick = (template) => {
    if (template.isLocked && !user) {
      navigate("/login");
    } else {
      navigate(`/generate/${template.id}`);
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {templates.map((template) => {
        const isAccessible = !template.isLocked || user;

        return (
          <div
            key={template.id}
            onClick={() => handleTemplateClick(template)}
            className={`relative cursor-pointer rounded-xl overflow-hidden border shadow transition-transform hover:scale-105 ${
              !isAccessible ? "opacity-50 blur-sm pointer-events-auto" : ""
            }`}
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-60 object-cover"
            />

            {/* Lock Overlay */}
            {template.isLocked && !user && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-lg font-semibold">
                <FaLock className="mb-2 text-2xl" />
                Login to access
              </div>
            )}

            <div className="bg-white text-center py-2 font-medium">
              {template.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TemplatesGrid;
