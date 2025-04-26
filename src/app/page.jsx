"use client";

import EventCard from "@/components/EventCard";
import EventForm from "@/components/EventForm";
import { supabase } from "@/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
      alert(error.message);
      return;
    } else {
      setEvents(data);
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <EventForm/>
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
}
