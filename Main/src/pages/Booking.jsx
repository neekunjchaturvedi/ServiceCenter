import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    issue: "",
    date: "",
    time: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.issue) newErrors.issue = "Issue description is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate form submission
    console.log("Form submitted:", formData);
    setSuccessMessage("Your booking has been successfully submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      issue: "",
      date: "",
      time: "",
      address: "",
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Book a Service</h1>
      {successMessage && (
        <div className="mb-4 text-green-600 font-bold text-center">
          {successMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="5b19aa25-a593-43eb-ac52-14ef9ea30013"
        />
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          {
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "1234567890",
          },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label htmlFor={field.name} className="block mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors[field.name] && (
              <p className="text-red-600 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="service" className="block mb-2">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a service</option>
            <option value="screen-repair">Screen Repair</option>
            <option value="battery-replacement">Battery Replacement</option>
            <option value="software-issues">Software Issues</option>
            <option value="water-damage">Water Damage Repair</option>
            <option value="camera-repair">Camera Repair</option>
            <option value="charging-port">Charging Port Repair</option>
          </select>
          {errors.service && (
            <p className="text-red-600 text-sm">{errors.service}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="issue" className="block mb-2">
            Describe the Issue
          </label>
          <textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
          {errors.issue && (
            <p className="text-red-600 text-sm">{errors.issue}</p>
          )}
        </div>

        {[
          { label: "Preferred Date", name: "date", type: "date" },
          { label: "Preferred Time", name: "time", type: "time" },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label htmlFor={field.name} className="block mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors[field.name] && (
              <p className="text-red-600 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={3}
          ></textarea>
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booking;
