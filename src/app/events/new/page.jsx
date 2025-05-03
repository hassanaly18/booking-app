"use client";

import { supabase } from "@/supabase";
import React, { useState } from "react";

const NewEventPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    price: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("events").insert([
      {
        title: formData.title,
        description: formData.description,
        location: formData.location,
        date: formData.date,
        price: formData.price,
        image_url: formData.image_url,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Event is created successfully");
      setFormData({
        title: "",
        description: "",
        location: "",
        date: "",
        price: "",
        image_url: "",
      });
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-12 px-4 py-8 bg-gray-900 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-400">
        Create New Event
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full px-4 py-2 border rounded-lg"
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          name="location"
          placeholder="Event Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-lg"
          type="text"
          name="image_url"
          placeholder="Image Url"
          value={formData.image_url}
          onChange={handleChange}
          required
        />
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition cursor-pointer"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default NewEventPage;
