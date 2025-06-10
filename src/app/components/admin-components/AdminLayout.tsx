"use client";

import { useState, ReactNode } from "react";
import Sidebar from "../admin-components/Sidebar";
import Breadcrumb from "../admin-components/Breadcrumb";
import { Menu } from "lucide-react";

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex font-fredoka">
      <Sidebar collapsed={sidebarCollapsed} />

      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="text-md text-gray-600">
              Selamat datang, Admin 
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* <Breadcrumb /> */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
