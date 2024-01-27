export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("toolbar");
      }}
    >
      <button onClick={() => alert("1")}>1</button>
      <button onClick={() => alert("2")}>2</button>
    </div>
  );
}
