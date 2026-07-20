"use client";

import { useState, useRef, useEffect } from "react";
import Dropdown from "./form/dropdown";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    role: "",
    developerType: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const roleRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const roles = [
    { value: "hr_specialist", label: "HR Specialist" },
    { value: "employer", label: "Employer" },
    { value: "developer", label: "Developer" },
    { value: "designer", label: "UI/UX Designer" },
    { value: "other", label: "Other" },
  ];

  const developerTypes = [
    { value: "frontend", label: "Frontend Developer" },
    { value: "backend", label: "Backend Developer" },
    { value: "fullstack", label: "Full Stack Developer" },
    { value: "devops", label: "DevOps Engineer" },
    { value: "qa", label: "QA / Test Automation" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://majidmoeini.ir/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Email sent successfully!" });
        setFormData({ name: "", email: "", role: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to send email",
        });
      }
    } catch (error) {
      console.log("Full error object:", error);
      console.log("Error message:", error.message);
      console.log("Error cause:", error.cause);
      setStatus({
        type: "error",
        message: "Connection error: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleRef.current && !roleRef.current.contains(event.target)) {
        setIsRoleOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen py-12 px-0 ">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <form onSubmit={handleSubmit} className="px-4 space-y-6">
          <Dropdown
            options={roles}
            value={formData.role}
            onChange={(value) => setFormData({ ...formData, role: value })}
            label="Your Role"
          />

          {formData.role === "developer" && (
            <Dropdown
              options={developerTypes}
              value={formData.developerType}
              onChange={(value) =>
                setFormData({ ...formData, developerType: value })
              }
              label="Developer Type"
            />
          )}

          {/* Name field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-100 font-medium mb-2"
            >
              {/* Name */}
              {formData.role === "hr_specialist" ? "Company Name" : "Name"}
            </label>
            {formData.role === "hr_specialist" ? (
              <input
                type="text"
                id="name"
                name="companyName"
                required
                autoComplete="given-name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder={"Google"}
              />
            ) : (
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="given-name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder={"your Name"}
              />
            )}
          </div>
          {/* Email field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-100 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="example@email.com"
            />
          </div>
          {/* Role field with animated dropdown */}
          {/* <Dropdown
            formData={formData}
            setFormData={setFormData}
            onChange={setDropdownValue}
          /> */}

          {/* Message field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-100 font-medium mb-2 flex-row"
            >
              <div className="flex flex-row items-center gap-2">
                Message
                <p className="text-xs text-gray-400 font-extralight ">
                  optional
                </p>
              </div>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-gray-200 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Write your message here..."
            />
          </div>
          {/* Status message */}
          {status && (
            <div
              className={`p-3 rounded-lg text-center ${
                status.type === "success"
                  ? "bg-green-900 text-green-200 border border-green-700"
                  : "bg-red-900 text-red-200 border border-red-700"
              }`}
              role="alert"
            >
              {status.message}
            </div>
          )}
          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-blue-400 to-blue-700 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-500 hover:to-blue-800 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
            aria-label="Send contact form"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
