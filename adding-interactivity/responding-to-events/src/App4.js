function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert("A")}>A</Button>
      <Button onSmash={() => alert("B")}>B</Button>
    </div>
  );
}
