import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <p className="mb-0">© {new Date().getFullYear()} LuxeLink. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
