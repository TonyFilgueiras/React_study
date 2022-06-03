import React from 'react'

export default function Select(name, options) {
  if(!options){
    console.log("Loading")
    return
  }
  return (
    <select name={name}>
        <option>Selecione uma opção</option>
        {console.log(options)}
        {/* {options.map((option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
        ))} */}
    </select>
  )
}


/* <select name="project_category">
                <option value="default" selected disabled hidden>Selecione uma opção</option>
                <option value="Infra">Infra</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Design">Design</option>
                <option value="Planejamento">Planejamento</option>
</select> */