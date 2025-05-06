"use client";
import { supabase } from "@/supabase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    avatarUrl: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {
      alert("Login first");
      setLoading(false);
      router.push("login")
      return;
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      full_name: formData.fullName,
      avatar_url: formData.avatarUrl,
    });

    if (error) {
      alert(error.message);
      return;
    } else {
      alert("Profile has been updated");
      router.push("/")
    }

    setLoading(false);
  };

  const loadProfile = async () => {
    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {
      alert("Login first");
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("full_name, avatar_url")
      .eq("id", user.id)
      .single();

    if (data) {
      setFormData({
        fullName: data.full_name,
        avatarUrl: data.avatar_url,
      });
    }
    if (error) {
      alert(error.message);
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center  min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f127a] text-white flex-col px-6 py-12">
      <div className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Profile</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-400"
              htmlFor=""
            >
              Full Name
            </label>
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              value={formData.fullName}
              name="fullName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-400"
              htmlFor=""
            >
              Avatar
            </label>
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              value={formData.avatarUrl}
              name="avatarUrl"
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-900 transition cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
