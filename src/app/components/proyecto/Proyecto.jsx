'use client'
import styles from './proyecto.module.css'
import { useState } from 'react'
import pi from '../img/proyecto individual.png'
import rym from '../img/rick and morty.png'
import Link from 'next/link'
import pf from '../img/pf.png'
import Button from '../button/Button'

export function Proyecto(){
    const [mostrar, setMostrar] = useState(false)
    const [ mostrar1, setMostrar1 ] = useState(false)
    const [ mostrar2, setMostrar2 ] = useState(false)

    function show(e){
        if(e.target.value === 'rym') setMostrar(!mostrar)
        if(e.target.value === 'pi') setMostrar1(!mostrar1)
        if(e.target.value === 'pf') setMostrar2(!mostrar2)
    }
    return(
        <div  className={styles.contain}>
            {/* <Button text="hola" ></Button> */}
            <h1 style={{margin: "0px"}} >Proyectos</h1>
        <div className={styles.proyecto} >

        {/* <div className={styles.single} >
            
            </div> */}
            <div className={styles.card}>
    
        <div className={styles.card2}  >
        <h2 style={{textDecoration: "underline"}} >Rosa del viento</h2>
            <div className={styles.pf} ></div>
            {/* <Link  className={styles.link} >Visitá esta página</Link> */}
            <div className={styles.buttoncontain} >
                <a href='https://p-fhenry-front.vercel.app/' >
                    <button className={styles.cardbutton} >
                        <span>Demostracion</span>
                    </button>
                </a>
                <a href='https://github.com/Rytahsy2378723/PFhenryBack' >
                    <button className={styles.cardbutton} >
                        <span>Repositorio</span>
                    </button>
                </a>
            </div>
            {/* <h2>Descripción</h2> */}
            {/* <div style={{padding: "10px"}} > */}

            {/* <p style={{fontSize: "1rem"}} >Aplicación sobre un Restaurante en el cual se pueden pedir comidas
                tipicas de Argentina, España y México solo si estas registrado, a demas cuenta
                con filtros combinados para facilitar la busqueda del usuario, pasarela de pagos y
                un sistema de reservas con diseño 3D!
            </p> */}
            {/* <button className={styles.boton} onClick={show} value='pf' >Funciones</button> */}
            {/* { mostrar2 ? 
            <ul className={styles.lista} >
                <li>Pasarela de pago (mercadopago)</li>
                <li>Filtros y Ordenamiento alfabetico</li>
                <li>Sistema de usuarios</li>
                <li>Logeo con Github</li>
                <li>Reservas con animacion 3D</li>
                <li>Dashboard para administradores</li>
            </ul> : ''} */}
            
            {/* </div> */}
        </div>
</div>

             {/* <div className={styles.single}  >
                   
            </div>  */}
            <div className={styles.card}>
        <div className={styles.card2}>
        <h2 style={{textDecoration: "underline"}} >Proyecto Individual (Henry)</h2>
        <div className={styles.rym} ></div>
        <div className={styles.buttoncontain} >
                <a >
                    <button className={styles.cardbutton7} >
                        <span>Demostracion</span>
                    </button>
                </a>
                <a href='https://github.com/JoaquinGabriel17/PI-Food-main' >
                    <button className={styles.cardbutton} >
                        <span>Repositorio</span>
                    </button>
                </a>
            </div>
            {/* <h2>Descripcion</h2>
            <p style={{fontSize: "1rem"}} >Aplicacion de recetas que hace peticiones a una API con mas de 15000 recetas
                , a demas de contar con recetas en una base de datos en donde se pueden almacenar
                recetas creadas.
            </p>
            <button className={styles.boton} onClick={show} value='pi' >Funciones</button>
            { mostrar1 ? 
            <ul className={styles.lista} >
                <li>Busqueda por nombre y por ID</li>
                <li>Filtros</li>
                <li>Ordenamiento alfabetico</li>
                <li>Formulario controlado para crear recetas</li>
            </ul>
: ''}  */}
        </div>
    </div>
</div>
        </div>

    )
}