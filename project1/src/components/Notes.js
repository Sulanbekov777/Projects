import React from 'react'

function Notes() {
  const data =[
    {title: 'first task', id:0, status: false},
    {title: 'second task', id:1, status: false}
  ]
  return (
    <div>
      {data.map(note =>(
        <li className="list-group-item d-flex justify-content-between">
          <p>{note.id + 1}{note.title}</p>
          <button className="btn btn-danger btn-cm">&times;</button>
        </li>
      ))}
    </div>
  )
}

export default Notes
