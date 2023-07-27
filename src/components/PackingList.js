import { useState } from "react";
import Items from "./Items";


export default function PackingList({ item, delItmes, checkItem, clearList }) {
  const [sortBy, setSort] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description") {
    sortedItems = item.slice().sort((a, b) => a.des.localeCompare(b.des));
  }
  if (sortBy === "packed") {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <Items
            item={items}
            delItmes={delItmes}
            checkItem={checkItem}
            key={items.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
