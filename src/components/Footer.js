import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 py-8 mt-8 border-t">
      &copy; {new Date().getFullYear()} Vetrivelan Karmegam. All rights reserved.
    </footer>
  );
}