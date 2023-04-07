import styles from './post.module.css'
import Button from '../components/Button'
import Link from 'next/link'
const fetcho =  async() => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    throw new Error('holan')
    // return fetch('https://api.rawg.io/api/games?key=cf4d514e30734542999d085c6e846ee2')
    // .then(res => res.json())
}

export default async function Post(){
    let games = await fetcho()
    // games = games.results
    // console.log(games)
    return(
        <section className={styles.post} >
            {games ? games.slice(0,10).map(game => {
                return(
                <div key={game.id} >
                    <h1>juego:</h1>
                    <Link href='/page/[id]' as={`/post/${game.id}`} >
                    <h1>{game.name}</h1>
                    </Link>
               
               <img src={game.background_image} style={{"width": "20rem", "height": "20rem"}} ></img>
               <h1>{game.rating}</h1>
               <Button></Button>
               </div>
                )
            }) : 'nothing to see here...'}
        </section>
    )
}