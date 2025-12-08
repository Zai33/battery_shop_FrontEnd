import { DeleteProductById } from "@/libs/api";
import { Product } from "@/types/auth";
import { dotSpinner } from "ldrs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";

dotSpinner.register();

interface Props {
  product: Product;
  index: number;
  onDeleteSuccess?: () => void;
}

const ProductRow = ({ product, index, onDeleteSuccess }: Props) => {
  const router = useRouter();
  const [showDeletModal, setShowDeleteModal] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await DeleteProductById(product._id, token);
      if (res.con) {
        toast.success(res.message);
        setShowDeleteModal(false);
        onDeleteSuccess?.();
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to delete product";
      toast.error(message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition">
        <td className="px-6 py-4 font-medium text-gray-900">{index}</td>
        <td className="px-6 py-4">{product.name}</td>
        <td className="px-6 py-4">{product.brand}</td>
        <td className="px-6 py-4">{product.type}</td>
        <td className="px-6 py-4">{product.category.type ?? "N/A"}</td>
        <td className="px-6 py-4">{product.capacity}</td>
        <td className="px-6 py-4">{product.price}</td>
        <td className="px-6 py-4 text-center">{product.quantity}</td>
        <td className="px-6 py-4 flex justify-start">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => router.push(`/dashboard/product/${product._id}`)}
              className=" size-10 flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil className="text-blue-500" />
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className=" size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
                Are you sure you want to delete this product?
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

export default ProductRow;
