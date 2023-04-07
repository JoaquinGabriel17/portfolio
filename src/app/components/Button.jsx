'use client'
import { useState } from "react"

export default function Button(){
    const [like, setLike] = useState(false)
    return(
        <button onClick={() => setLike(!like)} >{like ? 'no like' : "like"}</button>
    )
}