import Link from "next/link";
import Post from "./page";


export default function Postlayout1({children}){
    return(
        <div style={{textAlign: "center" }} >
            <marquee style={{color: "red", backgroundColor: "blue", fontSize: "2rem"}} >LOS LOBOS ESTAN HAMBRIENTOS</marquee>
            <Link  href='/post/rickandmorty'>ricardo</Link>
            
            {children}
        </div>
    )
}