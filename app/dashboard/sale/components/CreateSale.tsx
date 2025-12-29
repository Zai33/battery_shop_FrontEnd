"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { SaleCreate, SearchProductByName } from "@/libs/api";
import { BuyBackItem, Product, SaleForm } from "@/types/type";
import { dotSpinner } from "ldrs";
import { ReceiptText, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
dotSpinner.register();

const CreateSale = () => {
  const [saleForm, setSaleForm] = useState<SaleForm>({
    customerInfo: { name: "", phone: "" },
    product: "",
    batteryCategory: "new",
    quantity: 1,
    salePrice: 0,
    carNumber: "",
    oldBatteryPrice: 0,
    totalPrice: 0,
    rebuyOldBattery: false,
    paymentMethod: "",
    paidAmount: 0,
    duePayment: 0,
    isPaid: false,
    buybackData: [],
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = localStorage.getItem("token") || "";

  let timeout: ReturnType<typeof setTimeout>;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    clearTimeout(timeout);

    if (!value.trim()) {
      setFilteredProducts([]);
      setSaleForm((prev) => ({
        ...prev,
        product: "",
        salePrice: 0,
        totalPrice: 0,
      }));
      return;
    }

    timeout = setTimeout(async () => {
      try {
        const product = await SearchProductByName(token, value);
        setFilteredProducts(product.result || []);
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Failed to Search products";
        toast.error(message);
        setFilteredProducts([]);
      }
    }, 300);
  };

  const handleSearchProduct = (product: Product) => {
    setSaleForm({
      ...saleForm,
      product: product._id,
      salePrice: product.price,
      totalPrice: saleForm.quantity * product.price,
    });
    setSearchTerm(product.name);
    setFilteredProducts([]);
  };

  // buyback item handlers
  const addBuyBackItem = () => {
    setSaleForm({
      ...saleForm,
      buybackData: [
        ...saleForm.buybackData,
        {
          batterySize: "",
          condition: "",
          quantity: 1,
          reusableQty: 0,
          buyPrice: 0,
          inspectionNote: "",
          total: 0,
        },
      ],
    });
  };

  const removeBuyBackItem = (index: number) => {
    const updated = saleForm.buybackData.filter((_, i) => i !== index);
    setSaleForm({ ...saleForm, buybackData: updated });
  };

  const updateBuyBackItem = <K extends keyof BuyBackItem>(
    index: number,
    field: K,
    value: BuyBackItem[K]
  ) => {
    setSaleForm((prev) => {
      const updated = prev.buybackData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ) as BuyBackItem[];

      const itemChanged = updated[index];
      updated[index] = {
        ...itemChanged,
        total: (itemChanged.quantity || 0) * (itemChanged.buyPrice || 0),
      };

      return {
        ...prev,
        buybackData: updated,
        oldBatteryPrice: updated.reduce((s, it) => s + (it.total || 0), 0),
      };
    });
  };

  const calculateBuyBackTotal = () => {
    return saleForm.buybackData.reduce((sum, item) => sum + item.total, 0);
  };

  const productTotal = saleForm.totalPrice;
  const buyBackTotal = calculateBuyBackTotal();
  const actualTotal = productTotal - buyBackTotal;

  // payment method handler
  const handlePaymentMethodChange = (method: "Cash" | "KBZ pay" | "Credit") => {
    setSaleForm((prev) => ({
      ...prev,
      paymentMethod: method,
      paidAmount: method === "Credit" ? 0 : actualTotal,
      duePayment: method === "Credit" ? actualTotal : 0,
      isPaid: method !== "Credit",
    }));
  };

  // create sale handler
  const handleCreateSale = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const payLoad = {
      ...saleForm,
      buybackData: saleForm.rebuyOldBattery ? saleForm.buybackData : [],
    };
    try {
      const res = await SaleCreate(token, payLoad);
      if (res.con) {
        toast.success("Sale created successfully");
        // reset form
        setSaleForm({
          customerInfo: { name: "", phone: "" },
          product: "",
          batteryCategory: "new",
          quantity: 1,
          salePrice: 0,
          carNumber: "",
          oldBatteryPrice: 0,
          totalPrice: 0,
          rebuyOldBattery: false,
          paymentMethod: "",
          paidAmount: 0,
          duePayment: 0,
          isPaid: false,
          buybackData: [
            {
              batterySize: "",
              condition: "",
              quantity: 1,
              reusableQty: 0,
              buyPrice: 0,
              inspectionNote: "",
              total: 0,
            },
          ],
        });
        setSearchTerm("");
        setFilteredProducts([]);
      } else {
        toast.error(res.message);
      }
      setIsLoading(false);
      // router.push(`/dashboard/sale/detail/`);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to create new Sale. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4 md:p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <ReceiptText className="w-8 h-8 text-blue-600" />
            Create Voucher
          </h1>
        </div>
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Sale", href: "/dashboard/sale" },
            { label: "voucher create" },
          ]}
        />
      </div>
      <div className="mb-4">
        <div className="flex flex-col gap-3 border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          {/* customer info */}
          <h2 className="text-lg text-start">Customer Info</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col w-full md:flex-1">
              <label htmlFor="name" className="text-gray-600 font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="U/Daw xxxx-xxxx"
                value={saleForm.customerInfo.name}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setSaleForm({
                    ...saleForm,
                    customerInfo: {
                      ...saleForm.customerInfo,
                      name: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col w-full md:flex-1">
              <label htmlFor="phone" className="text-gray-600 font-medium mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="09 xxxxxxx"
                value={saleForm.customerInfo.phone}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setSaleForm({
                    ...saleForm,
                    customerInfo: {
                      ...saleForm.customerInfo,
                      phone: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col w-full md:flex-1">
              <label
                htmlFor="carNumber"
                className="text-gray-600 font-medium mb-2"
              >
                Car Number
              </label>
              <input
                id="carNumber"
                type="text"
                placeholder="xx-xxxx"
                value={saleForm.carNumber}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) =>
                  setSaleForm({
                    ...saleForm,
                    carNumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="border-b border-gray-500 mt-3"></div>
          {/* product info */}
          <h2 className="text-lg text-start">Product Info</h2>
          <div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="batteryType"
                  value="new"
                  checked={saleForm.batteryCategory === "new"}
                  onChange={(e) =>
                    setSaleForm({
                      ...saleForm,
                      batteryCategory: e.target.value,
                    })
                  }
                />
                <span>New Battery</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="batteryType"
                  value="second"
                  checked={saleForm.batteryCategory === "second"}
                  onChange={(e) =>
                    setSaleForm({
                      ...saleForm,
                      batteryCategory: e.target.value,
                    })
                  }
                />
                <span>Second-hand Battery</span>
              </label>
            </div>

            {saleForm.batteryCategory && (
              <div className="mt-3">
                {/* new battery */}
                {saleForm.batteryCategory === "new" ? (
                  <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col relative">
                      <label className="font-medium mb-1">Product</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter product name"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        required
                      />
                      {searchTerm && filteredProducts.length > 0 && (
                        <div className="absolute top-full left-0 w-full z-50 mt-2">
                          <div
                            className="rounded-xl border border-gray-200 bg-white shadow-xl overflow-y-auto animate-fadeIn"
                            style={{ maxHeight: "250px" }}
                          >
                            {filteredProducts.map((product: Product) => (
                              <button
                                key={product._id}
                                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-all flex items-center gap-3"
                                onClick={() => handleSearchProduct(product)}
                              >
                                <span className="font-medium text-gray-900">
                                  {product.name}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Quantity</label>
                      <input
                        type="number"
                        min={1}
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={saleForm.quantity}
                        onChange={(e) =>
                          setSaleForm({
                            ...saleForm,
                            quantity: Number(e.target.value),
                            totalPrice:
                              Number(e.target.value) * saleForm.salePrice,
                          })
                        }
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Item Price</label>
                      <input
                        type="number"
                        className="border border-gray-300 bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={saleForm.salePrice}
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Total</label>
                      <input
                        type="number"
                        className="border border-gray-300 bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={saleForm.totalPrice}
                        readOnly
                      />
                    </div>

                    <div className="flex items-center gap-2 mt-8">
                      <input
                        type="checkbox"
                        checked={saleForm.rebuyOldBattery}
                        onChange={(e) =>
                          setSaleForm({
                            ...saleForm,
                            rebuyOldBattery: e.target.checked,
                          })
                        }
                      />
                      Buy Back
                    </div>
                  </div>
                ) : (
                  // second-hand battery
                  <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Second Product</label>
                      <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter product name"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                      />
                      {filteredProducts.length > 0 && (
                        <div className="border rounded-lg bg-white mt-1 shadow-md">
                          {filteredProducts.map((product: Product) => (
                            <div
                              key={product._id}
                              className="p-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleSearchProduct(product)}
                            >
                              {product.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Quantity</label>
                      <input
                        type="number"
                        min={1}
                        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={saleForm.quantity}
                        onChange={(e) =>
                          setSaleForm({
                            ...saleForm,
                            quantity: Number(e.target.value),
                            totalPrice:
                              Number(e.target.value) * saleForm.salePrice,
                          })
                        }
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Price</label>
                      <input
                        type="number"
                        className="border border-gray-300 bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={saleForm.salePrice}
                        readOnly
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="font-medium mb-1">Total</label>
                      <input
                        type="number"
                        className="border border-gray-300 bg-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={saleForm.totalPrice}
                        readOnly
                      />
                    </div>

                    <div className="col-span-2 flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        checked={saleForm.rebuyOldBattery}
                        onChange={(e) =>
                          setSaleForm({
                            ...saleForm,
                            rebuyOldBattery: e.target.checked,
                          })
                        }
                      />
                      Buy Back
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Buy Back */}
          {saleForm.rebuyOldBattery && (
            <div className="">
              <div className="border-b border-gray-500 mt-3"></div>
              <h2 className="text-lg font-medium mb-3 mt-3">BuyBack Info</h2>

              <div className="flex flex-col gap-4">
                {saleForm.buybackData.map((item, index) => (
                  <div
                    key={index}
                    className="relative grid grid-cols-9 gap-4 p-4 shadow-sm rounded-xl bg-gray-50"
                  >
                    <div className="col-span-3">
                      <label className="font-medium mb-1 block">Size</label>
                      <select
                        className="w-full border border-gray-300 rounded-lg p-3"
                        value={item.batterySize}
                        onChange={(e) =>
                          updateBuyBackItem(
                            index,
                            "batterySize",
                            e.target.value
                          )
                        }
                      >
                        <option value="" disabled>
                          Select Size
                        </option>
                        <option value="N20">N20</option>
                        <option value="N35">N35</option>
                        <option value="N50">N50</option>
                        <option value="N70">N70</option>
                        <option value="N100">N100</option>
                        <option value="N120">N120</option>
                        <option value="N150">N150</option>
                        <option value="N200">N200</option>
                      </select>
                    </div>

                    <div className="col-span-3">
                      <label className="font-medium mb-1 block">Qty</label>
                      <input
                        type="number"
                        min={1}
                        className="w-full border border-gray-300 rounded-lg p-3"
                        value={item.quantity || ""}
                        placeholder="1"
                        onChange={(e) =>
                          updateBuyBackItem(
                            index,
                            "quantity",
                            Number(e.target.value)
                          )
                        }
                      />
                    </div>

                    <div className="col-span-3">
                      <label className="font-medium mb-1 block">Price</label>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-lg p-3"
                        value={item.buyPrice || ""}
                        placeholder="0"
                        onChange={(e) =>
                          updateBuyBackItem(
                            index,
                            "buyPrice",
                            Number(e.target.value)
                          )
                        }
                      />
                    </div>

                    <div className="absolute -top-2 -right-2">
                      <button
                        className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow hover:bg-red-200 transition-colors"
                        onClick={() => removeBuyBackItem(index)}
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg w-fit hover:bg-gray-900"
                  onClick={addBuyBackItem}
                >
                  + Add BuyBack Battery
                </button>

                <div className="text-lg font-medium mt-3">
                  BuyBack Total:{" "}
                  <span className="font-semibold text-yellow-800">
                    {calculateBuyBackTotal().toLocaleString()}
                  </span>{" "}
                  Ks
                </div>
              </div>
            </div>
          )}

          {/* Sale comfirm form  */}
          <div className="border-b border-gray-500 mt-3"></div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Sale Confirm
          </h2>
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-5">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-3">
                Payment Method
              </p>
              <div className="flex gap-3">
                {["Cash", "KBZ pay", "Credit"].map((method) => {
                  const active = saleForm.paymentMethod === method;

                  return (
                    <label
                      key={method}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition
              ${
                active
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-300 hover:border-gray-400"
              }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={active}
                        onChange={() =>
                          handlePaymentMethodChange(
                            method as "Cash" | "KBZ pay" | "Credit"
                          )
                        }
                        className="hidden"
                      />
                      <span className="text-sm font-medium">{method}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
              <div className="flex justify-between mb-1">
                <span>Product Total</span>
                <span className="font-medium">
                  Ks {productTotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between mb-2 text-green-600">
                <span>Buy-back</span>
                <span className="font-medium">
                  − Ks {buyBackTotal.toLocaleString()}
                </span>
              </div>

              <div className="border-t border-dashed border-gray-300 pt-2 flex justify-between">
                <span className="font-semibold text-gray-900">
                  Actual Total
                </span>
                <span className="font-semibold text-lg text-gray-900">
                  Ks {actualTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Paid Amount */}
            {saleForm.paymentMethod && saleForm.paymentMethod !== "CREDIT" && (
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Paid Amount
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3
                     focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter paid amount"
                  value={saleForm.paidAmount}
                  onChange={(e) => {
                    const paid = Number(e.target.value);

                    const due = paid < actualTotal ? actualTotal - paid : 0;

                    setSaleForm((prev) => ({
                      ...prev,
                      paidAmount: paid,
                      duePayment: due,
                      isPaid: due === 0,
                    }));
                  }}
                />

                {saleForm.duePayment > 0 && (
                  <div className="mt-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    Due Payment:
                    <span className="ml-1 font-semibold">
                      Ks {saleForm.duePayment.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            )}

            {saleForm.paymentMethod === "CREDIT" && (
              <div className="rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800">
                This is a <span className="font-semibold">credit sale</span>.
                Payment will be collected later.
              </div>
            )}
            <div>
              <button
                className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                onClick={handleCreateSale}
              >
                {isLoading ? (
                  <>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `<l-dot-spinner size="18" speed="0.5" color="white"></l-dot-spinner>`,
                      }}
                    />
                  </>
                ) : (
                  "Comfirm Sale"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSale;
