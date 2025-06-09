"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  const breadcrumbMap: { [key: string]: string } = {
    users: "Manajemen User",
    articles: "Manajemen Artikel",
    students: "Peserta Didik",
    teachers: "Tenaga Pendidik",
    status: "Status",
    laporan: "Laporan"
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link
        href="/admin-page"
        className="flex items-center hover:text-primary-600 transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Dashboard
      </Link>

      {pathnames
        .map((segment, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          const displayName = breadcrumbMap[segment] || segment;

          if(segment === 'admin-page') return null;

          return (
            <div key={segment} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-gray-800 font-medium">{displayName}</span>
              ) : (
                <Link
                  href={routeTo}
                  className="hover:text-primary-600 transition-colors"
                >
                  {displayName}
                </Link>
              )}
            </div>
          );
        })}
    </nav>
  );
};

export default Breadcrumb;
