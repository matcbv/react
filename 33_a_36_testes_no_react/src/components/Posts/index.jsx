import './styles.css';
import { PostCard } from "../PostCard";

export const Posts = ({ posts = [] }) => {
    return (
        <div className="posts">
            {
              posts.map(post =>
                // Espalhando as propriedades de post como props individuais:
                <PostCard {...post} key={ post.title }/>
              )
            }
          </div>
    );
}
