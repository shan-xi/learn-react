export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("aaa");
      }}
    >
      <input></input>
      <button>Send</button>
    </form>
  );
}
