import { useState } from "react";
import { FaFileAlt, FaPaperPlane, FaRegCalendarAlt } from "react-icons/fa";

const CITIES = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Miami",
  "Dallas",
];

const MATERIAL_TYPES = [
  "General Cargo",
  "Perishable Goods",
  "Fragile Items",
  "Hazardous Materials",
  "Oversized Equipment",
  "High-Value Shipments",
];

const initialForm = {
  fullName: "",
  mobileNumber: "",
  email: "",
  pickupLocation: "",
  deliveryLocation: "",
  materialType: "",
  weight: "",
  pickupDate: "",
  additionalRequirements: "",
};

export const RequestQuote = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your quotation request has been submitted.");
    setForm(initialForm);
  };

  return (
    <div
      id="request-quote"
      className="bg-white rounded-lg shadow-lg w-full max-w-xl">
      {/* Header */}
      <div className="bg-primary text-secondary px-5 py-3 flex items-center gap-2 rounded-t-lg">
        <FaFileAlt size={18} />
        <h2 className="text-base sm:text-lg font-bold">Request a Quotation</h2>
      </div>

          <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={form.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <select
                  id="pickupLocation"
                  name="pickupLocation"
                  value={form.pickupLocation}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Select city / location</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                  Delivery Location <span className="text-red-500">*</span>
                </label>
                <select
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={form.deliveryLocation}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Select city / location</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="materialType" className="block text-sm font-semibold text-gray-700 mb-1">
                  Material Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="materialType"
                  name="materialType"
                  value={form.materialType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Select material type</option>
                  {MATERIAL_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-1">
                  Approximate Weight (Tonnes) <span className="text-red-500">*</span>
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="text"
                  placeholder="e.g, 5, 10, 20"
                  value={form.weight}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-1">
                  Pickup Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaRegCalendarAlt
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    id="pickupDate"
                    name="pickupDate"
                    type="date"
                    value={form.pickupDate}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="additionalRequirements" className="block text-sm font-semibold text-gray-700 mb-1">
                  Additional Requirements
                </label>
                <textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  rows="2"
                  placeholder="Any special instructions..."
                  value={form.additionalRequirements}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </div>

        <button
          type="submit"
          className="w-full bg-primary text-secondary font-semibold py-2 text-sm rounded-md hover:opacity-90 transition flex items-center justify-center gap-2">
          <FaPaperPlane size={14} />
          Submit Request
        </button>
      </form>
    </div>
  );
};
