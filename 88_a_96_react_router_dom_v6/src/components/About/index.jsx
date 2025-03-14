import { useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
    const location = useLocation();
    console.log(location)

    return (
        <div>
            <h1>About</h1>
            if(location){
                <p>{location.state}</p>
            }
        </div>
    );
};
