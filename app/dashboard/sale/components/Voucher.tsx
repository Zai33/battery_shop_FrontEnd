import React, { useRef } from "react";
import { Sale } from "@/types/type";
import { BatteryCharging, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  data: Sale;
}

const Voucher = ({ data }: Props) => {
  const printRef = useRef<HTMLDivElement>(null);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "MMK",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const monthsDiff = (start: Date, end: Date) => {
    return (
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth())
    );
  };

  // calculate warranty months
  const months = monthsDiff(
    new Date(data.saleDate),
    new Date(data.warrantyExpiry)
  );

  //download with pdf handler
  const handleDownload = async () => {
    const content = printRef.current;
    if (!content) return;

    const originalClass = content.className;
    content.className += " pdf-safe";

    try {
      const canvas = await html2canvas(content, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const dataUrl = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });
      const imageProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;

      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`voucher_${data.carNumber}.pdf`);
    } finally {
      content.className = originalClass;
    }
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="bg-gray-100 h-full rounded-lg shadow-md p-4 relative">
        {/* down laod button */}
        <button
          title="Download Voucher"
          className="absolute top-4 right-4 p-2 bg-blue-600 text-white
             rounded-full shadow hover:bg-blue-700"
          onClick={handleDownload}
        >
          <Download className="w-5 h-5" />
        </button>
        <div
          className="w-[70%] mx-auto h-full flex flex-col items-center bg-white rounded-lg shadow-md p-6"
          ref={printRef}
        >
          {/* header division */}
          <div className="mt-4 flex flex-col items-center gap-3 border-b border-gray-700 pb-4">
            <h1 className="text-3xl font-bold tracking-wide text-gray-800 flex items-center gap-2">
              <BatteryCharging className="w-8 h-8 text-green-600" />
              KYAW GYI BATTERY
              <BatteryCharging className="w-8 h-8 text-green-600" />
            </h1>

            <div className="text-sm text-center text-gray-600 leading-relaxed">
              <p>MingalarDon Township, Yangon</p>
              <p>ShwePyiThar Township, Yangon</p>
              <p className="mt-1 font-medium text-gray-700">
                ☎ 09-123456789 , 09-123456789
              </p>
            </div>
          </div>

          {/* Date & Car No */}
          <div className="w-full mt-3 flex justify-evenly text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <span className="text-gray-500">Invoice:</span>
              <span className="font-medium text-gray-600">
                {data.invoiceNumber}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-gray-500">Date:</span>
              <span className="font-medium text-gray-600">
                {formatDate(data.saleDate.toString())}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-gray-500">Car No:</span>
              <span className="font-medium text-gray-600">
                {data.carNumber}
              </span>
            </div>
          </div>

          {/* Sale Details */}
          <div className="mt-6 w-full text-sm">
            <p className="font-semibold mb-3 tracking-wide">Sale Products</p>

            <div className="overflow-hidden rounded-lg border-none">
              <table className="w-full border-collapse">
                <thead className="bg-gray-200">
                  <tr className="text-xs uppercase tracking-wider text-gray-600">
                    <th className="text-left px-3 py-2 font-medium">Product</th>
                    <th className="text-center px-3 py-2 font-medium w-16">
                      Qty
                    </th>
                    <th className="text-center px-3 py-2 font-medium w-24">
                      Warranty
                    </th>
                    <th className="text-right px-3 py-2 font-medium w-24">
                      Price
                    </th>
                    <th className="text-right px-3 py-2 font-medium w-28">
                      Total
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="px-3 py-2 font-medium">
                      {data.product.name}
                    </td>
                    <td className="px-3 py-2 text-center">{data.quantity}</td>
                    <td className="px-3 py-2 text-center">
                      {months} {months > 1 ? "months" : "month"}
                    </td>
                    <td className="px-3 py-2 text-right">
                      {data.salePrice.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 text-right font-semibold">
                      {(data.quantity * data.salePrice).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* for multiple products, FIX LATER */}
            {/* {data.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-1 text-gray-800"
              >
                <span className="flex-1 truncate">{item.product.name}</span>
                <span className="w-12 text-center">{item.quantity}</span>
                <span className="w-20 text-right">
                  {item.price.toLocaleString()}
                </span>
                <span className="w-24 text-right font-medium">
                  {(item.quantity * item.price).toLocaleString()}
                </span>
              </div>
            ))} */}
          </div>

          {/* Buyback Details */}
          {data.buyback?.length > 0 && (
            <div className="mt-6 w-full text-sm">
              <p className="font-semibold mb-2">Buyback Batteries</p>
              <div className="overflow-hidden rounded-lg border-none">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-200">
                    <tr className="text-xs uppercase tracking-wider text-gray-600">
                      <th className="text-left px-3 py-2 font-medium">Size</th>
                      <th className="text-center px-2 py-1 font-medium w-16">
                        Qty
                      </th>
                      <th className="text-right px-2 py-1 font-medium w-24">
                        Price
                      </th>
                      <th className="text-right px-2 py-1 font-medium w-28">
                        Total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.buyback.map((bb, i) =>
                      bb.batteries.map((bat, j) => (
                        <tr
                          key={`${i}-${j}`}
                          className="bg-gray-50 hover:bg-gray-100"
                        >
                          <td className="px-2 py-1">{bat.batterySize}</td>
                          <td className="text-center px-2 py-2">
                            {bat.quantity}
                          </td>
                          <td className="text-right px-2 py-1">
                            {bat.buyPrice.toLocaleString()}
                          </td>
                          <td className="text-right px-2 py-1 font-medium">
                            {bat.total.toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Payment Details */}
          <div className="w-full mt-6 text-sm">
            <p className="font-semibold mb-2">Payment</p>
            <table className="table-auto ml-auto bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <tbody>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="font-medium text-left px-4 py-2">Method</td>
                  <td className="font-medium text-right px-4 py-2">
                    {data.paymentMethod}
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="font-medium text-left px-4 py-2">Status</td>
                  <td
                    className={`font-medium text-right px-4 py-2 ${
                      data.isPaid ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {data.isPaid
                      ? "PAID"
                      : data.duePayment === 0
                      ? "UNPAID"
                      : "PARTIAL"}
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="font-medium text-left px-4 py-2">Paid</td>
                  <td className="font-medium text-right px-4 py-2">
                    {data.rebuyOldBattery ? (
                      <>
                        {data.totalPrice.toLocaleString()} -{" "}
                        {data.oldBatteryPrice.toLocaleString()} ={" "}
                        <span className="text-green-600">
                          {data.paidAmount.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-green-600">
                        {data.paidAmount.toLocaleString()}
                      </span>
                    )}
                  </td>
                </tr>
                {!data.isPaid && (
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="font-medium text-left px-4 py-2">Due</td>
                    <td className="font-medium text-red-600 text-right px-4 py-2">
                      {data.duePayment.toLocaleString()}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="w-full mt-6 text-center text-gray-600 text-sm border-t pt-4">
            <p className="mb-2">Thank you for your purchase!</p>
            <p className="mb-2">
              All batteries come with warranty as per shop policy.
            </p>
            <p className="mb-4">
              Please keep this voucher for future reference.
            </p>

            <div className="flex justify-between mt-6 px-8">
              <div className="flex flex-col items-center">
                <p className="font-medium text-gray-700">Prepared By</p>
                <p className="mt-2">{data.createdBy?.name || "N/A"}</p>
                <div className="mt-2 border-t border-gray-400 w-32"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-medium text-gray-700">
                  Authorized Signature
                </p>
                <p className="mt-2">KYAW</p>
                <div className="mt-2 border-t border-gray-400 w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
