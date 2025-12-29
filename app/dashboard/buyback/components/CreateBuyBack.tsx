"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { CreateBuyback } from "@/libs/api";
import { BuyBackForm, BuyBackItem } from "@/types/type";
import { Recycle, Save, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CreateBuyBack = () => {
  const [buybackForm, setBuybackForm] = useState<BuyBackForm>({
    customerInfo: { name: "", phone: "" },
    buybackData: [],
  });
  const [loading, setIsLoading] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";

  // buyback item handlers
  const addBuyBackItem = () => {
    setBuybackForm({
      ...buybackForm,
      buybackData: [
        ...buybackForm.buybackData,
        {
          batterySize: "",
          quantity: 1,
          reusableQty: 0,
          buyPrice: 0,
          total: 0,
        },
      ],
    });
  };

  const removeBuyBackItem = (index: number) => {
    const updated = buybackForm.buybackData.filter((_, i) => i !== index);
    setBuybackForm({ ...buybackForm, buybackData: updated });
  };

  const updateBuyBackItem = <K extends keyof BuyBackItem>(
    index: number,
    field: K,
    value: BuyBackItem[K]
  ) => {
    setBuybackForm((prev) => {
      const updated = prev.buybackData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ) as BuyBackItem[];

      const itemChanged = updated[index];
      updated[index] = {
        ...itemChanged,
        total: (itemChanged.quantity || 0) * (itemChanged.buyPrice || 0),
      };

      return {
        ...prev,
        buybackData: updated,
        oldBatteryPrice: updated.reduce((s, it) => s + (it.total || 0), 0),
      };
    });
  };

  const calculateBuyBackTotal = () => {
    return buybackForm.buybackData.reduce((sum, item) => sum + item.total, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    try {
      const res = await CreateBuyback(token, buybackForm);
      if (res.con) {
        toast.success("Create Successfully");
        setBuybackForm({
          customerInfo: { name: "", phone: "" },
          buybackData: [],
        });
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to create new Buyback. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Recycle className="w-8 h-8 text-blue-600" />
            Create Buy-Back
          </h1>
        </div>
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Buy-Back", href: "/dashboard/buyback" },
            { label: "buy-back create" },
          ]}
        />
      </div>
      {/* content section */}
      <div className="mb-4">
        <div className="flex flex-col gap-3 border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          {/* customer info */}
          <h2 className="text-lg text-start">Customer Info</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col w-full md:flex-1">
              <label htmlFor="name" className="text-gray-600 font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="U/Daw xxxx-xxxx"
                value={buybackForm.customerInfo.name}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setBuybackForm({
                    ...buybackForm,
                    customerInfo: {
                      ...buybackForm.customerInfo,
                      name: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col w-full md:flex-1">
              <label htmlFor="phone" className="text-gray-600 font-medium mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="09 xxxxxxx"
                value={buybackForm.customerInfo.phone}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setBuybackForm({
                    ...buybackForm,
                    customerInfo: {
                      ...buybackForm.customerInfo,
                      phone: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          {/* buyback data */}
          <div>
            <div className="border-b border-gray-500 mt-3"></div>
            <h2 className="text-lg font-medium mb-3 mt-3">BayBack Info</h2>
            <div className="flex flex-col gap-4">
              {buybackForm.buybackData.map((item, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-9 gap-4 p-4 shadow-md rounded-xl bg-gray-100"
                >
                  <div className="col-span-3">
                    <label className="font-medium mb-1 block">Size</label>
                    <select
                      className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3"
                      value={item.batterySize}
                      onChange={(e) =>
                        updateBuyBackItem(index, "batterySize", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Size
                      </option>
                      <option value="N20">N20</option>
                      <option value="N35">N35</option>
                      <option value="N50">N50</option>
                      <option value="N70">N70</option>
                      <option value="N100">N100</option>
                      <option value="N120">N120</option>
                      <option value="N150">N150</option>
                      <option value="N200">N200</option>
                    </select>
                  </div>

                  <div className="col-span-3">
                    <label className="font-medium mb-1 block">Qty</label>
                    <input
                      type="number"
                      min={1}
                      className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3"
                      value={item.quantity || ""}
                      placeholder="1"
                      onChange={(e) =>
                        updateBuyBackItem(
                          index,
                          "quantity",
                          Number(e.target.value)
                        )
                      }
                    />
                  </div>

                  <div className="col-span-3">
                    <label className="font-medium mb-1 block">Price</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3"
                      value={item.buyPrice || ""}
                      placeholder="0"
                      onChange={(e) =>
                        updateBuyBackItem(
                          index,
                          "buyPrice",
                          Number(e.target.value)
                        )
                      }
                    />
                  </div>

                  <div className="absolute -top-2 -right-2">
                    <button
                      className="flex items-center justify-center w-8 h-8 bg-red-200 rounded-full shadow hover:bg-red-300 transition-colors"
                      onClick={() => removeBuyBackItem(index)}
                    >
                      <X className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}

              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-lg w-fit hover:bg-gray-900"
                onClick={addBuyBackItem}
              >
                + Add BuyBack Battery
              </button>

              <div className="text-lg font-medium mt-3">
                BuyBack Total:{" "}
                <span className="font-semibold text-yellow-800">
                  {calculateBuyBackTotal().toLocaleString()}
                </span>{" "}
                Ks
              </div>
            </div>
          </div>

          {/* comfrim section */}
          <div>
            <div className="border-b border-gray-500 mt-3"></div>
            <div className="px-6 py-4 flex items-center justify-end gap-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-red-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all"
              >
                <X className="w-4 h-4 text-red-400" />
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmit}
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
                    Save
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBuyBack;
