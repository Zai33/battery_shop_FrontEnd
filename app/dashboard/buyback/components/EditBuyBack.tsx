"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { GetBuyBackById, UpdateBuyBackById } from "@/libs/api";
import { BuyBack, RebuyBattery } from "@/types/type";
import { Recycle, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditBuyBack = () => {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<BuyBack>();
  const [batteries, setBatteries] = useState<RebuyBattery[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";

  const fetchBuybackById = async () => {
    setIsLoading(true);
    try {
      const res = await GetBuyBackById(token, id as string);
      // const buyback = res.result;
      if (res.con) {
        setFormData(res.result);
        setBatteries(res.result.batteries);
      } else {
        toast.error(res.message);
      }
      setIsLoading(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to fetch buyback. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  //update quantity
  const updateQuantity = (index: number, delta: number) => {
    setBatteries((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        const quantity = Math.max(1, item.quantity + delta);
        const reusableQty = Math.min(item.reusableQty, quantity);

        return {
          ...item,
          quantity,
          reusableQty,
          total: item.buyPrice * quantity,
        };
      })
    );
  };

  //update resuable qty
  const updateReusableQty = (index: number, delta: number) => {
    setBatteries((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        const reusableQty = Math.min(
          item.quantity,
          Math.max(0, item.reusableQty + delta)
        );

        return {
          ...item,
          reusableQty,
        };
      })
    );
  };

  // update buyback handler
  const handleUpdateBuyBack = async () => {
    try {
      setIsUpdating(true);
      console.log("data ", batteries);
      const res = await UpdateBuyBackById(token, id as string, batteries);
      if (res.con) {
        toast.success(res.message);
        setTimeout(() => {
          router.push("/dashboard/buyback");
        }, 1000);
      } else {
        toast.error(res.message);
      }
      setIsUpdating(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to update buyback. Please try again.";
      toast.error(message);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchBuybackById();
  }, [id]);

  return (
    <div className="w-full bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Recycle className="w-8 h-8 text-blue-600" />
            Update Buy-Back
          </h1>
        </div>
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Buy-Back", href: "/dashboard/buyback" },
            { label: "buy-back update" },
          ]}
        />
      </div>

      {/* form section */}
      <div className="w-full max-w-5xl h-fit bg-gray-100 rounded-lg shadow-lg p-6 border-gray-200 border-2 border-dashed">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-[300px] gap-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-medium">Loading buyBack data...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            <h2 className="text-lg text-start">BuyBack Data</h2>
            {batteries.map((b, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white rounded-xl shadow-sm p-4 mb-3 border-2 border-dashed border-gray-300"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {b.batterySize}
                  </p>
                  <p className="text-sm text-gray-500">
                    Buy Price: {b.buyPrice.toLocaleString()} Ks
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500 mb-1">Quantity</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium tabular-nums">
                      {b.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500 mb-1">Reusable</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateReusableQty(index, -1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium tabular-nums">
                      {b.reusableQty}
                    </span>
                    <button
                      onClick={() => updateReusableQty(index, 1)}
                      className="w-8 h-8 rounded-full bg-green-600 text-white hover:bg-green-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right w-28 shrink-0 font-mono tabular-nums">
                  <p className="text-xs text-gray-500">Total</p>
                  <p className="text-lg font-bold text-gray-800">
                    {b.total.toLocaleString()} Ks
                  </p>
                </div>
              </div>
            ))}
            <div className="border-b border-gray-500"></div>
            <div className="flex justify-end items-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium
      text-gray-700 bg-white border border-gray-300 rounded-lg
      hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200
      transition"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>

              <button
                onClick={handleUpdateBuyBack}
                disabled={isUpdating}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold text-white
      focus:outline-none focus:ring-2 focus:ring-blue-300 transition
      ${
        isUpdating
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
              >
                {isUpdating ? "Updating..." : "Update BuyBack"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBuyBack;
