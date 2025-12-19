import React, { useRef } from "react";
import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import { toPng } from "html-to-image";
import { Sale } from "@/types/type";
import { BatteryCharging, Download } from "lucide-react";

interface Props {
  data: Sale;
}

const Voucher = ({ data }: Props) => {
  const voucherRef = useRef<HTMLDivElement>(null);

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

  const handleDownload = async () => {
    if (!voucherRef.current) return;

    console.log("Generating pdf....");

    try {
      // 3. Use toPng instead of html2canvas
      // pixelRatio: 2 ensures high quality (retina) output similar to scale: 2
      const imgData = await toPng(voucherRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`voucher_${data.carNumber}.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF", err);
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
          ref={voucherRef}
        >
          {/* header division */}
          <div className="mt-4 flex flex-col items-center gap-3 border-b border-blue-700 pb-4">
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
              <span className="text-gray-500">Date:</span>
              <span className="font-medium text-sky-600">
                {formatDate(data.saleDate.toString())}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-gray-500">Car No:</span>
              <span className="font-medium text-sky-600">{data.carNumber}</span>
            </div>
          </div>

          {/* Sale Details */}
          <div className="mt-4 text-sm min-w-[80%]">
            {/* Header */}
            <p className="font-medium text-gray-700 mb-1">Sale Products</p>
            <div className="flex justify-between text-gray-500 border-b pb-1">
              <span className="flex-1">Product</span>
              <span className="w-12 text-center">Qty</span>
              <span className="w-20 text-center">Warranty</span>
              <span className="w-20 text-right">Price</span>
              <span className="w-24 text-right font-medium">Total</span>
            </div>

            {/* Row */}
            <div className="flex justify-between py-1 text-gray-800">
              <span className="flex-1 truncate">{data.product.name}</span>
              <span className="w-12 text-center">{data.quantity}</span>
              <span className="w-20 text-center">
                {months} {months > 1 ? "months" : "month"}
              </span>
              <span className="w-20 text-right">
                {data.salePrice.toLocaleString()}
              </span>
              <span className="w-24 text-right font-medium">
                {(data.quantity * data.salePrice).toLocaleString()}
              </span>
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
            <div className="mt-4 text-sm min-w-[80%]">
              <p className="font-medium text-gray-700 mb-1">
                Buyback Batteries
              </p>

              {/* Header */}
              <div className="flex justify-between text-gray-500 border-b pb-1">
                <span className="flex-1">Size</span>
                <span className="w-12 text-center">Qty</span>
                <span className="w-20 text-right">Price</span>
                <span className="w-24 text-right font-medium">Total</span>
              </div>

              {/* Rows */}
              {data.buyback.map((bb, i) =>
                bb.batteries.map((bat, j) => (
                  <div
                    key={`${i}-${j}`}
                    className="flex justify-between py-1 text-gray-800"
                  >
                    <span className="flex-1">
                      {bat.batterySize}
                      {!bat.reused && (
                        <span className="ml-1 text-xs text-gray-400">
                          (scrap)
                        </span>
                      )}
                    </span>
                    <span className="w-12 text-center">{bat.quantity}</span>
                    <span className="w-20 text-right">
                      {bat.buyPrice.toLocaleString()}
                    </span>
                    <span className="w-24 text-right font-medium">
                      {bat.total.toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Payment Details */}
          <div className="min-w-[90%] mt-6 text-sm border-t pt-1 text-gray-700">
            <div className="flex justify-between">
              <span>Method</span>
              <span className="font-medium">{data.paymentMethod}</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span
                className={`font-medium ${
                  data.isPaid ? "text-green-600" : "text-red-600"
                }`}
              >
                {data.isPaid
                  ? "PAID"
                  : data.duePayment > 0
                  ? "UNPAID"
                  : "PARTIAL"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Paid</span>
              <span className="font-medium text-right">
                {data.rebuyOldBattery
                  ? `${data.totalPrice.toLocaleString()} - ${data.oldBatteryPrice.toLocaleString()} = ${data.paidAmount.toLocaleString()}`
                  : data.paidAmount.toLocaleString()}
              </span>
            </div>

            {!data.isPaid && (
              <div className="flex justify-between">
                <span>Due</span>
                <span className="font-medium text-red-600">
                  {data.duePayment.toLocaleString()}
                </span>
              </div>
            )}
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
