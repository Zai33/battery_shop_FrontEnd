"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { GetAllCategories, GetAllSuppliers, GetProductById } from "@/libs/api";
import { batteryTypes, Category, Supplier } from "@/types/auth";
import { Package, Save, X } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditProduct = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    category: "",
    supplier: "",
    brand: "",
    capacity: "",
    price: "",
    warrantyMonths: "",
    quantity: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const fetchProductById = async () => {
      setIsLoading(true);
      try {
        const res = await GetProductById(id as string, token);
        const product = res.result;
        if (res.con) {
          setFormData({
            name: product.name,
            type: product.type,
            category: product.category,
            supplier: product.supplier,
            brand: product.brand,
            capacity: product.capacity,
            price: product.price,
            warrantyMonths: product.warrantyMonths,
            quantity: product.quantity,
          });
        } else {
          toast.error(res.message);
        }
        setIsLoading(false);
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to create new product. Please try again.";
        toast.error(message);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) fetchProductById();
    fetchSuppliersAndCategories();
  }, [id]);

  const fetchSuppliersAndCategories = async () => {
    try {
      const [supplierRes, categoryRes] = await Promise.all([
        GetAllSuppliers(token),
        GetAllCategories(token),
      ]);
      if (supplierRes.con) {
        setSuppliers(supplierRes.result);
      } else {
        toast.error(supplierRes.message);
      }
      if (categoryRes.con) {
        setCategories(categoryRes.result);
      } else {
        toast.error(categoryRes.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to fetch suppliers, categories";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Package className="w-8 h-8 text-blue-600" />
              Edit Product
            </h1>
          </div>
          <Breadcrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Product", href: "/dashboard/product" },
              { label: "Edit" },
            ]}
          />
        </div>

        {/* Form Section */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex justify-center items-center mt-6">
            <form className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full max-w-5xl">
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                    Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Product Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. PowerMax 2000 Solar Battery"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={formData.name}
                        // onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brand"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Brand <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        required
                        placeholder="e.g. Duracell, Exide"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={formData.brand}
                        // onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="capacity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Capacity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="capacity"
                        name="capacity"
                        required
                        placeholder="e.g. 12V 100Ah"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={formData.capacity}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                    Classification
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
                        value={formData.type}
                        // onChange={handleChange}
                      >
                        <option value="">Select Type</option>
                        {batteryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
                        value={formData.category}
                        // onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat._id} value={cat._id}>
                            {cat.type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="supplier"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Supplier <span className="text-red-500">*</span>
                      </label>
                      <div className="flex flex-col gap-2">
                        <select
                          id="supplier"
                          name="supplier"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white transition"
                          value={formData.supplier}
                          // onChange={handleChange}
                        >
                          <option value="">Select Supplier</option>
                          {suppliers.map((sup) => (
                            <option key={sup._id} value={sup._id}>
                              {sup.companyName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                    Inventory & Pricing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Price (MMK) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        required
                        step="0.01"
                        placeholder="0.00"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={formData.price}
                        // onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Quantity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        required
                        placeholder="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={formData.quantity}
                        // onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="warrantyMonths"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Warranty (Months){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="warrantyMonths"
                        name="warrantyMonths"
                        required
                        placeholder="e.g. 12"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        value={formData.warrantyMonths}
                        // onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex items-center justify-end gap-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  // onClick={handleSubmit}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Product
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProduct;
