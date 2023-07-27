import { useState } from "react";
export default function Form({ onAddItems }) {
  const [des, setDes] = useState("");
  const [quant, setquant] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!des) return;
    const newItem = { id: Date.now(), des, quant, packed: false };

    onAddItems(newItem);
    // console.log(newItem);

    setDes("");
    setquant(1);
  }

  // we are using onsubmit instead of onClick because onClick only works on the button where as onsubmit will also work when we click on the placeholder

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>

      <select value={quant} onChange={(e) => setquant(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />

      <button>ADD</button>
    </form>
  );
}
