import './styles.css';
import { PostProvider } from "../contexts/PostsProvider";
import { Posts } from '../../components/Posts';

function App() {
  return (
    <PostProvider>
      <div className='App'>
          <Posts />
      </div>
    </PostProvider>
  );
}

export default App;
