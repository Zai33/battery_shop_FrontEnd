"use client";

import { GetSaleById } from "@/libs/api";
import { Sale } from "@/types/type";
import { TicketPercent } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Voucher from "./Voucher";
import { ring } from "ldrs";
import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
ring.register();

const SaleDetail = () => {
  const { id } = useParams();
  const [sale, setSale] = useState<Sale | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";

  const fetchSaleDetail = async () => {
    setIsLoading(true);
    try {
      const res = await GetSaleById(token, id as string);
      if (res.con) {
        setSale(res.result);
      } else {
        toast.error(res.message);
      }
      setIsLoading(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch sale";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("sale", sale);

  useEffect(() => {
    if (!id) return;
    fetchSaleDetail();
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
          { label: "Sale", href: "/dashboard/sale" },
          { label: "Voucher Detail" },
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
        ) : sale ? (
          <Voucher data={sale} />
        ) : (
          <p className="text-gray-500">
            No sale data available to display voucher.
          </p>
        )}
      </div>
    </div>
  );
};

export default SaleDetail;
