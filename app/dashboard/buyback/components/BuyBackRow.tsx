import { DeleteBuyBackById } from "@/libs/api";
import { BuyBack } from "@/types/type";
import { dotSpinner } from "ldrs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import BuybackTypeBadge from "./BuyBackTypeBadge";

dotSpinner.register();

interface Props {
  buyback: BuyBack;
  index: number;
  onDeleteSuccess?: () => void;
}

const BuyBackRow = ({ buyback, index, onDeleteSuccess }: Props) => {
  const router = useRouter();
  const [showDeletModal, setShowDeleteModal] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const date = new Date(buyback.buyDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const token = localStorage.getItem("tokne") || "";
      const res = await DeleteBuyBackById(token, buyback._id);
      if (res.con) {
        toast.success(res.message);
        setShowDeleteModal(false);
        onDeleteSuccess?.();
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to delete buyBack";
      toast.error(message);
    } finally {
      setIsDeleting(false);
    }
  };

  const batterySizes = buyback.batteries.map((b) => b.batterySize).join(",");
  const totalQuantity = buyback.batteries.reduce(
    (sum, b) => sum + b.quantity,
    0
  );
  const totalAmount = buyback.batteries.reduce((sum, b) => sum + b.total, 0);

  return (
    <>
      <tr
        className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
        onClick={() => router.push(`/dashboard/buyback/detail/${buyback._id}`)}
      >
        <td className="px-6 py-4 font-medium text-gray-900">{index}</td>
        <td className="px-6 py-4">{buyback.customer.name}</td>
        <td className="px-6 py-4 text-left">{buyback.buybackNumber}</td>
        <td className="px-6 py-4 text-left">
          {!buyback.sale ? (
            <BuybackTypeBadge isStandalone />
          ) : (
            <span
              title={`Invoice: ${buyback.sale.invoiceNumber}`}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 cursor-help"
            >
              With Sale
            </span>
          )}
        </td>

        <td className="px-6 py-4">{batterySizes}</td>
        <td className="px-6 py-4">{totalQuantity}</td>
        <td className="px-6 py-4 text-center">
          {totalAmount.toLocaleString()}
        </td>
        <td className="px-6 py-4">{buyback.createdBy.name}</td>
        <td className="px-6 py-4">{formattedDate}</td>
        <td className="px-6 py-4 flex justify-start">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/dashboard/buyback/update/${buyback._id}`);
              }}
              className=" size-10 flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil className="text-blue-500" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteModal(true);
              }}
              className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlineTrash className="text-red-500" />
            </button>
          </div>
        </td>
      </tr>

      {showDeletModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-6 animate-fadeIn">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Confirm Delete
              </h2>

              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this buyBack?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                  onClick={handleDelete}
                >
                  {isDeleting ? (
                    <>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `<l-dot-spinner size="18" speed="0.5" color="white"></l-dot-spinner>`,
                        }}
                      />
                    </>
                  ) : (
                    "OK"
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BuyBackRow;
