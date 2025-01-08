export default function Post({posts, handleClick}){
    return posts.map(post => {
        return (
            <div key={post.id} onClick={() => handleClick(post.id)}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        );
    });
};
