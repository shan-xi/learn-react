function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("toolbar");
      }}
    >
      <Button onClick={() => alert("1")}>1</Button>
      <Button onClick={() => alert("2")}>2</Button>
    </div>
  );
}
