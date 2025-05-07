// This compnent is client حتى لو نزعت client
"use client";
import Spinner from "@/app/Componet/spinnerUi/spinner";
import PopupDelet from "@/app/Componet/Ui/PopupDelet";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { mutate } from "swr";

export default function InternshipCards({ DataCards, error, isLoading }) {
  const [editingInternship, setEditingInternship] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleModalOpen, setIsDeletModalOpen] = useState(false);
  const [IsshowSpinner, setIsshowSpinner] = useState(false);
  // I need this id for Delet intership
  const [IdIntership, setIdIntership] = useState();
  // Edit Interships
  async function handleEditInternship() {
    try {
      setIsshowSpinner(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/EditDataCompany_Intership`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingInternship),
        }
      );

      const result = await res.json();
      if (res.ok) {
        setIsEditModalOpen(false);
        toast.success("Internship updated successfully!", {
          pauseOnHover: false,
          autoClose: 1000,
        });
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
      console.error("Error updating internship:", error);
      toast.error("Failed to update internship. Please try again.", {
        pauseOnHover: false,
        autoClose: 2000,
      });
    } finally {
      setIsshowSpinner(false);
    }
  }

  // Delet Interships
  async function handleDeletInternship() {
    try {
      setIsshowSpinner(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/DeletDataCompany_Intership`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(IdIntership),
        }
      );

      const result = await res.json();
      if (res.ok) {
        toast.success("Internship deleted successfully!", {
          pauseOnHover: false,
          autoClose: 1000,
        });
        mutate(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllDataIntership_Dahborde_Company`
        );
        setIsDeletModalOpen(false);
      } else {
        toast.warn(result.messgae, {
          pauseOnHover: false,
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error deleting internship:", error);
      toast.error("Failed to delete internship. Please try again.", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    } finally {
      setIsshowSpinner(false);
    }
  }

  // Format date to display in a readable format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Calculate days remaining until deadline
  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  // Get badge color based on mode
  const getModeBadgeColor = (mode) => {
    switch (mode) {
      case "Remote":
        return "bg-green-100  text-green-800 border border-green-200";
      case "In-office":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "Hybrid":
        return "bg-purple-100 text-purple-800 border border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  // Get urgency color based on days remaining
  const getUrgencyColor = (deadline) => {
    const daysRemaining = getDaysRemaining(deadline);
    if (daysRemaining <= 3) return "text-red-600 bg-red-50 border-red-100";
    if (daysRemaining <= 7)
      return "text-orange-500 bg-orange-50 border-orange-100";
    return "text-gray-600 bg-gray-50 border-gray-100";
  };

  return (
    <div>
      <ToastContainer />
      {isLoading ? (
        <Spinner />
      ) : DataCards.length > 0 ? (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DataCards.map((internship) => (
              <div
                key={internship._id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                {/* Card Body */}
                <div className="p-4">
                  <div className="flex justify-between text-start">
                    {" "}
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 mb-2">
                        {internship.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {internship.description}
                      </p>
                    </div>
                    <span className=" px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 h-full rounded-full">
                      {internship.field}
                    </span>
                  </div>

                  {/* Duration and  Mode Badge - More Prominent */}
                  <div className="mb-4 p-2 bg-gray-50 rounded-md border border-gray-100 flex justify-between items-center">
                    <div>
                      {/* Mode Badge - More Prominent */}
                      <div>
                        <span
                          className={`inline-block px-3 py-1.5 rounded-md text-sm font-medium  ${getModeBadgeColor(
                            internship.mode
                          )}`}>
                          {internship.mode} Position
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-gray-500 block">
                        Duration
                      </span>
                      <span className="text-sm font-medium">
                        {internship.duration}
                      </span>
                    </div>
                  </div>

                  {/* Important Dates Section - Enhanced */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-700 border-b pb-1">
                      Important Dates
                    </h4>

                    {/* Start Date */}
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs font-medium">Start Date</span>
                      </div>
                      <span className="text-sm font-medium">
                        {formatDate(internship.startDate)}
                      </span>
                    </div>

                    {/* End Date */}
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-xs font-medium">End Date</span>
                      </div>
                      <span className="text-sm font-medium">
                        {formatDate(internship.endDate)}
                      </span>
                    </div>

                    {/* Applicants */}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-xs font-medium">
                        Current Applicants
                      </span>
                      <span className="text-sm font-medium">
                        👥 {internship.Applicants}
                      </span>
                    </div>
                  </div>

                  {/* Application Deadline - Enhanced */}
                  <div
                    className={`mt-4 p-3 rounded-md border ${getUrgencyColor(
                      internship.applicationDeadline
                    )}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs font-semibold">
                          Application Deadline
                        </p>
                        <p className="text-sm font-bold">
                          {formatDate(internship.applicationDeadline)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold">Time Remaining</p>
                        <p className="text-sm font-bold">
                          {getDaysRemaining(internship.applicationDeadline)}{" "}
                          days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 flex  gap-5">
                  <button
                    onClick={() => {
                      setEditingInternship(internship);
                      setIsEditModalOpen(true);
                    }}
                    className="px-3 py-2 w-full  text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none">
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => {
                      setIdIntership(internship._id);
                      setIsDeletModalOpen(true);
                    }}
                    className="px-3 w-full py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-2xl bg-white rounded-md py-4">
          Data Not Found {!error}
        </div>
      )}

      {/* Edit Internship Modal Form  */}
      {isEditModalOpen && (
        <div className="fixed   text-start inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Edit Internship</h2>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Update the details for this internship opportunity.
              </p>
            </div>

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
                      value={editingInternship.title}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
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
                      value={editingInternship.description}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
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
                      value={editingInternship.location}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
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
                      value={editingInternship.mode}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
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
                      value={editingInternship.duration}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
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
                      htmlFor="startDate"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Start Internship <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="startDate"
                      type="date"
                      required
                      value={editingInternship.startDate.split("T")[0]}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
                          startDate: e.target.value,
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
                      value={editingInternship.endDate.split("T")[0]}
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
                          endDate: e.target.value,
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
                      value={
                        editingInternship.applicationDeadline.split("T")[0]
                      }
                      onChange={(e) =>
                        setEditingInternship({
                          ...editingInternship,
                          applicationDeadline: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="p-4 border-t border-gray-200 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none">
                Cancel
              </button>

              <button
                onClick={() => handleEditInternship()}
                className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
                {IsshowSpinner ? <Spinner /> : "  Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popp Delet  */}
      {isDeleModalOpen && (
        <div className="fixed w-full  text-start inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className=" rounded-lg w-full">
            <PopupDelet
              IsshowSpinner={IsshowSpinner}
              setIsshowSpinner={setIsshowSpinner}
              handleDeletInternship={handleDeletInternship}
              setIsDeletModalOpen={setIsDeletModalOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
}
