"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/supabase";
import EventCard from "@/components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    setLoading(true);
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
      console.log(error);
      // alert(error.message)
      return;
    } else {
      setEvents(data);
    }
    setLoading(false);
  }
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">Upcoming Events</h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading....</p>
      ) : events.length === 0 ? (
        <p className="text-center text-gray-400">No events found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
