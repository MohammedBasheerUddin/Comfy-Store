import { useState } from "react";

function FormRange({ label, name, size, price }) {
  const step = 10;
  const maxPrice = 10000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text capitalize">${selectedPrice}.00</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-medium text-md">Min: ${0}</span>
        <span className="font-medium text-md">Max: ${maxPrice}</span>
      </div>
    </div>
  );
}

export default FormRange;
