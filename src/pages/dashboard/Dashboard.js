import './dashboard.css';
import {useContext} from 'react';
import UserContext from '../../context/userContext';

export default function Dashboard() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h2>Dashboard Page</h2>
            <pre>{user ? user.name: <button onClick={() => {
                setUser({name: "Wuletaw Wonte"});
            }}>Add User</button>}</pre>            
        </div>
    )
}
