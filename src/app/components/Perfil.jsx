import styles from './perfil.module.css'


export function Perfil() {
    return (
        <div className={styles.contain} >
            <h1 className={styles.titulo} >Sobre mi</h1>
        <div className={styles.perfil} >
            <p style={{fontSize: "1.2rem"}} >
                Desde chico jugando videojuegos me familiarize con la tecnología, siguiendo por el mismo camino
                estudié 1 año de programación en la Universidad Nacional de Salta, para luego apostar por Henry,
                donde me gradué como Full Stack Developer y adquirí muchos conocimientos. Disfruto de programar
                al igual que de estudiar historia
            </p>
            
            {/* <div className={styles.educacion} >
                <h1 className={styles.title} >Educacion</h1>
                <h1>-Soy Henry</h1>
                <h2>Graduado como Full stack developer - 2022-2023</h2>
                <h3>Conocimientos en diversas tecnologias</h3>
                <h1  > -Universitario</h1>
                <h2>UNSA (Universidad Nacional de Salta) - 2022-2023</h2>
                <h3>   Tecnicatura Universitaria en Programacion - Incompleto/abandonado</h3>
                
            </div>
            <div className={styles.educacion} >
                <h1 className={styles.title} >Experiencia Laboral</h1>
                <h1>Buscando mi primer empleo</h1>
            </div>
            {/* <h1>perfil profesional</h1> */}
        {/* </div>
        <br></br>
        <h1 className={styles.titulo} >Habilidades</h1>
        <div className={styles.perfil} >
            <div className={styles.educacion} >
                <h1 className={styles.title} >IT</h1>
                <ul style={{"fontSize": "1.1rem", "textAlign": "start"}} >
                    <li>Javascript - Avanzado || Experiencia - 1 año</li>
                    <li>HTML - Avanzado || Experiencia - 1 año</li>
                    <li>CSS - Intermedio || Experiencia - 1 año</li>
                    <li>React js - Avanzado || Experiencia - 1 año</li>
                    <li>Node js - Avanzado || Experiencia - 1 año</li>
                </ul>
            </div>
            <div className={styles.educacion} >
                <h1 className={styles.title} >Destrezas</h1>
                <ul style={{"fontSize": "1.1rem"}} >
                    <li>Comunicacion</li>
                    <li>Responsabilidad</li>
                    <li>Trabajo en equipo</li>
                    <li>React js - Avanzado</li>
                    
                </ul>
            </div> */}
        </div>
        </div>
    )
}