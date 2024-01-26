export default function Button() {
  function handleClick() {
    alert("HI");
  }
  //   return <button onClick={handleClick}>Click me</button>;
  return <button onClick={() => alert("spin")}>click me</button>;
}
