'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  GraduationCap,
  UserCheck,
  BarChart3,
  FileChartColumn
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    { path: "/admin-page/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin-page/users", icon: Users, label: "Manajemen User" },
    { path: "/admin-page/articles", icon: FileText, label: "Manajemen Artikel" },
    { path: "/admin-page/students", icon: GraduationCap, label: "Peserta Didik" },
    { path: "/admin-page/teachers", icon: UserCheck, label: "Tenaga Pendidik" },
    { path: "/admin-page/status", icon: FileChartColumn, label: "Status" },
    { path: "/admin-page/laporan", icon: BarChart3, label: "Laporan" },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-50 ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AP</span>
          </div>
          {!collapsed && (
            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          )}
        </div>
      </div>

      <nav className="px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-all duration-200 group ${
                isActive
                  ? 'bg-gray-300 text-gray-800 border-l-4 border-primary-500'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <Icon className={`w-5 h-5 ${collapsed ? 'mx-auto' : 'mr-3'} ${
                isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'
              }`} />
              {!collapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
