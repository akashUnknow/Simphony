import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 text-center py-4 border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
