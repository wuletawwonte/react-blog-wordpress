import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import "./sidemenuuser.css";

export default function SideMenuUser() {
    const { user } = useContext(UserContext);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        axios
            .get(`/wp-json/wp/v2/users/?search=${user.name}`)
            .then((res) => {
                setAvatar(res.data[0].avatar_urls[96]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [user]);

    return (
        <div className="user-container">
            {avatar ? 
            <img className="avatar" src={avatar} alt={user.name} /> : ""}
            <h3>{user.name}</h3>  
            <p>@{user.nice_name}</p>          
        </div>
    )
}
