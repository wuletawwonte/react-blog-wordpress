import { useState } from "react";
import AdminContentHeader from "../../components/adminContentHeader/AdminContentHeader";
import AdminContentPosts from "../../components/adminContentPosts/AdminContentPosts";

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
        <>
            <AdminContentHeader
                category={{ activeCategory, setActiveCategory }}
            />
            <AdminContentPosts category={activeCategory} />
        </>
    );
}
