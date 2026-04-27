function ItemList({ items, claimItem, markSold }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{item.title}</h3>
          <p>Status: {item.status.toUpperCase()}</p>

          {item.status === "available" && (
            <button onClick={() => claimItem(item.id)}>
              Claim Item
            </button>
          )}

          {item.status !== "sold" && (
            <button onClick={() => markSold(item.id)}>
              Mark as Sold
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemList;