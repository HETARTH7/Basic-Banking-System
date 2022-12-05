import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div style={{ bottom: 0, position: "fixed", marginLeft: "45rem" }}>
      &copy; {currentYear} Hetarth
    </div>
  );
};

export default Footer;
