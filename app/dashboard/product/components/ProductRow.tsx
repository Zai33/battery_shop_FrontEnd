import { Product } from "@/types/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";

interface Props {
  product: Product;
  index: number;
}

const ProductRow = ({ product, index }: Props) => {
  const router = useRouter();
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
            <button className=" size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              <HiOutlineTrash className="text-red-500" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
