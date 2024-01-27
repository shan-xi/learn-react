function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
export default function Toolbar() {
  return (
    <div>
      <AlertButton message="A">A</AlertButton>

      <AlertButton message="B">B</AlertButton>
    </div>
  );
}
