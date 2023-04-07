import styles from '../post.module.css'
async function fetcho(id){
    return fetch(`https://api.rawg.io/api/games/${id}?key=cf4d514e30734542999d085c6e846ee2`)
    .then(res => res.json())
}

export default async function Chosen({params}){
    const {id} = params
    const game = await fetcho(id)
    console.log(game.name)
    

    return(
        <article className={styles.post} >
            <h1>{game.name}</h1>
            <img src={game.background_image} style={{"width": "70rem"}} ></img>
            <img src={game.background_image_additional} style={{"width": "70rem"}} ></img>
            <p>{game.description}</p>
            
        </article>
    )
}