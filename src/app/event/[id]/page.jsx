"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/supabase";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  async function fetchEvent() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      alert(error.message);
      return;
    } else {
      setEvent(data);
    }
  }

  if (!event) return <div>Loading...</div>;
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h1 className="text-black text-lg font-semibold mt-4">{event.title}</h1>
        <p className="text-gray-600 mt-2">{event.location}</p>
        <p className="text-gray-700 mt-2">
          {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mt-2">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
