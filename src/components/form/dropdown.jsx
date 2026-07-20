"use client";

import { useState, useRef, useEffect } from "react";

export default function Dropdown({ onChange, options, value, label }) {
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const roleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setIsRoleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative" ref={roleRef}>
      <label htmlFor="role" className="block text-gray-100 font-medium mb-2">
        {label}
      </label>

      {/* Custom Select Button */}
      <div
        onClick={() => setIsRoleOpen(!isRoleOpen)}
        className={`w-full px-4 py-3 text-gray-200  border rounded-lg cursor-pointer transition-all duration-300 ${
          isRoleOpen
            ? "border-blue-500 ring-2 ring-blue-500"
            : "border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className={!value ? "text-gray-400" : "text-gray-200"}>
            {selectedOption?.label || "Select..."}
          </span>
          <svg
            className={`w-5 h-5 transition-all duration-300 ${
              isRoleOpen ? "rotate-180 text-blue-400" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown Menu with Accordion/Cascading Animation */}
      <div
        className={`absolute w-full mt-2 bg-gray-700 border border-gray-600 rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out origin-top ${
          isRoleOpen
            ? "max-h-96 opacity-100 scale-y-100 visible"
            : "max-h-0 opacity-0 scale-y-0 invisible"
        }`}
      >
        <div className="overflow-hidden rounded-lg">
          {options.map((option, index) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsRoleOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-600 ${
                value === option.value ? "bg-gray-600" : ""
              } ${index === 0 ? "rounded-t-lg" : ""} ${
                index === options.length - 1 ? "rounded-b-lg" : ""
              }`}
              style={{
                animation: isRoleOpen
                  ? `slideIn 0.2s ease-out ${index * 0.05}s both`
                  : "none",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-200">{option.label}</span>
                {value === option.value && (
                  <svg
                    className="w-5 h-5 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
