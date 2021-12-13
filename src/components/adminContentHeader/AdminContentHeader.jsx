import { useState, useEffect } from "react";
import "./admincontentheader.css";
import axios from "axios";
import Loading from "../loading/Loading";

export default function AdminContentHeader(props) {
    const { activeCategory, setActiveCategory } = props.category;
    console.log(activeCategory);
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
                        <button className={`header-link ${activeCategory === null ? 'active' : ''}`} onClick={() => {
                            setActiveCategory(null);
                        }}>
                            All
                        </button>
                    </li>
                    {categories.isLoaded
                        ? categories.data.map((category) => {
                              return (
                                  <li key={category.id}>
                                      <button className={`header-link ${activeCategory === category.id ? 'active' : ''}`} onClick={() => {
                                          setActiveCategory(category.id);
                                      }}>
                                          {category.name}
                                      </button>
                                  </li>
                              );
                          })
                        : <Loading type="container.gif" />}
                </ul>
            </div>
        </div>
    );
}
