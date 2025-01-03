import './styles.css';
import { PostProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider'
import { Posts } from '../../components/Posts';

function App() {
  return (
    <CounterProvider>
      <PostProvider>
        <div className='App'>
          <h1>Posts</h1>
          <Posts />
        </div>
      </PostProvider>
    </CounterProvider>
  );
}

export default App;
