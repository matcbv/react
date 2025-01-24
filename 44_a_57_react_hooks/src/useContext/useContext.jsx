import '../styles.css';
import { AppProvider } from './contexts/AppContext';
import { Div } from './components/Div';

function App(){
    return (
        <AppProvider>
            <Div />
        </AppProvider>
    );
};

export default App;
