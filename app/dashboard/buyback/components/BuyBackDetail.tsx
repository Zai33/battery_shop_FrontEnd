"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { GetBuyBackById } from "@/libs/api";
import { BuyBack } from "@/types/type";
import { TicketPercent } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BuybackVoucher from "./BuybackVoucher";
import { ring } from "ldrs";

ring.register();

const BuyBackDetail = () => {
  const { id } = useParams();
  const [buyback, setbuyback] = useState<BuyBack>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";

  const fetchBuyback = async () => {
    setIsLoading(true);
    try {
      const res = await GetBuyBackById(token, id as string);
      if (res.con) {
        setbuyback(res.result);
      } else {
        toast.error(res.message);
      }
      setIsLoading(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch Buyback";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchBuyback();
  }, [id]);

  return (
    <div className="w-full h-full p-4 mx-auto max-w-7xl">
      <div className="text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4 mt-4 whitespace-nowrap">
        <TicketPercent className="w-8 h-8 text-blue-600" />
        <h1>Voucher Detail</h1>
      </div>
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Buy-back", href: "/dashboard/buyback" },
          { label: "BuyBack Detail" },
        ]}
      />

      <div className="flex justify-center">
        {isLoading ? (
          <>
            <span
              dangerouslySetInnerHTML={{
                __html: `<l-ring size="48" stroke="5" bg-opacity="0.1" speed="2" color="#2563eb"></l-ring>`,
              }}
            />
          </>
        ) : buyback ? (
          <BuybackVoucher data={buyback} />
        ) : (
          <p className="text-gray-500">
            No buyback data available to display voucher.
          </p>
        )}
      </div>
    </div>
  );
};

export default BuyBackDetail;
