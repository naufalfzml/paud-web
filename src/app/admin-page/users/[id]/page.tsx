import React from 'react';
import EditUserPage from '@/app/components/admin-components/EditUsers';

export default function Users() {
  return (
    <div className="min-h-screen flex flex-col font-fredoka bg-cover bg-no-repeat">
      <EditUserPage params={{
              id: ''
          }}></EditUserPage>
    </div>
  );
}
