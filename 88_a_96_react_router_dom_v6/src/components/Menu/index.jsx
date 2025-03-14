import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

export const Menu = () => {
    const [index, setIndex] = useState('');

    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to={`/posts/${index}`}>Post</Link>
                    <input type="number" onChange={value => setIndex(value.target.value)} />
                </li>
                <li>
                    <Link to='/redirect'>Redirect</Link>
                </li>
            </ul>
        </nav>
    );
};
