"use client";

import Breadcrumb from "@/components/breadcrumb/BreadCrumb";
import { GetSecondBatteryInfo } from "@/libs/api";
import { batterySizes, SecondBatteryInfoItem } from "@/types/type";
import { Battery, BatteryMedium } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AnimatedNumber = ({
  value,
  duration = 500,
}: {
  value: number;
  duration?: number;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      const current = Math.round(startValue + (value - startValue) * progress);
      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <>{String(display).padStart(2, "0")}</>;
};

const SEGMENTS: Record<string, boolean[]> = {
  "0": [true, true, true, true, true, true, false],
  "1": [false, true, true, false, false, false, false],
  "2": [true, true, false, true, true, false, true],
  "3": [true, true, true, true, false, false, true],
  "4": [false, true, true, false, false, true, true],
  "5": [true, false, true, true, false, true, true],
  "6": [true, false, true, true, true, true, true],
  "7": [true, true, true, false, false, false, false],
  "8": [true, true, true, true, true, true, true],
  "9": [true, true, true, true, false, true, true],
};

const Segment = ({ on, className }: { on: boolean; className: string }) => (
  <div
    className={`
      absolute rounded
      transition-all duration-200
      ${on ? "bg-cyan-400 shadow-[0_0_12px_#22d3ee]" : "bg-cyan-900 opacity-20"}
      ${className}
    `}
  />
);

const SevenSegmentDigit = ({ digit }: { digit: string }) => {
  const s = SEGMENTS[digit] || SEGMENTS["0"];

  return (
    <div className="relative w-12 h-20 mx-1">
      {/* A */}
      <Segment on={s[0]} className="top-0 left-2 w-8 h-2" />

      {/* B */}
      <Segment on={s[1]} className="top-2 right-0 w-2 h-7" />

      {/* C */}
      <Segment on={s[2]} className="bottom-2 right-0 w-2 h-7" />

      {/* D */}
      <Segment on={s[3]} className="bottom-0 left-2 w-8 h-2" />

      {/* E */}
      <Segment on={s[4]} className="bottom-2 left-0 w-2 h-7" />

      {/* F */}
      <Segment on={s[5]} className="top-2 left-0 w-2 h-7" />

      {/* G */}
      <Segment on={s[6]} className="top-1/2 left-2 w-8 h-2 -translate-y-1" />
    </div>
  );
};

const useAnimatedCounter = (target: number, interval = 30) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev === target) {
          clearInterval(timer);
          return prev;
        }
        return prev < target ? prev + 1 : prev - 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);

  return value;
};

const SevenSegmentDisplay = ({ value }: { value: number }) => {
  const animatedValue = useAnimatedCounter(value, 200);

  const digits = String(animatedValue).padStart(3, "0").split("");

  return (
    <div className="flex bg-[#021b1f] px-6 py-4 rounded-xl border border-cyan-900">
      {digits.map((d, i) => (
        <SevenSegmentDigit key={i} digit={d} />
      ))}
    </div>
  );
};

const SecondBatteryInfo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<SecondBatteryInfoItem[]>([]);

  const token = localStorage.getItem("token") || "";

  const fetchSecondBatteryData = async () => {
    setIsLoading(true);
    try {
      const res = await GetSecondBatteryInfo(token);
      console.log("Second Battery Info:", res);
      if (res.con) {
        setInfo(res.result.byCapacity || []);
      } else {
        toast.error(res.message || "Failed to fetch second battery info");
      }
      setIsLoading(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to fetch second battery info. Please try again.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const countBySize = info.reduce<Record<string, number>>((acc, item) => {
    if (item._id) {
      acc[item._id] = item.quantity ?? 0;
    }
    return acc;
  }, {});

  const totalQuantity = info.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  useEffect(() => {
    fetchSecondBatteryData();
  }, []);

  return (
    <div className="p-4">
      {/* upper division */}
      <div className="mt-2">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BatteryMedium className="w-8 h-8 text-blue-600" />
            Second-Battery
          </h1>
        </div>
      </div>
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Second-Battery" },
        ]}
      />
      {/* digital display of total second batteries */}
      <div className="mt-4 flex justify-center">
        <div className="bg-[#021b1f] rounded-2xl px-8 py-6 shadow-lg">
          <p className="text-xs text-cyan-300 tracking-widest mb-3 text-center">
            TOTAL SECOND BATTERIES
          </p>
          <SevenSegmentDisplay value={totalQuantity} />
          <p className="mt-2 text-xs text-cyan-500 text-center">PCS</p>
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {batterySizes.map((size) => {
          const count = countBySize[size] ?? 0;

          return (
            <div
              key={size}
              className="
          group relative overflow-hidden
          bg-white rounded-2xl border border-gray-200 p-4
          flex flex-col items-center justify-center
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:scale-[1.03]
          hover:shadow-xl hover:border-blue-500
        "
            >
              <div
                className="
            mb-3 p-3 rounded-full bg-blue-50
            transition-transform duration-300
            group-hover:rotate-6 group-hover:scale-110
          "
              >
                <Battery className="w-6 h-6 text-blue-600" />
              </div>

              <p className="text-lg font-semibold text-gray-800">{size}</p>

              <span
                className={`mt-1 text-lg font-semibold ${
                  count > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                <AnimatedNumber value={count} />{" "}
                <span className="text-sm">in stock</span>
              </span>

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-400/40 transition" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondBatteryInfo;
