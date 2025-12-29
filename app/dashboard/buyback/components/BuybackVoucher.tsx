import { BuyBack } from "@/types/type";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { BatteryCharging, Download } from "lucide-react";
import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

interface Props {
  data: BuyBack;
}

const BuybackVoucher = ({ data }: Props) => {
  const printRef = useRef<HTMLDivElement>(null);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const totalAmount = data.batteries.reduce((sum, b) => sum + b.total, 0);

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
      pdf.save(`${data.buybackNumber}.pdf`);
    } finally {
      content.className = originalClass;
    }
  };

  return (
    <div className="w-full min-h-screen p-4">
      <div className="bg-gray-100 h-full rounded-lg shadow-md p-4 relative">
        {/* download btn */}
        <button
          title="Download Voucher"
          className="absolute top-4 right-4 p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
          onClick={handleDownload}
        >
          <Download className="w-5 h-5" />
        </button>
        <div
          className="w-[70%] mx-auto h-full flex flex-col items-center bg-white rounded-lg shadow-md p-6"
          ref={printRef}
        >
          {/* header */}
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

          {/* date and invoice no */}
          <div className="w-full mt-3 flex justify-evenly text-sm text-gray-700">
            {/* Invoice (only if sale exists) */}
            {data.sale?.invoiceNumber && (
              <div className="flex items-center gap-1">
                <span className="text-gray-500">Invoice:</span>
                <span className="font-medium text-gray-600">
                  {data.sale.invoiceNumber}
                </span>
              </div>
            )}

            <div className="flex items-center gap-1">
              <span className="text-gray-500">BuyBack No:</span>
              <span className="font-medium text-gray-600">
                {data.buybackNumber}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-gray-500">Date:</span>
              <span className="font-medium text-gray-600">
                {formatDate(data.buyDate.toString())}
              </span>
            </div>
          </div>

          {/* details */}
          <div className="mt-6 w-full text-sm">
            <p className="font-semibold mb-2">BuyBack Battery</p>
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
                  {data.batteries.map((bb, i) => (
                    <tr key={i} className="bg-gray-50 hover:bg-gray-100">
                      <td className="px-3 py-2">{bb.batterySize}</td>
                      <td className="text-center px-2 py-2">{bb.quantity}</td>
                      <td className="text-right px-2 py-1">
                        {bb.buyPrice.toLocaleString()}
                      </td>
                      <td className="text-right px-2 py-1 font-medium">
                        {bb.total.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* payment */}
          <div className="w-full mt-6 text-sm">
            <p className="font-semibold mb-2">Payment</p>
            <div className="flex justify-end">
              <div className="flex items-center justify-between gap-8 p-4 bg-green-100 rounded-lg shadow-md">
                <p className="font-medium text-left px-4">Total</p>
                <p className="font-medium text-right px-4 text-green-500">
                  {totalAmount.toLocaleString()} Ks
                </p>
              </div>
            </div>
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

            {/* QR verification */}
            <div className="mt-6 flex justify-center">
              <div className="flex flex-col items-center gap-2 border border-dashed border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                <QRCodeSVG
                  value={`http://192.168.100.8:5000/api/v1/buy-back/verify/${data._id}`}
                  size={100}
                  level="H"
                />
                <p className="text-xs text-gray-500">Scan to verify</p>
              </div>
            </div>

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

export default BuybackVoucher;
