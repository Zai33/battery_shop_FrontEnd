"use client";

import { Package, Search } from "lucide-react";
import ProductListSkeleton from "../../../../components/loader/ProductListSkeleton";
import BreadCrumb from "../../../../components/breadcrumb/BreadCrumb";
import ProductListEmpty from "./ProductListEmpty";
import { useEffect, useState } from "react";
import { GetAllProducts } from "@/libs/api";
import toast from "react-hot-toast";
import { Product, ProductResponse } from "@/types/type";
import { useRouter } from "next/navigation";
import ProductRow from "./ProductRow";

const ProductList = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchProducts = async (page = 1) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token") || "";
      const res: ProductResponse = await GetAllProducts(token, page);
      if (res.con) {
        setProducts(res.result);
        setCurrentPage(res.currentPage);
        setTotalPages(res.totalPages);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch products";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSuccess = () => {
    if (products.length === 1 && currentPage > 1) {
      fetchProducts(currentPage - 1);
    } else {
      fetchProducts(currentPage);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  return (
    <div className="p-4">
      {/* uppder division */}
      <div className="flex justify-between mt-2">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Package className="w-8 h-8 text-blue-600" />
            Products
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, category"
              className="pl-10 pr-4 py-2 rounded-lg shadow-lg border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <button
            className="px-4 py-2 rounded-lg bg-blue-500 shadow-lg text-white font-semibold hover:bg-blue-600 hover:scale-105 
             transition duration-300 ease-in-out"
            onClick={() => router.push("/dashboard/product/create")}
          >
            + Add New Product
          </button>
        </div>
      </div>
      <BreadCrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Product" },
        ]}
      />
      {/* Product List table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white mt-4">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-600 border-b">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                #
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Brand
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Type
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Capacity
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Price (MMK)
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeleton />
            ) : products.length === 0 ? (
              <ProductListEmpty />
            ) : (
              products.map((product, index) => {
                return (
                  <ProductRow
                    key={index}
                    product={product}
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
              onClick={() => fetchProducts(currentPage - 1)}
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
              onClick={() => fetchProducts(currentPage + 1)}
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

export default ProductList;
