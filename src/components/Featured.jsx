import React from "react";

const Featured = () => {
  return (
    <section className="mt-20 grid sm:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Find Events</h2>
        <p className="text-gray-300 ">
          Browse curated events and experiences tailored just for you.
        </p>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Easy Bookings</h2>
        <p className="text-gray-300 ">
            Book your spot in just a few clicks. No hassle, no stress.
        </p>
      </div>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Stay Updated</h2>
        <p className="text-gray-300 ">
          Get reminders and updates about your upcoming events.
        </p>
      </div>
    </section>
  );
};

export default Featured;
