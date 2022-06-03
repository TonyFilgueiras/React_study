import React from 'react'
import {FormButton} from '../components/Buttons'

export default function Create_project() {

  function paupaupau(){
    console.log("rolarolaorola")
  }
  

  return (
    <div className='body'>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços </p>
        <form action={paupaupau}>
            <label htmlFor="project_name">Nome do Projeto: </label>
            <input type="text" name="project_name" placeholder="Escreva o nome do projeto"/>
            <label htmlFor="project_budget">Orçamento do Projeto: </label>
            <input type="number" name="project_budget" id='project_budget'/>
            <label htmlFor="project_category">Selecione a Categoria: </label>
            <select name="project_category">
                <option value="default" selected disabled hidden>Selecione uma opção</option>
                <option value="Infra">Infra</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Design">Design</option>
                <option value="Planejamento">Planejamento</option>
            </select>
            <FormButton id="formbutton" text="Criar projeto"/>
        </form>
    </div>
  )
}
