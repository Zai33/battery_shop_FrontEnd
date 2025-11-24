import { DeleteSupplier, UpdateSupplier } from "@/libs/api";
import { Supplier } from "@/types/auth";
import { dotSpinner } from "ldrs";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi2";

dotSpinner.register();

interface Props {
  supplier: Supplier;
  index: number;
  onDeleteSuccess?: (id: string) => void;
  onUpdateSuccess?: (supplier: Supplier) => void;
}

const SupplierRow = ({
  supplier,
  index,
  onDeleteSuccess,
  onUpdateSuccess,
}: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [editForm, setEditForm] = useState<Supplier>(supplier);
  const token = localStorage.getItem("token") || "";

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await UpdateSupplier(supplier._id, editForm, token);
      if (res.con) {
        toast.success(res.message);
        onUpdateSuccess?.(res.result);
        setIsEditOpen(false);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to update suppliers";
      toast.error(message);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
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
    <>
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
              onClick={() => setIsEditOpen(true)}
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

      {isEditOpen &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div
              className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-slideUp"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-5">
                Edit Supplier
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    name="companyName"
                    value={editForm.companyName}
                    onChange={handleFormChange}
                    className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Contact Person
                  </label>
                  <input
                    name="contact"
                    value={editForm.contact}
                    onChange={handleFormChange}
                    className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Contact Person"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    name="address"
                    value={editForm.address}
                    onChange={handleFormChange}
                    className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Address"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={editForm.phone}
                    onChange={handleFormChange}
                    className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsEditOpen(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shadow-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SupplierRow;
