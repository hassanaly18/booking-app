"use client";

import EventCard from "@/components/EventCard";
import EventForm from "@/components/EventForm";
import Hero from "@/components/Hero";
import { supabase } from "@/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f127a] text-white flex flex-col items-center justify-center px-6 py-12">
      <Hero />
    </main>
  );
}
