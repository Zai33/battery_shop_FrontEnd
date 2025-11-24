"use client";
import { GetAllSuppliers } from "@/libs/api";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SupplierListSkeleton from "../loader/SupplierListSkeleton";
import SupplierListEmpty from "./SupplierListEmpty";
import SupplierRow from "./SupplierRow";
import CreateSupplier from "@/model/CreateSupplier";
import { Supplier } from "@/types/auth";

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModel, setOpenModel] = useState<boolean>(false);

  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token") || "";
      const res = await GetAllSuppliers(token);
      if (res.con) {
        setSuppliers(res.result);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch suppliers";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleDeleteSuccess = (id: string) => {
    setSuppliers((prev) => prev.filter((s) => s._id !== id));
  };

  const handleUpdateSuccess = (updatedSupplier: Supplier) => {
    setSuppliers((prev) =>
      prev.map((item) =>
        item._id === updatedSupplier._id ? updatedSupplier : item
      )
    );
  };

  return (
    <div className="p-4">
      {/* upper divison */}
      <div className="flex justify-between mt-2">
        <h1 className="text-3xl font-semibold">Suppliers</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg shadow-lg border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <button
            onClick={() => setOpenModel(true)}
            className="px-4 py-2 rounded-lg bg-blue-500 shadow-lg text-white font-semibold hover:bg-blue-600 hover:scale-105 
             transition duration-300 ease-in-out"
          >
            + Add New Supplier
          </button>
        </div>
      </div>

      {/* Supplier Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white mt-8">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-600 border-b">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                #
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Company name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Contact
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Address
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <SupplierListSkeleton />
            ) : suppliers.length === 0 ? (
              <SupplierListEmpty />
            ) : (
              suppliers.map((supplier, index) => {
                return (
                  <SupplierRow
                    key={index}
                    supplier={supplier}
                    index={index + 1}
                    onDeleteSuccess={handleDeleteSuccess}
                    onUpdateSuccess={handleUpdateSuccess}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <CreateSupplier
        open={openModel}
        onClose={() => setOpenModel(false)}
        onSuccess={() => {
          fetchSuppliers();
          setOpenModel(false);
        }}
      />
    </div>
  );
};

export default SupplierList;
