import React, { useEffect, useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const color = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const html = window.document.documentElement;
    html.classList.remove(color);
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
  });

  return [color, setTheme];
};

export default Theme;
