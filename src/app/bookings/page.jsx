"use client";

import { supabase } from "@/supabase";
import React, { useEffect, useState } from "react";

const BookingPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
      console.log(error);
      // alert(error.message)
      return;
    } else {
      setEvents(data);
    }
  }

  async function handleBooking(e) {
    e.preventDefault();

    setLoading(true);

    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {
      alert("Please login to book an event");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("bookings").insert([
      {
        user_id: user.id,
        event_id: selectedEvent,
      },
    ]);

    if (error) {
      // alert(error.message)
      alert("Booking failed in db");
    } else {
      alert("Booking successful");
      setSelectedEvent("");
    }

    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-900 rounded-md shadow-md p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Book An Event</h1>
        <form className="space-y-4" onSubmit={handleBooking}>
          <div>
            <label
              className="block text-sm font-medium text-gray-400"
              htmlFor=""
            >
              Select Event
            </label>
            <select
              className="w-1/2 mt-1 p-2"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
            >
              <option className="bg-gray-800" value="">
                {" "}
                -- Choose an Event --
              </option>
              {events.map((event) => (
                <option className="bg-gray-800" key={event.id} value={event.id}>
                  {event.title} - {new Date(event.date).toLocaleDateString()}
                </option>
              ))}
            </select>
          </div>
          <button
            className="w-full bg-blue-500 text-whte py-2 rounded-md hover:bg-blue-800 transition cursor-pointer"
            disabled={loading}
            type="submit"
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
