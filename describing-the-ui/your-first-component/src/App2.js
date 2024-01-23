function Item({ name, isPacked }) {
  // return <li className="item">{isPacked ? <del>{name + "✔"}</del> : name}</li>;
  // return (
  //   <li className="item">
  //     {name}
  //     {isPacked && "✔"}
  //   </li>
  // );
  let itemContent = name;
  if (isPacked) {
    // itemContent = name + "✔";
    itemContent = <del>{name + "✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit"></Item>
        <Item isPacked={true} name="Helmet with a golden leaf"></Item>
        <Item isPacked={false} name="Photo of Tam"></Item>
      </ul>
    </section>
  );
}
