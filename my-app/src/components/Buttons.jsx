import React from 'react'
import { useNavigate } from 'react-router'

export function NavigatingButton(props) {
    let navigate = useNavigate()
  return (
    <button id={props.id} className="button" onClick={() => navigate(props.destiny)}>{props.text}</button>
  )
}

export function FormButton(props) {
  return (
    <input type="submit" id={props.id} className="button" onClick={props.action} value={props.text}/>
  )
}
