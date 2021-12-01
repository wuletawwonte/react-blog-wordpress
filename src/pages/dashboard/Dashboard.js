import './dashboard.css';
import {useContext} from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router';

export default function Dashboard() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div>
            <h2>Dashboard Page</h2>
            <pre>Welcome {user.name}!</pre>
            <button onClick={() => {
                setUser({isLoggedIn: false, name: null});
                navigate("/login");
            }}>Logout</button>            
        </div>
    )
}
