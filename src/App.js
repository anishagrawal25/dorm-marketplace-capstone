import { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  // ➕ Add Item
  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  // ⚡ Claim Item (handles concurrency)
  const claimItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (item.status !== "available") {
            alert("Item not availale");
            return item;
          }

          return {
            ...item,
            status: "claimed",
            claimedBy: "user1",
            claimExpiresAt: Date.now() + 60000 // 1 min
          };
        }
        return item;
      })
    );
  };

  // 🏃 Mark as Sold
  const markSold = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: "sold" } : item
      )
    );
  };

  // 👻 Expiration Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => {
          if (
            item.status === "claimed" &&
            Date.now() > item.claimExpiresAt
          ) {
            return {
              ...item,
              status: "available",
              claimedBy: null,
              claimExpiresAt: null
            };
          }
          return item;
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dorm Marketplace</h1>

      <AddItem addItem={addItem} />

      <ItemList
        items={items}
        claimItem={claimItem}
        markSold={markSold}
      />
    </div>
  );
}

export default App;