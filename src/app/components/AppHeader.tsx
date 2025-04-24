import React from 'react';
function AppHeader() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow rounded">
      <button className="bg-black text-white px-4 py-1 rounded">Home</button>
      <button className="bg-black text-white px-4 py-1 rounded">Profile</button>
      <button className="bg-black text-white px-4 py-1 rounded">Invoices</button>
      <button className="bg-black text-white px-4 py-1 rounded">Settings</button>
      <div className="flex gap-4 items-center">
        <input type="month" className="border rounded px-2 py-1" />
      </div>
    </div>
  )
}

export default AppHeader;
