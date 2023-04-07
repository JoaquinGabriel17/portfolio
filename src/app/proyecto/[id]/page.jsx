

export default async function Post ({params}) {
    const {id} = params
    return(
        <div>
           <h1>post numero : {id}</h1>
        </div>

    )
}