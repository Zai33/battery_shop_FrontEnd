"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import BuybackListSkeleton from "@/components/loader/BuybackListSkeleton";
import { GetAllBuyBacks } from "@/libs/api";
import { Recycle, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BuyBackListEmpty from "./BuyBackListEmpty";
import BuyBackRow from "./BuyBackRow";
import { BuyBack } from "@/types/type";

const BuyBackList = () => {
  const router = useRouter();
  const [buyback, setBuyback] = useState<BuyBack[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";

  const fetchBuyBacks = async (page = 1) => {
    setIsLoading(true);
    try {
      const res = await GetAllBuyBacks(token, page);
      if (res.con) {
        setBuyback(res.result);
        setCurrentPage(res.currentPage);
        setTotalPages(res.totalPages);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch buybacks";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSuccess = () => {
    if (buyback.length === 1 && currentPage > 1) {
      fetchBuyBacks(currentPage - 1);
    } else {
      fetchBuyBacks(currentPage);
    }
  };

  useEffect(() => {
    fetchBuyBacks(1);
  }, []);

  return (
    <div className="p-4">
      {/* upper division */}
      <div className="flex justify-between mt-2">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Recycle className="w-8 h-8 text-blue-600" />
            Sales List
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search buyback...."
              className="pl-10 pr-4 py-2 rounded-lg shadow-lg border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 shadow-lg text-white font-semibold hover:bg-blue-600 hover:scale-105 
             transition duration-300 ease-in-out"
            onClick={() => router.push("/dashboard/buyback/create")}
          >
            + Create New BuyBack
          </button>
        </div>
      </div>
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Buy-Back" },
        ]}
      />
      {/* Buy back table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white mt-4">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-600 border-b">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                #
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Customer
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Invoice No.
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Type
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                BatterySize
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Qty
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Total (MMK)
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                OpenedBy
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Buy Date
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <BuybackListSkeleton />
            ) : buyback.length === 0 ? (
              <BuyBackListEmpty />
            ) : (
              buyback.map((bb, index) => {
                return (
                  <BuyBackRow
                    key={index}
                    buyback={bb}
                    index={index + 1}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-gray-200">
            <button
              disabled={currentPage === 1}
              onClick={() => fetchBuyBacks(currentPage - 1)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 
          ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
          }`}
            >
              ⬅ Prev
            </button>
            <span className="text-gray-700 font-semibold text-sm">
              Page <span className="text-blue-600">{currentPage}</span> of{" "}
              <span className="text-blue-600">{totalPages}</span>
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => fetchBuyBacks(currentPage + 1)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 
          ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
          }`}
            >
              Next ➡
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyBackList;
