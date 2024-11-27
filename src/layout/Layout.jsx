// Layout.js
import React from "react";

export  const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow"></header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};
