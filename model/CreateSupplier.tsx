"use client";
import { CreateNewSupplier } from "@/libs/api";
import { CreateSupplierType } from "@/types/type";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateSupplier = ({ open, onClose, onSuccess }: Props) => {
  const [formData, setFormData] = useState<CreateSupplierType>({
    companyName: "",
    contact: "",
    address: "",
    phone: "",
  });

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token") || "";
    try {
      const res = await CreateNewSupplier(formData, token);
      if (res.con) {
        toast.success(res.message);
        setFormData({ companyName: "", contact: "", address: "", phone: "" });
        onSuccess();
        onClose();
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Faied to create new Supplier. Please try again.";
      toast.error(message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add New Supplier</h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition text-xl"
          >
            ✖
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              value={formData.companyName}
              placeholder="e.g. xxx Co.Ltd"
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              value={formData.contact}
              placeholder="e.g. U/Daw xxxx"
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={formData.address}
              placeholder="e.g. No.xxxx, xxx street, xxx township"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              value={formData.phone}
              placeholder="e.g. 09xxxxxxxxx"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
          hover:bg-blue-700 hover:scale-[1.02] transition-all"
          >
            Save Supplier
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSupplier;
