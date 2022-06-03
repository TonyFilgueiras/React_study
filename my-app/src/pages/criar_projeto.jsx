import React, { useEffect, useState } from 'react'
import {FormButton} from '../components/Buttons'
import Select from '../components/Select'

export default function Create_project() {

  const [categories, setCategories] = useState([])


  async function consumingumabelarola() {
    await fetch('http://localhost:5000/categories')
      .then((r) => r.json())
      .then((data) => setCategories(data))
  }

  useEffect(() => {consumingumabelarola()}, [])
  return (
    <div className='body'>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços </p>
        <form action=''>
            <label htmlFor="project_name">Nome do Projeto: </label>
            <input type="text" name="project_name" placeholder="Escreva o nome do projeto"/>
            <label htmlFor="project_budget">Orçamento do Projeto: </label>
            <input type="number" name="project_budget" id='project_budget'/>
            <label htmlFor="project_category">Selecione a Categoria: </label>
            <Select name="project_category" options={categories}/>
            <FormButton id="formbutton" text="Criar projeto"/>
        </form>
    </div>
  )
}
