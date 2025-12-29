"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { GetBuyBackById } from "@/libs/api";
import { BuyBack } from "@/types/type";
import { Recycle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditBuyBack = () => {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<BuyBack>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = localStorage.getItem("token") || "";

  const fetchBuybackById = async () => {
    setIsLoading(true);
    try {
      const res = await GetBuyBackById(token, id as string);
      // const buyback = res.result;
      if (res.con) {
        setFormData(res.result);
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

  useEffect(() => {
    if (!id) return;
    fetchBuybackById();
  }, [id]);

  console.log("data ", formData);

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
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[300px] gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading buyBack data...</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EditBuyBack;
