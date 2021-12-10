import { useState, useEffect } from "react";
import "./admincontentheader.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AdminContentHeader() {
    const [categories, setCategories] = useState({
        isLoaded: false,
        data: null,
    });

    useEffect(() => {
        axios("/wp-json/wp/v2/categories")
            .then((res) => {
                setCategories({ isLoaded: true, data: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="main-content-header">
            <h3>All Posts posted either via wordpress or gracesoft</h3>
            <div className="admin-header-menu-container">
                <ul className="admin-header-menu">
                    <li>
                        <Link to="#" className="header-link active">
                            All
                        </Link>
                    </li>
                    {categories.isLoaded
                        ? categories.data.map((category) => {
                              return (
                                  <li key={category.id}>
                                      <Link to="#" className="header-link">
                                          {category.name}
                                      </Link>
                                  </li>
                              );
                          })
                        : "Loading"}
                </ul>
            </div>
        </div>
    );
}
