"use client";

import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ComponentType } from "react";

export default function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  const ProtectedComponent = (props: P) => {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!authLoading && !user) {
        router.replace("/auth/login");
      }
    }, [authLoading, user, router]);

    if (authLoading || !user) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600">Memuat halaman...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
}
