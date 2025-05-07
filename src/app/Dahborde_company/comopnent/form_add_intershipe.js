"use client";
import { useState } from "react";
import Footer_Form_Add_Intership from "./Footer_Form_Add_Intership";
import { mutate } from "swr";
import { toast } from "react-toastify";
const Form_add_intershipe = ({ setIsAddModalOpen }) => {
  // Data Intership

  const [newInternship, setNewInternship] = useState({
    title: "",
    description: "",
    location: "",
    mode: "",
    field: "",
    duration: "",
    startIntership: "",
    endIntership: "",
    Deadline: "",
  });
  const [IsshowSpinner, setIsshowSpinner] = useState(false);

  // Handle adding a new internship
  const handleAddInternship = async (e) => {
    try {
      e.preventDefault();
      setIsshowSpinner(true);
      // fetch  api to add Data in Database
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddIntership`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newInternship),
        }
      );

      const result = await res.json();
      if (res.ok) {
        setIsAddModalOpen(false);
        toast.success("Internship updated successfully!", {
          pauseOnHover: false,
          autoClose: 1000,
        });
        // ✅ تحديث الكاش مباشرة بدون إعادة تحميل  تديث Swr
        mutate(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllDataIntership_Dahborde_Company`
        );
      } else {
        toast.warn(result.messgae, {
          pauseOnHover: false,
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error adding internship:", error);
      toast.error("Failed to add internship. Please try again.", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    } finally {
      setIsshowSpinner(false);
    }
  };

  return (
    <form onSubmit={(e) => handleAddInternship(e)}>
      <div className="p-4 h-96  overflow-y-scroll">
        <div className="space-y-4">
          {/* Title  */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              required
              value={newInternship.title}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  title: e.target.value,
                })
              }
              placeholder="Frontend Developer Intern"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              required
              value={newInternship.description}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  description: e.target.value,
                })
              }
              placeholder="Describe the internship role and responsibilities"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              required
              value={newInternship.location}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  location: e.target.value,
                })
              }
              placeholder="Ain El beel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* mode */}
          <div>
            <label
              htmlFor="mode"
              className="block text-sm font-medium text-gray-700 mb-1">
              mode <span className="text-red-500">*</span>
            </label>
            <select
              id="mode"
              required
              value={newInternship.mode}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  mode: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled>
                Select mode
              </option>
              <option value="Remote">Remote</option>
              <option value="In-office">In-office</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Sectore Of internship  */}
          <div>
            <label
              htmlFor="sector"
              className="block text-sm font-medium text-gray-700 mb-1">
              Internship Field <span className="text-red-500">*</span>
            </label>
            <select
              id="sector"
              required
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  field: e.target.value,
                })
              }
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors `}
              //   {...register("sector", { required: "Please select a sector" })}
            >
              <option value="" disabled>
                Select a sector
              </option>
              <option value="Technology">Technology</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
            {/* {errors.sector && <p className="mt-1 text-sm text-red-500">{errors.sector.message as string}</p>} */}
          </div>
          {/* Duration */}
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1">
              Duration <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="duration"
              required
              value={newInternship.duration}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  duration: e.target.value,
                })
              }
              placeholder="3 months"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* startIntership */}
          <div>
            <label
              htmlFor="startIntership"
              className="block text-sm font-medium text-gray-700 mb-1">
              Start Internship <span className="text-red-500">*</span>
            </label>
            <input
              id="startIntership"
              type="date"
              required
              value={newInternship.startIntership}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  startIntership: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* endIntership */}
          <div>
            <label
              htmlFor="endIntership"
              className="block text-sm font-medium text-gray-700 mb-1">
              End Internship <span className="text-red-500">*</span>
            </label>
            <input
              id="endIntership"
              type="date"
              required
              value={newInternship.endIntership}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  endIntership: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* applicationDeadline */}
          <div>
            <label
              htmlFor="Deadline"
              className="block text-sm font-medium text-gray-700 mb-1">
              Deadline
            </label>
            <input
              id="Deadline"
              type="date"
              value={newInternship.Deadline}
              onChange={(e) =>
                setNewInternship({
                  ...newInternship,
                  Deadline: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <Footer_Form_Add_Intership
        setIsAddModalOpen={setIsAddModalOpen}
        IsshowSpinner={IsshowSpinner}
        setIsshowSpinner={setIsshowSpinner}
      />
    </form>
  );
};

export default Form_add_intershipe;
