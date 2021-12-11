import { useState, useEffect } from "react";
import "./admincontentheader.css";
import axios from "axios";

export default function AdminContentHeader() {
    // const [activeCategory, setActiveCategory] = useState(null);
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
                        <button className="header-link active">
                            All
                        </button>
                    </li>
                    {categories.isLoaded
                        ? categories.data.map((category) => {
                              return (
                                  <li key={category.id}>
                                      <button className="header-link">
                                          {category.name}
                                      </button>
                                  </li>
                              );
                          })
                        : "Loading"}
                </ul>
            </div>
        </div>
    );
}
