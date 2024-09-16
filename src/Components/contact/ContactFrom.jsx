import React, { useState } from "react";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the data to an API)
    console.log("Form data:", formData);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        {/* Contact Info */}
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Address */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 489.536 489.536"
            >
              {/* SVG Path */}
            </svg>
            <span className="text-sm">
              House #14, Street #12, Darulaman Road, Kabul, Afghanistan.
            </span>
          </div>

          {/* Phone Number */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 60.002 60.002"
            >
              {/* SVG Path */}
            </svg>
            <span className="text-sm">+93 749 99 65 50</span>
          </div>

          {/* Availability */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 300.988 300.988"
            >
              {/* SVG Path */}
            </svg>
            <span className="text-sm">24/7</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* First Name */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>

            {/* Last Name */}
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Email */}
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Message */}
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </div>
          </div>

          <div className="flex justify-between w-full px-3">
            {/* Subscribe to newsletter */}
            <div className="md:flex md:items-center">
              <label className="block text-gray-500 font-bold">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
