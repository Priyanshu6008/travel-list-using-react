export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 💼.</em>
      </p>
    );

  const numItems = item.length;
  const itemsPacked = item.filter((e) => e.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything.Ready to go ✈️"
          : `You have ${numItems} items in your list, and you have already packed
        ${itemsPacked} (${numItems === 0 ? "0" : percentage}%).`}
      </em>
    </footer>
  );
}
