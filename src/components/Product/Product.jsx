import React from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.css'

export default function Product({id, title, price}) {
    const dispatch = useDispatch();
  return (
    <div className={s.container}>
        <p>Title: {title}</p>
        <p>Price: {price} $</p>
        <button onClick={()=> dispatch({type: "DELETE", payload: id})}>Delete</button>
    </div>
  )
}
