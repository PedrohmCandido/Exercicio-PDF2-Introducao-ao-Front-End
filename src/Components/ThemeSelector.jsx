import { useState, useEffect } from "react";

const colors = [
  { name: "Bisque", value: "bisque" },
  { name: "Burlywood", value: "burlywood" },
  { name: "Moccasin", value: "moccasin" },
];

export default function ThemeSelector() {
  const [selectedColor, setSelectedColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);

  return (
    <div>
      <h2>Escolha a Cor</h2>
      <div>
        {colors.map((color) => (
          <label key={color.value}>
            <input
              type="radio"
              name="themeColor"
              value={color.value}
              checked={selectedColor === color.value}
              onChange={() => setSelectedColor(color.value)}
              className="hidden"
            />
            <span>{color.name}</span>
            <div
              className={`${
                selectedColor === color.value
                  ? "border-black"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color.value }}
            ></div>
          </label>
        ))}
      </div>
    </div>
  );
}
