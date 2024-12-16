import './styles.css';
import { PostCard } from "../PostCard";
import PropTypes from 'prop-types';

export const Posts = ({ posts }) => {
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
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
};
