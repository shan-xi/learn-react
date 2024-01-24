import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

let chemists = [];
let others = [];
people.forEach((person) => {
  if (person.profession === "chemist") {
    chemists.push(person);
  } else {
    others.push(person);
  }
});

function ListSection({ title, people }) {
  const items = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <h2>{title}</h2>
      <ul>{items}</ul>
    </>
  );
}

export default function List() {
  //   const chemists = people.filter((person) => person.profession === "chemist");
  //   const others = people.filter((person) => person.profession !== "chemist");
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists}></ListSection>
      <ListSection title="Everyone Else" people={others}></ListSection>
    </article>
  );
}
