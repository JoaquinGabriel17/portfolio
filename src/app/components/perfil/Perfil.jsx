import styles from './perfil.module.css'


export function Perfil() {

    return (
        <div className={styles.contain} >
            <h1 className={styles.tita} >Sobre mi</h1>
        <div className={styles.perfil} >
            <p style={{fontSize: "1.2rem"}} >
                Mi nombre es Joaquín Ocampo, tengo 20 años de edad, siempre me intereso la tecnología por lo que en 2022 empecé a cursar
                Programación en la Universidad Nacional de Salta. En diciembre de ese año decidí cursar la carrera de full stack developer 
                el Henry bootcamp, obtuve conocimientos en las tecnologías mas usadas del mercado superando desafíos cada vez mas complejos,
                la comunidad de Henry me ayudo mucho, no solo a superar los desafíos, también a expandir mi red de contactos en una creciente
                comunidad.
                <br></br>
                <br></br>
                En el bootcamp realizé diferentes proyectos entre los cuales se destacan un e-commerce para un restaurante y una aplicación
                de recetas, en Abril de 2023 me gradué como full stack developer.
                <br></br>
                <br></br>
                Siempre me matengo actualizado con las tecnologías que requieren mi trabajo y mis proyectos, expandir mis conocimientos es 
                esencial para el crecimiento y aumento de valor de mi perfil profesional, uno de mis mayores impulsos y motivaciones es
                mi pasion por la tecnología y la programación, que me han acompañado a lo largo de mi vida y no han perdido ni un poco de fuerza.
                <br></br>
                <br></br>
                Soy alguien constante y responsable con mis proyectos y trabajo, a la hora de haber problemas, destaco por mi claridad y 
                capacidad para resolver problemas, modularizandolos para asi simplificar y agilizar la resolución de los mismos. 
                Tengo mas de 3 años de experiencia trabajando en equipo por lo que he desarrollado liderazgo, inclusión y comunicación para generar un buen
                ambiente de trabajo.
                <br></br>
                
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