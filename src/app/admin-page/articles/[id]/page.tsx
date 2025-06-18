import React from "react";
import EditArtikelPage from "@/app/components/admin-components/EditArtikel";

export default function Artikel() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <EditArtikelPage
        params={{
          id: "",
        }}
      ></EditArtikelPage>
    </div>
  );
}
