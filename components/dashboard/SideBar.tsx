"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  LayoutDashboard,
  Package,
  Recycle,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

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

      <div className="p-4 text-center text-sm text-blue-200 border-t border-blue-500">
        v1.0.0
      </div>
    </aside>
  );
};

export default SideBar;
