import React from "react";

const Footer = ({ items }) => {
  let completedItems = items.filter((items) => items.isChecked).length;
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        You have {items.length} item in your list, and you already completed{" "}
        {completedItems}
      </p>

      <strong style={{ textAlign: "center", display: "block" }}>
        Your Progression Chart is{" "}
        {Math.round((completedItems / items.length) * 100)
          ? Math.round((completedItems / items.length) * 100)
          : 0}
        %
      </strong>
    </div>
  );
};

export default Footer;
