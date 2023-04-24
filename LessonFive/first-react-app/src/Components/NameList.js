import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Rama",
      spouseName: "Mata Sita",
    },
    {
      id: 2,
      name: "Krishna",
      spouseName: "Radha Rani",
    },
    {
      id: 3,
      name: "Lakshmana",
      spouseName: "Mata Urmila",
    },
  ];

  const personList = persons.map((persons) => (
    <Person key={persons.id} persons={persons} />
  ));

  return <div>{personList}</div>;

  //   const names = ["Rama", "Krishna", "Radha", "Lakshmana"];
  //   return (
  //     <div>
  //       {names.map((name) => (
  //         <h2>{name}</h2>
  //       ))}
  //     </div>
  //   );
}

export default NameList;
