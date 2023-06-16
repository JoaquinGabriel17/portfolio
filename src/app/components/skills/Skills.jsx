import styles from './skills.module.css'


export function Skills(){

    const icons = ['CSS', 'Javascript', 'HTML','PostgreSQL','React.js','Next.js','Git','Node js','Typescript','Angular js'];
    let i = 0;
    
    // console.log(css.src)
    return(
        <div style={{paddingLeft: "100px", paddingRight: "200px"}} >
            <h1 className={styles.titulo} style={{marginLeft:"95px"}} >Habilidades</h1>
        <div className={styles.skill} >
        <h1 className={styles.titula} >Tech Skills</h1>
        {/* <h2>Estas son tecnologías con las que trabajé</h2> */}
            <div className={styles.tech} >
                
                {icons.map(icon => {
                    i++
                    let s = `icon${i}`
                    // console.log(s)
                    return(
                <div class={styles.card}>
                    <div class={styles.cardinfo}> 
                     <div className={styles[s]} ></div> 
                     <p class={styles.title}>{icon}</p> 
                     </div>
                </div>
                    )
                    
})}
            </div>
            {/* <h1 className={styles.titula} >Soft skills</h1>
            <div className={styles.soft} >
                <h2>Me destaco por las siguientes habilidades:</h2>
                <ul style={{fontSize: "1.5rem"}} >
                    <li>Negociación</li>
                    <li>Dedicación</li>
                    <li>Trabajo en Equipo</li>
                    <li>Creatividad</li>
                </ul>
            </div> */}
            
        </div>
        </div>
    )
}