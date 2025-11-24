import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex items-center text-gray-600 text-sm mt-4 mb-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-gray-900 font-semibold" : ""}>
                {item.label}
              </span>
            )}

            {!isLast && <ChevronRight className="mx-2 w-4 h-4 text-gray-500" />}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
