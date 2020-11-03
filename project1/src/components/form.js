import React, {useState} from 'react'

function Form() {
  const [value, setValue]=useState('')
  return (
    <form>
      <div className="form-group d-flex">
        <input
        className="form-control"
        type="text"
        placeholder="Введите название заметки"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
        <button className="btn btn-primary">Создать</button>
      </div>
    </form>
  )
}

export default Form;
