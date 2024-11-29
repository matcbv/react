/*
    Ao trabalharmos com componentes react de forma modulas, devemos exportá-lo para tornar disponível sua utilização.

    Nossa função irá receber um props, um objeto react contendo todos os valores passados em nosso código JSX de App.js. Desse objeto, iremos obter a propriedade post através de destructuring, na qual estão contidas as demais propriedades de nosso post.
*/
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
