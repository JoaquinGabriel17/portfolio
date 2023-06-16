'use client'
import style from './button.module.css'

export default function Button({ text }){
    const { boton } = style
    return(
        <button  className={boton} ><span>{text}</span></button>
    )
}