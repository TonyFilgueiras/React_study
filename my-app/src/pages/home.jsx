import React from 'react'
import {NavigatingButton} from '../components/Buttons'
import Piggy from "../img/piggy.webp"

export default function Home() {
    return (
      <div className='body'>
        <h1>Bem vindo ao <strong>Costs</strong></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <img src={Piggy} alt="Piggy" id='piggy'/>
        <NavigatingButton destiny={"/criar_projeto"} text= "Criar projeto"/>
      </div>
    )
}