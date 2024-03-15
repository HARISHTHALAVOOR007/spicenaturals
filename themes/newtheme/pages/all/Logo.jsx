import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img height="200" width="200" src="/logo.png" alt="logo" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
