import { DeleteSupplier } from "@/libs/api";
import { Supplier } from "@/types/auth";
import { dotSpinner } from "ldrs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi2";

dotSpinner.register();

interface Props {
  supplier: Supplier;
  index: number;
  onDeleteSuccess?: (id: string) => void;
}

const SupplierRow = ({ supplier, index, onDeleteSuccess }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    const token = localStorage.getItem("token") || "";
    try {
      const res = await DeleteSupplier(supplier._id, token);
      if (res.con) {
        toast.success(res.message);
        onDeleteSuccess?.(supplier._id);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to delete suppliers";
      toast.error(message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition">
      <td className="px-6 py-4 font-medium text-gray-900">{index}</td>
      <td className="px-6 py-4 font-medium text-gray-900">
        {supplier.companyName}
      </td>
      <td className="px-6 py-4">{supplier.contact}</td>
      <td className="px-6 py-4">{supplier.address}</td>
      <td className="px-6 py-4">{supplier.phone}</td>
      <td className="px-6 py-4 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => console.log("Edit", supplier)}
            className=" size-10 flex items-center justify-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlinePencil className="text-blue-500" />
          </button>
          <button
            onClick={handleDelete}
            className=" size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<l-dot-spinner size="20" speed="0.9" color="white"></l-dot-spinner>`,
                  }}
                />
              </>
            ) : (
              <HiOutlineTrash className="text-red-500" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SupplierRow;
