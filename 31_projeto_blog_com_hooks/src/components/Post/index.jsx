import './styles.css';
import { PostCard } from "../PostCard";

export const Post = ({ posts }) => {
    return (
        <div className="posts">
            {
              posts.map(post => 
               <PostCard post={post} key={ post.title }/>
              )
            }
          </div>
    );
}
