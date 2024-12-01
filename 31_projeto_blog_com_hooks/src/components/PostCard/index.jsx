export const PostCard = ({ post }) => {
    return(
        <div className='post'>
            <img src={post.url} alt='Imagem sobre o post'></img>
            <div className='post-content'>
                <h1>{ post.title }</h1>
                <p>{ post.body }</p>
            </div>
        </div>
    )
}
