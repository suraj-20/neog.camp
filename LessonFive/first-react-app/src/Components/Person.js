import React from 'react'

function Person({persons}) {
  return (
    <div>
      <h2>
      {persons.spouseName} wife of {persons.name}{" "}
    </h2>
    </div>
  )
}

export default Person
