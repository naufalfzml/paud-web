import React from 'react';
import EditTenagaPendidikPage from '@/app/components/admin-components/EditTenagaPendidik';

export default function PesertaDidik() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <EditTenagaPendidikPage params={{
              id: ''
          }}></EditTenagaPendidikPage>
    </div>
  );
}
