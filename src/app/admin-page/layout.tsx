"use client"

import AdminLayout from '@/app/components/admin-components/AdminLayout';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
