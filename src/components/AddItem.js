import { useState } from "react";

function AddItem({ addItem }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    addItem({
      id: Date.now(),
      title,
      status: "available",
      claimedBy: null,
      claimExpiresAt: null
    });

    setTitle("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd}>List Item</button>
    </div>
  );
}

export default AddItem;