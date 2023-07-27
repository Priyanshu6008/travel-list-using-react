import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((e) => [...e, item]);
  }

  function deleteItems(id) {
    setItems((items) => items.filter((e) => e.id !== id));
  }

  function checkItem(id) {
    setItems((items) =>
      items.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }

  function clearList(){
    const confirmed = window.confirm('Are you sure you want to delete the items ?')
    if(confirmed)setItems([]);
  }

  return (
    <div className="App">
      <Logo/>
      <Form onAddItems={handleAddItems} />
      <PackingList item={items} delItmes={deleteItems} checkItem={checkItem} clearList=
      {clearList} />
      <Stats item={items} />
    </div>
  );
}

export default App;
