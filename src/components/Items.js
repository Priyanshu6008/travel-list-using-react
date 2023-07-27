export default function Items({ item, delItmes, checkItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          checkItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quant} {item.des}
      </span>
      <button onClick={() => delItmes(item.id)}>❌</button>
    </li>
  );
}
