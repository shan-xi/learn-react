import { people } from "./data";
import { getImageUrl } from "./utils";
import { Fragment } from "react";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  //   const listItems = chemists.map((person) => (
  //     <li key={person.id}>
  //       <img src={getImageUrl(person)} alt={person.name} />
  //       <p>
  //         <b>{person.name}:</b>
  //         {" " + person.profession + " "}
  //         known for {person.accomplishment}
  //       </p>
  //     </li>
  //   ));
  const listItems = people.map((person) => (
    <Fragment key={person.id}>
      <h1>{person.name}</h1>
      <p>{person.profession}</p>
    </Fragment>
  ));
  return <ul>{listItems}</ul>;
}
