"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  LayoutDashboard,
  Package,
  Recycle,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Sale", href: "/dashboard/sale", icon: ShoppingCart },
  { name: "Product", href: "/dashboard/product", icon: Package },
  { name: "Second Hand", href: "/dashboard/secondProduct", icon: Package },
  { name: "BuyBack", href: "/dashboard/buyback", icon: Recycle },
  { name: "Customer", href: "/dashboard/customer", icon: Users2 },
  { name: "Supplier", href: "/dashboard/suppliers", icon: Truck },
];

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 flex flex-col shadow-xl">
      <div className="p-6 text-center border-b border-blue-500">
        <h1 className="text-2xl font-bold tracking-wide">Dashboard</h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive =
            pathname === href ||
            (href !== "/dashboard" && pathname.startsWith(href + "/"));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white text-blue-700 shadow-md"
                  : "hover:bg-blue-500/20"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-blue-700" : "text-white"
                }`}
              />
              <span
                className={`font-medium ${
                  isActive ? "text-blue-700" : "text-white"
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </nav>
      {/* user profile */}
      <div className="p-2">
        {(() => {
          const isProfileActive = pathname === "/dashboard/profile";
          const avatorImag = user?.image || "/images/default.webp";

          return (
            <div
              className={`flex items-center gap-4 p-3 cursor-pointer rounded-2xl transition-all duration-200 ${
                isProfileActive
                  ? "bg-white text-blue-700 shadow-md"
                  : "hover:bg-blue-500/20"
              }`}
              onClick={() => router.push("/dashboard/profile")}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={avatorImag}
                  alt="User avatar"
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority
                />
              </div>

              <div className="flex flex-col items-start gap-1 text-sm">
                <span
                  className={`font-medium ${
                    isProfileActive ? "text-blue-700" : "text-white"
                  }`}
                >
                  {user.name || "User Name"}
                </span>
                <span
                  className={`text-xs ${
                    isProfileActive ? "text-blue-600" : "text-blue-200"
                  }`}
                >
                  {user.role || "User"}
                </span>
              </div>
            </div>
          );
        })()}
      </div>

      <div className="p-4 text-center text-sm text-blue-200 border-t border-blue-500">
        v1.0.0
      </div>
    </aside>
  );
};

export default SideBar;
