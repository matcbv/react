export const PostCard = ({url, title, body}) => {
    return(
        <div className='post'>
            <img src={ url } alt={ title }></img>
            <div className='post-content'>
                <h1>{ title }</h1>
                <p>{ body }</p>
            </div>
        </div>
    )
}
