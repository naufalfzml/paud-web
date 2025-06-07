import React from 'react';
import EditPesertaDidikPage from '@/app/components/admin-components/EditPesertaDidik';

export default function PesertaDidik() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <EditPesertaDidikPage params={{
              id: ''
          }}></EditPesertaDidikPage>
    </div>
  );
}
