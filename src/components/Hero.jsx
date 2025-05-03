import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-center max-w-3xl space-y-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
        Discover. Book. Experience.
      </h1>
      <p className="text-lg text-gray-300">
        Explore the moset exciting events near you. Book instantly. Attend
        effortlessly.
      </p>
      <Link href={"/bookings"}>
        <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-900 text-white rounded-full font-semibold transition duration-300 shadow-lg cursor-pointer">
          Book Now
        </button>
      </Link>
    </section>
  );
};

export default Hero;
