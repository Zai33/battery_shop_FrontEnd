"use client";

import { LogoutUser } from "@/libs/api";
import { RootState } from "@/store";
import { ring } from "ldrs";
import { Briefcase, Edit, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

ring.register();

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone_number: user.phone_number || "",
        role: user.role || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Updated form:", form);
    // dispatch(updateProfile(form));
    // or call API
  };

  //logout handler
  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await LogoutUser();
      toast.success("Logged out successfully");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to logout. Please try again.";
      toast.error(message);
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <User className="w-8 h-8 text-blue-600" />
        User Profile
      </h1>

      {/* content */}
      <div className="flex flex-col gap-3 mt-2 p-4">
        {/* card */}
        <div className="w-full xl:max-w-5xl rounded-xl overflow-hidden shadow bg-white">
          {/* Cover */}
          <div className="relative h-40 bg-gradient-to-r from-pink-300 via-purple-400 to-orange-400">
            {/* <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full shadow">
              <Edit className="w-4 h-4 text-gray-700" />
            </button> */}
          </div>

          {/* Profile content */}
          <div className="relative px-6 pb-6">
            <div className="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
              <Image
                src="/images/user.png"
                alt="User avatar"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="pt-12">
              <p className="font-semibold text-gray-800">
                {user?.name || "Guest User"}
              </p>
              <p className="text-sm text-gray-500">
                This will be displayed on your profile
              </p>

              {/* Actions */}
              <div className="mt-3 flex gap-2">
                <label className="cursor-pointer inline-flex items-center px-3 py-1.5 rounded-md border text-sm font-medium hover:bg-gray-50">
                  Upload New
                  <input type="file" accept="image/*" className="hidden" />
                </label>

                <button className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Personal Information */}
        <div className="w-full xl:max-w-5xl rounded-xl bg-white shadow py-4 px-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Personal information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <div className="flex items-center gap-2 border-2 border-blue-400 rounded-lg px-3 py-2">
                <User className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email address
              </label>
              <div className="flex items-center gap-2 border-2 border-blue-400 rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mobile number
              </label>
              <div className="flex items-center gap-2 border-2 border-blue-400 rounded-lg px-3 py-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="+966 5xxxxxxxx"
                  value={form.phone_number}
                  onChange={handleChange}
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Role
              </label>
              <div className="flex items-center gap-2 border-2 border-blue-400 rounded-lg px-3 py-2">
                <Briefcase className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="role"
                  value={form.role}
                  readOnly
                  className="w-full outline-none text-sm cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="mt-5 flex justify-between items-center">
            <button
              onClick={handleLogout}
              disabled={logoutLoading}
              className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium 
             hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed 
             flex items-center gap-2"
            >
              {logoutLoading ? (
                <>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `<l-ring size="18" stroke="2" speed="1" color="white"></l-ring>`,
                    }}
                  />
                  Logging out...
                </>
              ) : (
                "Logout"
              )}
            </button>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
